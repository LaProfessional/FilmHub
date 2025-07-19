import { useMovieApi } from '~/helpers/movie'

interface ITmdbFilters {
  'primary_release_date.lte'?: string
  'primary_release_date.gte'?: string
  search?: string
  page?: number
}

interface IParams {
  period?: string
  search?: string
  page?: number
}

export const TMDB_PERIODS: Record<string, Partial<Pick<ITmdbFilters, 'primary_release_date.gte' | 'primary_release_date.lte'>>> = {
  'before-1990': {
    'primary_release_date.lte': '1990-01-01',
  },
  '1990-2000': {
    'primary_release_date.gte': '1990-01-01',
    'primary_release_date.lte': '2000-01-01',
  },
  '2000-2010': {
    'primary_release_date.gte': '2000-01-01',
    'primary_release_date.lte': '2010-01-01',
  },
  '2010-2020': {
    'primary_release_date.gte': '2010-01-01',
    'primary_release_date.lte': '2020-01-01',
  },
  '2020-today': {
    'primary_release_date.gte': '2020-01-01',
  },
}

export default defineEventHandler(async event => {
  const query: IParams = getQuery(event)
  const movieApi = useMovieApi(event)

  const params:ITmdbFilters = {}

  if (query.page) {
    params.page = query.page
  }

  if (query.search) {
    params.search = query.search
  }

  if (query.period && query.period !== 'all') {
    const periodParams = TMDB_PERIODS[query.period || '']
    Object.assign(params, periodParams)
  }

  return await movieApi.search(params)
})
