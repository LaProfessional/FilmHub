import { useEffect, useState } from 'react'
import { api } from "@/api";
import type { IMovieListItem } from '@/types/movie.types'
import type { IMoviePeriods } from '@/pages/home/model/filterData'
import type { GenreId } from '@/constants/genres'
import type { MovieTypeValue } from '@/constants/movieTypes'

export interface IFilters {
  period: IMoviePeriods[];
  genres: GenreId[]
  type: MovieTypeValue[]
}

export const useMovie = () => {
  const [movies, setMovies] = useState<IMovieListItem[]>([]);
  const [filters, setFilters] = useState<IFilters>({
    period: [],
    genres: [],
    type: []
  });
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const { movie: apiMovie } = api();

  const fetchData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const { data } = await apiMovie.search(filters);
      setMovies(data.results);
      setPage(data.page);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateFilters = (newFilters: Partial<IFilters>) => {
    setFilters({...filters, ...newFilters});
  };

  useEffect(() => {
    fetchData()
  }, [filters])

  return { fetchData, movies, updateFilters, page, loading };
};
