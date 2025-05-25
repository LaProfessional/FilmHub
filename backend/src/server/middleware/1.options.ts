export default defineEventHandler(event => {
  if (getMethod(event) === 'OPTIONS') {
    setResponseStatus(event, 200)
    return '' // обязательно вернуть пустой ответ
  }
})
