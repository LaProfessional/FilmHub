import { H3Event } from 'h3'
const PATH = 'https://kinopoiskapiunofficial.tech/api/v2.2'

export const useMovieApi = (event: H3Event) => {
  const config = useRuntimeConfig(event)

  const getList = () => {
    return $fetch(`${PATH}/films`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.kinopoisk.key,
        'Content-Type': 'application/json',
      },
    })
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
