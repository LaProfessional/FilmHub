import jwt from 'jsonwebtoken'
import { createTokens } from '~/helpers/auth'

export default defineEventHandler(async event => {
  const { modelUser } = useDB(event)
  const config = useRuntimeConfig(event)
  const refresh = getCookie(event, 'refreshToken')

  if (!refresh) {
    setResponseStatus(event, 400)
    return { detail: 'Token undefined' }
  }

  const decoded = jwt.verify(refresh, config.auth.tokenHashLong)
  const user = await modelUser.findOne({ where: { email: decoded.data.email } })

  if (!user) {
    setResponseStatus(event, 400)
    return { detail: 'Token invalid' }
  }

  const { accessToken, refreshToken } = createTokens(event, user.email)
  await user.update({ token: accessToken })

  setCookie(event, 'refreshToken', refreshToken, {
    maxAge: config.auth.refresh.maxAge,
    httpOnly: true,
  })

  return { accessToken }
})
