import validator from 'validator';
import bcrypt from 'bcrypt';

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
    {
        name: 'confirmPassword',
        checkIsValid: (pass, confirmPass) => {
            return !validator.isEmpty(value) && validator.equals(value, )
        }
    },
    {
        name: 'lastName',
        checkIsValid: (value) => {
            return !validator.isEmpty(value)
        }
    },
    {
        name: 'firstName',
        checkIsValid: (value) => {
            return !validator.isEmpty(value)
        }
    }
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

type Candidate = {
    firstName: string
    lastName: string
    password: string
    confirmPassword: string
    email: string
}

export default defineEventHandler(async (event) => {
    const { modelUser } = useDB(event)
    const config = useRuntimeConfig(event)
    const candidate: Candidate = await readBody(event)
    const errors = startErrorCombiner()

    // TODO -:- Require refactoring!
    FIELDS_RULES.forEach(rule => {
        if (!candidate[rule.name]) {
            errors.set(rule.name, `Field ${rule.name} - required`)
        }

        if (validator.isEmpty(candidate[rule.name], { ignore_whitespace: true })) {
            errors.set(rule.name, getErr.call(rule))
        }

        if (['lastName', 'firstName'].includes(rule.name)) {
            const isMinLength = validator.isLength(candidate[rule.name], {min: MIN_LENGTH_NAME})
            if(!isMinLength) errors.set(rule.name, `${rule.name} must be greater than ${MIN_LENGTH_NAME}`)
        }

        if (rule.name === 'email') {
            const isEmail = validator.isEmail(candidate[rule.name])
            if (!isEmail) errors.set(rule.name, getErr.call(rule))
        }

        if (rule.name === 'password') {
            const isEquals = validator.equals(candidate.password, candidate.confirmPassword)
            const isMinLength = validator.isLength(candidate[rule.name], {min: MIN_LENGTH_PASSWORD})
            if (!isEquals) errors.set(rule.name, getErr.call(rule))
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

    const hasAlreadyUserEmail = await modelUser.findOne({where: {email: candidate.email}})
    if (hasAlreadyUserEmail?.email) {
        throw createError({
            error: "ValidationError",
            status: 400,
            statusMessage: "Bad Request",
            message: `Пользователь с email '${candidate.email}' уже существует!`,
        });
    }

    return modelUser.create({
        email: candidate.email,
        firstName: candidate.firstName,
        lastName: candidate.lastName,
        password: bcrypt.hashSync(candidate.password, config.auth.saltRounds),
    })
})