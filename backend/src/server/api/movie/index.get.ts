import { useMovieApi } from '~/helpers/movie'

export default defineEventHandler(async event => {
  const movieApi = useMovieApi(event)

  return await movieApi.getList()
})
