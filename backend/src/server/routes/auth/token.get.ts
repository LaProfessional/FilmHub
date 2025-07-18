import jwt from 'jsonwebtoken'
import { createTokens } from '~/helpers/auth'

export default defineEventHandler(async event => {
  const { modelUser } = useDB(event)
  const config = useRuntimeConfig(event)
  const {refresh} = getQuery(event)

  if (!refresh) return useApiError('token-required')

  let decoded = null
  try {
    decoded = jwt.verify(refresh, config.auth.tokenHashLong)
  }catch (err) {
    if (err?.name === 'TokenExpiredError') {
      return useApiError(event, 'token-expired')
    } else {
      return useApiError(event, 'token-invalid', err?.message)
    }
  }
  const user = await modelUser.findOne({ where: { email: decoded.data.email } })

  if (!user) {
    return useApiError(event, 'user-not-exist')
  }

  const { accessToken, refreshToken } = createTokens(event, user.email)
  await user.update({ token: accessToken })

  return { accessToken, refreshToken }
})
