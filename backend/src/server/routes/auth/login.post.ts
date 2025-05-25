import bcrypt from 'bcrypt'
import { checkEmailValid, checkPasswordValid, createTokens } from '~/helpers/auth'
import { useErrorCombiner } from '~/utils/validationCombiner'

type Login = {
  email: string
  password: string
}

export default defineEventHandler(async event => {
  const candidate: Login | null = await readBody(event)
  const config = useRuntimeConfig(event)

  const { modelUser } = useDB(event)
  const errors = useErrorCombiner()

  checkEmailValid(errors, candidate?.email)
  checkPasswordValid(errors, candidate?.password)

  if (errors.isNotEmpty()) {
    setResponseStatus(event, 400)
    return { detail: errors.get() }
  }

  const user = await modelUser.findOne({ where: { email: candidate.email } })
  if (!user) {
    setResponseStatus(event, 404)
    return { detail: `Пользователь с email '${candidate.email}' не найден!` }
  }

  const isPasswordCorrect = await bcrypt.compare(candidate.password, user.password)
  if (!isPasswordCorrect) {
    setResponseStatus(event, 401)
    return { detail: `Не верный пароль!` }
  }

  const { accessToken, refreshToken } = createTokens(event, candidate.email)
  await user.update({ token: accessToken })

  setCookie(event, 'refreshToken', refreshToken, {
    maxAge: config.auth.refresh.maxAge,
    httpOnly: true,
  })

  return {
    access: accessToken,
    ...user,
  }
})
