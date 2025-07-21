import type { Axios } from 'axios'

export const createApi = (axios: Axios) => {
  const fetch = async (id: number) => {
    return axios.get('/movie/' + id)
  }

  const search = async (params: any) => {
    const queryString = new URLSearchParams(params).toString();
    return axios.get('/movie/search?' + queryString)
  }

  const fetchPopular = async () => {
    return axios.get('/movie')
  }

  return { fetch, fetchPopular, search }
}
