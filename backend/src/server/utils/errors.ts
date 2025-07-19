import { H3Event } from 'h3'

type TokenErrorType =
  | 'token-invalid'
  | 'token-expired'
  | 'token-required'
  | 'user-not-exist'
  | 'user-exist'
  | 'bad-request'
  | 'unprocessable-entity'

interface ApiErrorResponse {
  detail: string
}

const errorDetails: Record<TokenErrorType, { status: number; message: string; detail: string }> = {
  'token-invalid': {
    status: 401,
    message: 'Token invalid',
    detail: '<access_token> is damaged and cannot be decoded.',
  },
  'token-expired': {
    status: 401,
    message: 'Token expired',
    detail: 'Your <access_token> has expired',
  },
  'token-required': {
    status: 401,
    message: 'Token required',
    detail: 'This API requires a mandatory header Authorization: Bearer <access_token>',
  },
  'user-not-exist': {
    status: 401,
    message: 'User does not exist',
    detail: 'This user does not exist',
  },
  'user-exist': {
    status: 409,
    message: 'Conflict',
    detail: 'This user is exist',
  },
  'bad-request': {
    status: 400,
    message: 'Bad request',
    detail: 'Invalid request body',
  },
}

export const useApiError = (
  event: H3Event,
  type: TokenErrorType,
  msg?: string | { detail: any },
): ApiErrorResponse => {
  const error = errorDetails[type]

  setResponseStatus(event, error.status, error.message)

  if (typeof msg === 'string') {
    return { detail: msg }
  } else if (typeof msg === 'object' && msg.hasOwnProperty('detail')) {
    return msg
  } else {
    return error
  }
}
