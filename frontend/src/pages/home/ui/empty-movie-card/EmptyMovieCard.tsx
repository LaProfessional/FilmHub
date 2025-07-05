import { useTranslation } from "react-i18next";

export const EmptyMovieCard = () => {
  const { t } = useTranslation();

  return (
    <article className="h-[440px] max-h-[440px] border-2 hover:border-gray-500 cursor-pointer rounded-2xl transition hover:border-4 hover:translate-1.5">
      <h2 className="flex justify-center items-center h-[100%]">{t("Add new movie")}</h2>
    </article>
  );
};
