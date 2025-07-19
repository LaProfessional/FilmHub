import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "@/api";

interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  } | null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams<{ id: string }>();
  const { movie: movieApi } = api();

  const releaseYear = movie.release_date?.match(/^\d{4}/)?.[0];
  const voteAverage = movie.vote_average?.toFixed(1);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      if (isLoading) return;
      setIsLoading(true);

      try {
        const { data } = await movieApi.fetch(+id);
        setMovie(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto p-6 text-white">
      <div className="relative flex gap-6 flex-col md:flex-row">
        <div className="w-full h-[80vh] overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full rounded-xl shadow-lg object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080]"></div>
        </div>

        <div className="absolute top-1/2 z-10 max-w-[50rem] left-10 -translate-y-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{movie.original_title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{releaseYear}</span>
            <span>•</span>
            <span>⭐ {voteAverage}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {movie.genres?.map((genre) => (
              <span key={genre.id} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                {genre.name}
              </span>
            ))}
          </div>

          <p className="text-gray-300 leading-relaxed">{movie.overview}</p>

          <div className="flex gap-4 mt-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg shadow transition">
              Смотреть
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow transition">
              В избранное
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
