import { useEffect, useState } from 'react'
import { api } from "@/api";

interface IMovieListItem {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type IMoviePeriods = "0000-1990" | "1990-2000" | "2000-2010" | "2010-2020" | "2020-2030";
const moviePeriods = {
  "all": "all",
  "before-1990": "before-1990",
  "1990-2000": "1990-2000",
  "2000-2010": "2000-2010",
  "2010-2020": "2010-2020",
  "2020-today": "2020-today",
};

export interface IFilters {
  period: IMoviePeriods | null;
}

export const useMovie = () => {
  const [movies, setMovies] = useState<IMovieListItem[]>([]);
  const [filters, setFilters] = useState<IFilters>({
    period: null,
  });
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const { movie: apiMovie } = api();

  const fetchData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const lFilters = clearFilters(filters)
      const { data, page } = await apiMovie.search(lFilters);
      setMovies(data.results);
      setPage(page);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const clearFilters = () => {
    const clonedObj = {}
    for (const key in filters) {
      if (filters[key] !== null) {
        clonedObj[key] = filters[key]
      }
    }

    return clonedObj
  }

  const updateFilters = (newFilters: IFilters) => {
    setFilters({...filters, ...newFilters});
  };

  useEffect(() => {
    fetchData()
  }, [filters])

  return { fetchData, movies, updateFilters, page, loading };
};
