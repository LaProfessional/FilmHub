import { H3Event } from 'h3'
const PATH = 'https://kinopoiskapiunofficial.tech/api'
const TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDgxOTYwMWUxNjQ3NjIzMjM1ZTU0ODQzNDE5YjMyNyIsIm5iZiI6MTc1MTYzNTY2Ni4wNzUsInN1YiI6IjY4NjdkNmQyY2RjY2NiYWQzZTk5MjExOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4VBrit-MhTmCalkaDJuUs3cKVoaWsWbKE8IuDS8NUjo`

export const useMovieApi = (event: H3Event) => {
  const config = useRuntimeConfig(event)

  const search = (params) => {
    const queryString = new URLSearchParams(params).toString();
    return $fetch(`https://api.themoviedb.org/3/discover/movie?${queryString}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: 'application/json',
      },
    });
  };

  const getList = () => {
    return $fetch(`https://api.themoviedb.org/3/discover/movie`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: 'application/json',
      },
    })
  }

  const findById = (id) => {
    return $fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: 'application/json',
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
    search,
    findById,
  }
}
