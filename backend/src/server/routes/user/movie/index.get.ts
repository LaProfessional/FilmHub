export default defineEventHandler(async (event) => {
    const { modelUser } = useDB(event)
    const email = event.context.user.email

    const user = await modelUser.findOne({where: { email }})
    const userMovies = await user.getMovies()

    return userMovies
})