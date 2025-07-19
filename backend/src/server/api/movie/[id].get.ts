import { useMovieApi } from '~/helpers/movie'

export default defineEventHandler(async event => {
  const id = getRouterParam(event, 'id')
  const movieApi = useMovieApi(event)

  return await movieApi.findById(id)
})
