import { type FC } from 'react'

import { Eye, Trash2, Pencil } from "lucide-react";

import { Button } from "@/shared/ui";
import { useNavigate } from 'react-router'

interface Props {
  movies: any[]
}

// @ts-ignore
/**
 * const GenreList: FC = (card: any) => {
 *   return (
 *     <div className="flex gap-[5px] mb-3 overflow-ellipsis overflow-hidden">
 *       {card.genres.map((genre: any, index: number) => (
 *         <span
 *           className="leading-1 whitespace-nowrap text-[12px] text-[#fafafa] bg-[#1f2937] rounded-full py-[9px] px-[3px]"
 *           key={index}
 *         >
 *           {genre}
 *         </span>
 *       ))}
 *     </div>
 *   );
 * };
 */

export const MovieCard: FC<Props> = ({ movies = [] }) => {
  const navigate = useNavigate();

  return movies.map((card, index) => (
    <article className="max-h-fit h-auto " key={index}>
      <div className="relative">
        <img
          className="block w-full h-full object-cover rounded-t-[12px] rounded-b-[0] border-[1px] border-[#FFFFFF19] border-b-0"
          src={`https://image.tmdb.org/t/p/w300/${card.poster_path}`}
          alt="movieCard"
        />
        <span className="absolute top-[10px] right-[10px] bg-[#f59e0b] rounded-[4px] text-amber-50 text-[12px] font-semibold py-0.5 px-1.5">
          {card.vote_average}
        </span>
      </div>

      <div className="border-[1px] border-[#FFFFFF19] rounded-t-[0] rounded-b-[12px] p-3">
        <div className="flex justify-between mb-2">
          <h3 className="max-w-[200px] overflow-ellipsis whitespace-nowrap overflow-hidden font-semibold text-[#fafafa]">
            {card.title}
          </h3>
          <span>{card.release_date}</span>
        </div>

        <p className=" relative text-ellipsis overflow-hidden [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] max-h-[60px] mb-3">
          {card.description}
        </p>

        <div className="flex justify-between items-center h-full max-h-[50px]">
          <Button onClick={() => {
            navigate(`/movie/${card.id}`)
          }}>
            <Eye size={16} />
            Подробнее
          </Button>

          <div className="flex items-center gap-2">
            <Button>
              <Pencil size={16} />
            </Button>

            <Button>
              <Trash2 size={16} />
            </Button>
          </div>
        </div>
      </div>
    </article>
  ));
};
