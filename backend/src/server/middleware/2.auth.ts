import jwt from 'jsonwebtoken'

export default defineEventHandler(event => {
  const PATHS = ['/category', '/user', '/profile']
  const currentPath = getRequestURL(event).pathname

  const index = PATHS.findIndex(path => {
    return currentPath.startsWith(path)
  })

  if (index > -1) {
    const config = useRuntimeConfig(event)

    const authorizationHeader = getRequestHeader(event, 'Authorization')
    if (!authorizationHeader) return useApiError(event, 'token-required')

    const token = authorizationHeader.match(/^Bearer\s+(.+)$/)?.[1]
    if (!token) return useApiError(event, 'token-required' )
    try {
      const decoded = jwt.verify(token, config.auth.tokenHash)
      event.context.user = { email: decoded.data.email }

      if (!decoded.exp) return useApiError(event, 'token-invalid', 'The token must contain an exp value.')

      const currentTime = Math.floor(Date.now() / 1000);
      if (decoded.exp < currentTime) {
        return useApiError(event, 'token-expired')
      }
    } catch (err) {
      if (err?.name === 'TokenExpiredError') {
        return useApiError(event, 'token-expired')
      } else {
        return useApiError(event, 'token-invalid', err?.message)
      }
    }
  }
})
