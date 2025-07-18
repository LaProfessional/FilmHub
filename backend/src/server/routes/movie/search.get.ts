import { useMovieApi } from '~/helpers/movie'

const CHARS_MIN_SEARCH = 5

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const movieApi = useMovieApi(event)

  const params = {
    page: !!query.page && typeof query.page === 'number' ? query.page : 1,
    search: query.search,
  }

  if (!params.search) {
    return useApiError(event, 'unprocessable-entity', 'Required parameter search is not defined')
  }

  if (params.search.length <= CHARS_MIN_SEARCH) {
    return useApiError(
      event,
      'unprocessable-entity',
      `Required parameter search is min length ${CHARS_MIN_SEARCH}`,
    )
  }

  return await movieApi.search(params.search as string, params.page)
})
