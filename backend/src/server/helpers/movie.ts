import { H3Event } from 'h3'
const PATH = 'https://kinopoiskapiunofficial.tech/api'

export const useMovieApi = (event: H3Event) => {
  const config = useRuntimeConfig(event)

  const getList = (params: {page: number, search: string} = null) => {

    if (params !== null && params.search && params.page) {
      const { search, page } = params

      if (search.length > 3 && page > 0) {
        return $fetch(`${PATH}/v2.1/films/search-by-keyword?keyword=${search}&page=${page}`, {
          method: 'GET',
          headers: {
            'X-API-KEY': config.kinopoisk.key,
          },
        })
      }

      return []
    } else {
      return $fetch(`${PATH}/v2.2/films`, {
        method: 'GET',
        headers: {
          'X-API-KEY': config.kinopoisk.key,
          'Content-Type': 'application/json',
        },
      })
    }
  }

  const findOne = (id: number) => {
    return $fetch(`${PATH}/films/${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.kinopoisk.key,
        'Content-Type': 'application/json',
      },
    })
  }

  return {
    getList,
    findOne,
  }
}
