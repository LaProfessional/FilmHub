import validator from 'validator'
import { MIN_LENGTH_NAME, MIN_LENGTH_PASSWORD } from '~/constants/auth'
import { H3Event } from 'h3'
import jwt from 'jsonwebtoken'

export const checkEmailValid = (combiner, email) => {
  if (!email) return combiner.set('email', 'is required field!')

  const isEmail = validator.isEmail(email)
  if (!isEmail) combiner.set('email', 'is not valid')
}

export const checkPasswordValid = (combiner, password) => {
  if (!password) return combiner.set('password', 'is required field!')

  const isMinLength = validator.isLength(password, { min: MIN_LENGTH_PASSWORD })
  if (!isMinLength) combiner.set('password', `i must be less than ${MIN_LENGTH_PASSWORD}`)
}

export const checkPasswordConfirmValid = (combiner, password, confirmPassword) => {
  if (!confirmPassword) return combiner.set('confirmPassword', 'is required field!')

  const isMinLength = validator.isLength(password, { min: MIN_LENGTH_PASSWORD })
  const isEquals = validator.equals(password, confirmPassword)
  if (!isMinLength) combiner.set('confirmPassword', `i must be less than ${MIN_LENGTH_PASSWORD}`)
  if (!isEquals) combiner.set('confirmPassword', '!== password')
}

export const checkNameValid = (combiner, name, key) => {
  if (!name) return combiner.set(key, `is required field!`)

  const isMinLength = validator.isLength(name, { min: MIN_LENGTH_NAME })
  if (!isMinLength) combiner.set(key, `i must be less than ${MIN_LENGTH_NAME}`)
}

export const createTokens = (event: H3Event, email: string) => {
  const config = useRuntimeConfig(event)

  const endDate = Math.floor(Date.now() / 1000) + 60 * 60
  const accessToken = jwt.sign(
    {
      exp: endDate,
    },
    config.auth.tokenHash,
  )

  const endDateLong = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7
  const refreshToken = jwt.sign(
    {
      exp: endDateLong,
      data: { email },
    },
    config.auth.tokenHashLong,
  )

  return { accessToken, refreshToken }
}
