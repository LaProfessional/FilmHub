import { useMovieApi } from '~/helpers/movie'

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const movieApi = useMovieApi(event)

  const params = {
    page: query.page,
    search: query.search,
  }

  const resp = await movieApi.getList(params)

  return {
    message: resp,
  }
})
