import type { IGenreId } from '@/constants/genres'

export interface IMovieListItem {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: IGenreId[];
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

export const movieTypes = {
  ALL: 'ALL',
  MOVIES: 'MOVIES',
  SERIES: 'SERIES',
  ANIMATIONS: 'ANIMATIONS',
} as const;
