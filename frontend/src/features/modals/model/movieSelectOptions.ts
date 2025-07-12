export const movieSelectOptions = () => {
  const typeOptions = [
    { label: 'Movie' },
    { label: 'Serial' },
    { label: 'Cartoon' },
    { label: 'Animated series' },
  ]

  const genreOptions = [
    { label: 'Horror' },
    { label: 'Action' },
    { label: 'Comedy' },
    { label: 'Drama' },
    { label: 'Thriller' },
    { label: 'Melodrama' },
    { label: 'Sci-Fi' },
    { label: 'Fantasy' },
    { label: 'Animation' },
    { label: 'Family' },
    { label: 'War' },
    { label: 'Biography' },
    { label: 'Detective' },
    { label: 'Documentary' },
    { label: 'Adventure' },
    { label: 'Historical' },
  ]

  const countryOptions = [
    { label: 'USA' },
    { label: 'Russia' },
    { label: 'UK' },
    { label: 'France' },
    { label: 'Germany' },
    { label: 'Japan' },
    { label: 'South Korea' },
    { label: 'China' },
    { label: 'India' },
    { label: 'Canada' },
    { label: 'Other' },
  ]

  const ageOptions = [
    { label: 'G' },
    { label: 'PG' },
    { label: 'PG-13' },
    { label: 'R' },
    { label: 'NC-17' },
  ]

  return { typeOptions, genreOptions, countryOptions, ageOptions }
}
