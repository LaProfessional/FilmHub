import { FilterPanel } from "@/widgets/filters/ui/FilterPanel";

import { ControlsPanel } from "@/pages/home/ui/ControlsPanel";
import { NavTabs } from "@/pages/home/ui/NavTabs";

import { Separator } from "@/shared/ui";
import { useEffect } from 'react'
import { useMovie } from '@/hooks/useMovie'
import type { MovieTypeValue } from '@/constants/movieTypes'

export const HomePage = () => {
  const { movies, fetchData, updateFilters, loading } = useMovie()

  const updateType = (newType: MovieTypeValue[]) => {
    updateFilters({type: newType})
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <nav className="w-full">
        <section className="flex justify-between items-center flex-wrap w-full">
          <NavTabs onChange={updateType} />
          <FilterPanel onUpdateFilters={updateFilters} />
        </section>

        <Separator orientation="horizontal" />

        <div className="mt-5">
          {loading ? (
            <div className="text-center py-10">Загрузка фильмов...</div>
          ) : (
            <ControlsPanel movies={movies} />
          )}
        </div>
      </nav>
    </div>
  );
};
