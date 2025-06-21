import { type TFunction } from 'i18next'

export const filterData = (t: TFunction) => {
  const genreFilters = [
    { label: 'Any genre', value: 'any' },
    { label: 'Action', value: 'action' },
    { label: 'Horror', value: 'horror' },
    { label: 'Comedy', value: 'comedy' },
    { label: 'Drama', value: 'drama' },
    { label: 'Thriller', value: 'thriller' },
    { label: 'Melodrama', value: 'melodrama' },
    { label: 'Sci-Fi', value: 'sci-fi' },
    { label: 'Detective', value: 'detective' },
    { label: 'Documentary', value: 'documentary' },
    { label: 'Animation', value: 'animation' },
    { label: 'Adventure', value: 'adventure' },
    { label: 'Historical', value: 'historical' },
    { label: 'Fantasy', value: 'fantasy' },
    { label: 'Family', value: 'family' },
    { label: 'War', value: 'war' },
    { label: 'Biography', value: 'biography' },
  ]

  const yearFilters = [
    { label: 'All years', value: 'all' },
    { label: t('Before', { year: 1990 }), value: 'before-1990' },
    { label: '1990-2000', value: '1990-2000' },
    { label: '2000-2010', value: '2000-2010' },
    { label: '2010-2020', value: '2010-2020' },
    { label: t('Today', { year: 2020 }), value: '2020-today' },
  ]

  const sortOptions = [
    { label: 'By rating', value: 'rating' },
    { label: 'Newest first', value: 'newest' },
    { label: 'Oldest first', value: 'oldest' },
    { label: 'By name: A-Z', value: 'az' },
    { label: 'By name: Z-A', value: 'za' },
  ]

  return { genreFilters, yearFilters, sortOptions }
}