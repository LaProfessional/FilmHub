import { FilterPanel } from "@/widgets/filters/ui/FilterPanel";

import { ControlsPanel } from "@/pages/home/ui/ControlsPanel";
import { NavTabs } from "@/pages/home/ui/NavTabs";

import { Separator } from "@/shared/ui";
import { useEffect, useState } from 'react'
import { api } from '@/api'
import { id } from 'zod/v4/locales'
import { useMovie } from '@/hooks/useMovie'

export const HomePage = () => {
  const { movies, fetchData, updateFilters, loading } = useMovie()

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <nav className="flex flex-col m-auto p-6 max-w-[1280px] gap-3">
        <section className="flex justify-between items-center flex-wrap w-full">
          <NavTabs />
          <FilterPanel onUpdateFilters={updateFilters} />
        </section>

        <Separator orientation="horizontal" />

        {loading ? (
          <div className="text-center py-10">Загрузка фильмов...</div>
        ) : (
          <ControlsPanel movies={movies} />
        )}
      </nav>
    </div>
  );
};
