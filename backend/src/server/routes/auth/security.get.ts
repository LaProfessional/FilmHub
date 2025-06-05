import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async event => {
  const { modelUser } = useDB(event)
  const tokenHeader = getRequestHeader(event, 'Authorization')
  const token = tokenHeader.match(/^Bearer\s+(.+)$/)?.[1]
  const PRIVATE_KEY = 'TruLaLaLa'
  jwt.verify(token, PRIVATE_KEY)

  const user = await modelUser.findOne({ where: { token } })

  if (!user) {
    throw createError({
      error: 'TokenInvalid',
      status: 501,
      statusMessage: 'Access denied',
      message: `Токен не валидный`,
    })
  }

  return { resp: 'goooood' }
})
