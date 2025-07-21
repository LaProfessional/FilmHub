import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "@/api";
import type { MovieMore } from '@/types/movie.types'
import { Button } from '@/shared/ui'

export const MoviePage = () => {
  const [movie, setMovie] = useState<MovieMore | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams<{ id: string }>();
  const { movie: movieApi } = api();

  const releaseYear = (movie as MovieMore)?.release_date?.match(/^\d{4}/)?.[0];
  const voteAverage = (movie as MovieMore)?.vote_average?.toFixed(1);

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
      {!!movie ? (
        <div className="relative flex gap-6 flex-col md:flex-row">
          <div className="w-full h-[80vh] overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full rounded-xl shadow-lg object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080]"></div>
          </div>

          <div
            className="absolute top-1/2 z-10 max-w-[50rem] left-10 -translate-y-1/2 flex flex-col gap-4">
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
              <Button>
                Смотреть
              </Button>
              <Button>
                В избранное
              </Button>
            </div>
          </div>
        </div>
      ): (
        <h1>Загрузка</h1>
      )}
    </div>
  );
};
