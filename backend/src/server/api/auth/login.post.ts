import bcrypt from 'bcrypt'
import { checkEmailValid, checkPasswordValid, createTokens } from '~/helpers/auth'
import { useErrorCombiner } from '~/utils/validationCombiner'
import { ICandidate } from '~/types/user'

type Login = {
  email: ICandidate['email']
  password: ICandidate['password']
}

export default defineEventHandler(async event => {
  // === Init dependency
  const candidate: Login | null = await readBody(event)
  const { modelUser } = useDB(event)
  const errors = useErrorCombiner()

  // === Validation request body
  checkEmailValid(errors, candidate?.email)
  checkPasswordValid(errors, candidate?.password)
  if (errors.isNotEmpty()) return useApiError(event, 'bad-request', { detail: errors.get() })

  // === Check user existed
  const user: any = await modelUser.findOne({ where: { email: candidate.email } })
  if (!user) return useApiError(event, 'user-not-exist')

  // === Check password from bd and body
  const isPasswordCorrect = await bcrypt.compare(candidate.password, user.password)
  if (!isPasswordCorrect) return useApiError(event, 'bad-request', { detail: 'Password invalid'})

  // === Start authorization
  const { accessToken, refreshToken } = createTokens(event, candidate.email)
  await user.update({ token: accessToken })

  // === Out
  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  }
})
