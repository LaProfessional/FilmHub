import styles from "@/pages/home/ui/controls-panel/ControlsPanel.module.scss";
import { useTranslation } from "react-i18next";

import { Plus } from "lucide-react";

import { Button } from "@/shared/ui/Button.tsx";
import { LayoutToggleButtons } from "@/pages/home/ui/layout-toggle-buttons/LayoutToggleButtons.tsx";
import { MovieCard } from "@/pages/home/ui/movie-card/MovieCard.tsx";
// import { EmptyMovieCard } from "@/pages/home/ui/empty-movie-card/EmptyMovieCard.tsx";

export const ControlsPanel = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className={ styles.controlsSection }>
                <h2 className={ styles.title }>{ t("allMovies") } (N)</h2>

                <div className={ styles.controlsGroup }>
                    <LayoutToggleButtons/>

                    <Button variant={ "btnAddMovie" }>
                        <Plus/>
                        { t("Add movie") }
                    </Button>
                </div>
            </section>

            <section className={ styles.cardsSection }>
                {/*<EmptyMovieCard/>*/}
                <MovieCard/>
            </section>
        </>
    );
};