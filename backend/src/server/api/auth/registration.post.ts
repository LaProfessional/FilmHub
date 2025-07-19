import bcrypt from 'bcrypt'
import { useErrorCombiner } from '~/utils/validationCombiner'
import {
  checkEmailValid,
  checkNameValid,
  checkPasswordConfirmValid,
  checkPasswordValid,
} from '~/helpers/auth'
import { ICandidate } from '~/types/user'

export default defineEventHandler(async event => {
  // === Init dependency
  const { modelUser } = useDB(event)
  const config = useRuntimeConfig(event)
  const candidate: ICandidate = await readBody(event)
  const errors = useErrorCombiner()

  // === Validation request body
  checkEmailValid(errors, candidate.email)
  checkPasswordValid(errors, candidate.password)
  checkPasswordConfirmValid(errors, candidate.password, candidate.confirmPassword)
  checkNameValid(errors, candidate.firstName, 'First name')
  checkNameValid(errors, candidate.lastName, 'Last name')

  if (errors.isNotEmpty()) return useApiError(event, 'bad-request', { detail: errors.get() })

  // === Check user existed
  const user = await modelUser.findOne({ where: { email: candidate.email } })
  if (user?.email) return useApiError(event, 'user-exist')

  // === Create new user
  return await modelUser.create({
    email: candidate.email,
    firstName: candidate.firstName,
    lastName: candidate.lastName,
    password: bcrypt.hashSync(candidate.password, config.auth.saltRounds),
  })
})
