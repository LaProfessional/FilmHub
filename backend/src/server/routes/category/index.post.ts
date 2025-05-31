import {
  checkColorHexValid,
  checkIconValid,
  checkTitleValid,
  checkValueValid,
} from '~/helpers/category'

export default defineEventHandler(async event => {
  const data = await readBody(event)
  const { modelUser } = useDB(event)
  const errors = useErrorCombiner()
  const email = event.context.user.email

  checkTitleValid(errors, data.title)
  checkValueValid(errors, data.value)
  checkIconValid(errors, data.icon)
  checkColorHexValid(errors, data.colorHex)

  if (errors.isNotEmpty()) {
    setResponseStatus(event, 403)
    return { detail: errors.get() }
  }

  const user: any = await modelUser.findOne({ where: { email } })

  await user.createCategory({
    title: data.title,
    value: data.value,
    colorHex: data.colorHex,
    icon: data.icon,
  })

  const check = await user.getCategories()

  return {
    user,
    check,
  }
})
