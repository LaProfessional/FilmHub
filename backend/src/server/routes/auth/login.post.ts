import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const MIN_LENGTH_PASSWORD = 8
const MIN_LENGTH_NAME = 2

// TODO -:- Require refactoring!
const FIELDS_RULES = [
    {
        name: 'email',
        checkIsValid: (value) => {
            return validator.isEmail(value)
        }
    },
    {
        name: 'password',
        checkIsValid: (value) => {
            return !validator.isEmpty(value)
        }
    },
]

function getErr()  {
    return `Field ${this.name} - invalid`
}

const startErrorCombiner = () => {
    const errors = []
    let isNotEmpty = false

    return {
        set(key, err) {
            errors.push({[key]: err})
            isNotEmpty = true
        },
        get() {
            return errors
        },
        isNotEmpty() {
            return isNotEmpty
        }
    }
}

type Login = {
    email: string
    password: string
}

export default defineEventHandler(async (event) => {
    const { modelUser } = useDB(event)
    const config = useRuntimeConfig(event)
    const candidate: Login = await readBody(event)
    const errors = startErrorCombiner()

    // TODO -:- Require refactoring!
    FIELDS_RULES.forEach(rule => {
        if (!candidate[rule.name]) {
            errors.set(rule.name, `Field ${rule.name} - required`)
        }

        if (validator.isEmpty(candidate[rule.name], { ignore_whitespace: true })) {
            errors.set(rule.name, getErr.call(rule))
        }

        if (rule.name === 'email') {
            const isEmail = validator.isEmail(candidate[rule.name])
            if (!isEmail) errors.set(rule.name, getErr.call(rule))
        }

        if (rule.name === 'password') {
            const isMinLength = validator.isLength(candidate[rule.name], {min: MIN_LENGTH_PASSWORD})
            if (!isMinLength) errors.set(rule.name, `${rule.name} must be less than ${MIN_LENGTH_PASSWORD}`)
        }
    })

    if (errors.isNotEmpty()) {
        throw createError({
            error: "ValidationError",
            status: 400,
            statusMessage: "Bad Request",
            message: "Некоторые обязательные поля не заполнены:" + errors.get().reduce((sum, err) => sum += ` $$ ${err[Object.keys(err)[0]]}`, ''),
        });
    }

    const user = await modelUser.findOne({where: {email: candidate.email}})
    if (!user?.email) {
        throw createError({
            error: "ValidationError",
            status: 404,
            statusMessage: "Bad Request",
            message: `Пользователь с email '${candidate.email}' не найден!`,
        });
    }

    const isPasswordCorrect = await bcrypt.compare(candidate.password, user.password);

    if (!isPasswordCorrect) {
        throw createError({
            error: "PasswordError",
            status: 401,
            statusMessage: "Access denied",
            message: `Не верный пароль!`,
        });
    }

    const PRIVATE_KEY = 'TruLaLaLa'
    const PRIVATE_KEY_LONG = 'asdfjhqweiunhwieurcn23r'

    const endDate = Math.floor(Date.now() / 1000) + (60 * 60)
    const accessToken = jwt.sign({
        exp: endDate,
    }, PRIVATE_KEY);

    const endDateLong = Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7)
    const refreshToken = jwt.sign({
        exp: endDateLong,
        data: { email: user.email }
    }, PRIVATE_KEY_LONG);

    await user.update({token: accessToken})

    setCookie(event, "refreshToken", refreshToken, { maxAge: 60 * 60 * 24 * 7, httpOnly: true });

    setResponseHeaders(event, {
        Authorization: `Bearer ${accessToken}`
    });

    return user
})