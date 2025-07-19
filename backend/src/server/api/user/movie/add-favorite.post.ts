import { useMovieApi } from '~/helpers/movie'

export default defineEventHandler(async event => {
  const { modelUser } = useDB(event)
  const body = await readBody(event)
  const movieApi = useMovieApi(event)
  const email = event.context.user.email

  if (!body.movieId) {
    return useApiError(event, 'bad-request', 'Required parameter movieId is not specified')
  }

  const movie = await movieApi.findOne(body.movieId)

  const user = await modelUser.findOne({ where: { email } })
  await user.createMovie({
    movie: movie,
  })
  const userMovies = await user.getMovies()

  return userMovies
})
