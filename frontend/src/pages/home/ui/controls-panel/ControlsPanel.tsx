import styles from "@/pages/home/ui/controls-panel/ControlsPanel.module.scss";
import { useTranslation } from "react-i18next";

import { Plus } from "lucide-react";

import { Button } from "@/shared/ui/Button.tsx";
import { LayoutToggleButtons } from "@/pages/home/ui/layout-toggle-buttons/LayoutToggleButtons.tsx";

export const ControlsPanel = () => {
    const { t } = useTranslation();

    return (
        <section className={ styles.controlsSection }>
            <div className={ styles.controlsGroup }>
                <LayoutToggleButtons />

                <Button variant={ "btnAddMovie" }>
                    <Plus/>
                    { t("Add movie") }
                </Button>
            </div>
        </section>
    );
};