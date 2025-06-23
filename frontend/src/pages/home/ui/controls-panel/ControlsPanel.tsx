import { useRef, useState } from "react";
import styles from "@/pages/home/ui/controls-panel/ControlsPanel.module.scss";
import { useTranslation } from "react-i18next";

import { Plus } from "lucide-react";

import { Button } from "@/shared/ui/Button.tsx";
import { LayoutToggleButtons } from "@/pages/home/ui/layout-toggle-buttons/LayoutToggleButtons.tsx";
import { MovieCard } from "@/pages/home/ui/movie-card/MovieCard.tsx";
// import { EmptyMovieCard } from "@/pages/home/ui/empty-movie-card/EmptyMovieCard.tsx";
import { Modal } from "@/shared/ui/Modal/Modal.tsx";
import { AddMovieModal } from "@/features/modals/ui/add-movie-modal/AddMovieModal.tsx";

import { useHandleClickOutside } from "@/shared/lib/useHandleClickOutside.ts";

export const ControlsPanel = () => {
    const { t } = useTranslation();

    const [ isOpen, setIsOpen ] = useState<boolean>(false);
    const modalRef = useRef<HTMLFormElement | null>(null);

    useHandleClickOutside(modalRef, isOpen, setIsOpen);

    return (
        <>
            <section className={ styles.controlsSection }>
                <h2 className={ styles.title }>{ t("All movies") } (N)</h2>

                <div className={ styles.controlsGroup }>
                    <LayoutToggleButtons/>

                    <Button variant={ "btnAddMovie" } onClick={ () => setIsOpen(!isOpen) }>
                        <Plus/>
                        { t("Add movie") }
                    </Button>
                </div>
            </section>

            <section className={ styles.cardsSection }>
                {/*<EmptyMovieCard/>*/ }
                <MovieCard/>
            </section>

            <Modal isOpen={ isOpen }>
                <AddMovieModal modalRef={ modalRef } isOpen={isOpen} setIsOpen={setIsOpen}/>
            </Modal>
        </>
    );
};