import {useMovieApi} from "~/helpers/movie";

export default defineEventHandler(async (event) => {
  const movieApi = useMovieApi(event)
  const resp = await movieApi.getList()

  return {
    message: resp
  }
});
