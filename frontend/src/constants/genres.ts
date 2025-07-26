export const GENRES = [
  { id: 28, name: "action" },
  { id: 12, name: "adventure" },
  { id: 16, name: "animation" },
  { id: 35, name: "comedy" },
  { id: 80, name: "crime" },
  { id: 99, name: "documentary" },
  { id: 18, name: "drama" },
  { id: 10751, name: "family" },
  { id: 14, name: "fantasy" },
  { id: 36, name: "history" },
  { id: 27, name: "horror" },
  { id: 10402, name: "music" },
  { id: 9648, name: "mystery" },
  { id: 10749, name: "romance" },
  { id: 878, name: "science-fiction" },
  { id: 10770, name: "tv-movie" },
  { id: 53, name: "thriller" },
  { id: 10752, name: "war" },
  { id: 37, name: "western" },
]

export interface IGenre {
  id: typeof GENRES[number]["id"];
  name: typeof GENRES[number]["name"];
}

export type GenreId = typeof GENRES[number]["id"];
export type GenreName = typeof GENRES[number]["name"];
