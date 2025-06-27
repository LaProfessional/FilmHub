import { type TFunction } from "i18next"

export const dataFilter = (t: TFunction) => {
  const dataGenre = [
    { id: "Any genre", htmlFor: "Any genre", label: "Any genre", value: "any" },
    { id: "Action", htmlFor: "Action", label: "Action", value: "action" },
    { id: "Horror", htmlFor: "Horror", label: "Horror", value: "horror" },
    { id: "Comedy", htmlFor: "Comedy", label: "Comedy", value: "comedy" },
    { id: "Drama", htmlFor: "Drama", label: "Drama", value: "drama" },
    { id: "Thriller", htmlFor: "Thriller", label: "Thriller", value: "thriller" },
    { id: "Romance", htmlFor: "Romance", label: "Romance", value: "romance" },
    { id: "Sci-Fi", htmlFor: "Sci-Fi", label: "Sci-Fi", value: "sci-fi" },
    { id: "Detective", htmlFor: "Detective", label: "Detective", value: "detective" },
    { id: "Documentary", htmlFor: "Documentary", label: "Documentary", value: "documentary" },
    { id: "Animation", htmlFor: "Animation", label: "Animation", value: "animation" },
    { id: "Adventure", htmlFor: "Adventure", label: "Adventure", value: "adventure" },
    { id: "Historical", htmlFor: "Historical", label: "Historical", value: "historical" },
  ]

  const dataYear = [
    { id: "All years", htmlFor: "All years", label: "All years", value: "all" },
    {
      id: "Before 1990",
      htmlFor: "Before 1990",
      label: t("Before", { year: 1990 }),
      value: "before-1990",
    },
    { id: "1990-2000", htmlFor: "1990-2000", label: "1990-2000", value: "1990-2000" },
    { id: "2000-2010", htmlFor: "2000-2010", label: "2000-2010", value: "2000-2010" },
    { id: "2010-2020", htmlFor: "2010-2020", label: "2010-2020", value: "2010-2020" },
    {
      id: "2020-Today",
      htmlFor: "2020-Today",
      label: t("Today", { year: 2020 }),
      value: "2020-today",
    },
  ]

  const dataOptions = [
    { id: "rating", htmlFor: "rating", label: "By rating", value: "rating" },
    { id: "newest", htmlFor: "newest", label: "Newest first", value: "newest" },
    { id: "oldest", htmlFor: "oldest", label: "Oldest first", value: "oldest" },
    { id: "az", htmlFor: "az", label: "By name: A-Z", value: "az" },
    { id: "za", htmlFor: "za", label: "By name: Z-A", value: "za" },
  ]

  return { dataGenre, dataYear, dataOptions }
}
