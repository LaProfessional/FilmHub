import styles from "@/pages/home/ui/controls-panel/ControlsPanel.module.scss";
import { useTranslation } from "react-i18next";

import { Plus } from "lucide-react";

import { Button } from "@/shared/ui";
import { LayoutToggleButtons } from "@/pages/home/ui/layout-toggle-buttons/LayoutToggleButtons";
import { MovieCard } from "@/pages/home/ui/movie-card/MovieCard";

export const ControlsPanel = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.controlsSection}>
        <h2 className={styles.title}>{t("allMovies")} (N)</h2>

        <div className={styles.controlsGroup}>
          <LayoutToggleButtons />

          <Button>
            <Plus />
            {t("Add movie")}
          </Button>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <MovieCard />
      </section>
    </>
  );
};
