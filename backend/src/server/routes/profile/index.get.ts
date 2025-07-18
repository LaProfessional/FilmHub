export default defineEventHandler(async event => {
  const { modelUser } = useDB(event)
  const email = event.context.user.email

  return await modelUser.findOne({ where: { email } })
})
