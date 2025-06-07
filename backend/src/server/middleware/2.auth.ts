import jwt from 'jsonwebtoken'

export default defineEventHandler(event => {
  const PATHS = ['/category', '/user']
  const currentPath = getRequestURL(event).pathname

  const index = PATHS.findIndex(path => {
    return currentPath.startsWith(path)
  })

  if (index > -1) {
    const config = useRuntimeConfig(event)
    const tokenHeader = getRequestHeader(event, 'Authorization')
    const refreshToken = getCookie(event, 'refreshToken')
    if (!tokenHeader) {
      setResponseStatus(event, 401, 'Unauthorized')
      return {
        detail:
          'The Authorization header is not defined, either it is empty, or it does not have a Bearer <your_token> template',
      }
    }

    const token = tokenHeader.match(/^Bearer\s+(.+)$/)?.[1]
    if (!token) {
      setResponseStatus(event, 401, 'Unauthorized')
      return {
        detail: 'Header template Authorization does not match template: Bearer <your_token>',
      }
    }

    try {
      jwt.verify(token, config.auth.tokenHash)

      const refreshTokenDecoded = jwt.verify(refreshToken, config.auth.tokenHashLong)
      event.context.user = { email: refreshTokenDecoded.data.email }
    } catch (err) {
      setResponseStatus(event, 401, 'Unauthorized')
      return { detail: err }
    }
  }
})
