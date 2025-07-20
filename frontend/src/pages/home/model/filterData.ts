import { type TFunction } from "i18next";
import {GENRES } from '@/constants/genres'

export type IMoviePeriods =
  | "all"
  | "before-1990"
  | "1990-2000"
  | "2000-2010"
  | "2010-2020"
  | "2020-today";

export interface IDataOption {
  id: string;
  htmlFor: string;
  label: string;
  value: string;
}

const createGenres = () => {
  return GENRES.map((item) => {
    const labelSliced = item.name.split('-')
    const labelJoined = labelSliced.join(' ')
    const outLabel = (labelJoined[0] as string).toUpperCase() + labelJoined.slice(1)

    return { id: item.name, htmlFor: outLabel, label: outLabel, value: `${item.id}` };
  })
}

export const dataFilter = (t: TFunction) => {
  const dataGenre: IDataOption[] = createGenres()

  const dataYear: IDataOption[] = [
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
  ];

  const dataOptions = [
    { id: "rating", htmlFor: "rating", label: "By rating", value: "rating" },
    { id: "newest", htmlFor: "newest", label: "Newest first", value: "newest" },
    { id: "oldest", htmlFor: "oldest", label: "Oldest first", value: "oldest" },
    { id: "az", htmlFor: "az", label: "By name: A-Z", value: "az" },
    { id: "za", htmlFor: "za", label: "By name: Z-A", value: "za" },
  ];

  return { dataGenre, dataYear, dataOptions };
};
