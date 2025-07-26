export const movieTypes = {
  MOVIE: "movie",
  ANIMATIONS: "animations",
  SERIALS: "serials",
} as const;

export type MovieTypeValue = typeof movieTypes[keyof typeof movieTypes];
