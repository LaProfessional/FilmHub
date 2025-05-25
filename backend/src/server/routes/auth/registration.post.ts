import bcrypt from 'bcrypt';
import {useErrorCombiner} from "~/utils/validationCombiner";
import {checkEmailValid, checkNameValid, checkPasswordConfirmValid, checkPasswordValid} from "~/helpers/auth";

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
    const errors = useErrorCombiner()

    checkEmailValid(errors, candidate.email)
    checkPasswordValid(errors, candidate.password)
    checkPasswordConfirmValid(errors, candidate.password, candidate.confirmPassword)
    checkNameValid(errors, candidate.firstName, 'First name')
    checkNameValid(errors, candidate.lastName, 'Last name')

    if (errors.get().length) {
        setResponseStatus(event, 400)
        return { detail: errors.get() }
    }

    const hasAlreadyUserEmail = await modelUser.findOne({where: {email: candidate.email}})
    if (hasAlreadyUserEmail?.email) {
        setResponseStatus(event, 400)
        return { detail: `Пользователь с email '${candidate.email}' уже существует!` }
    }

    return modelUser.create({
        email: candidate.email,
        firstName: candidate.firstName,
        lastName: candidate.lastName,
        password: bcrypt.hashSync(candidate.password, config.auth.saltRounds),
    })
})