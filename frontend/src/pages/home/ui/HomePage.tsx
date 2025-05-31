import styles from "./HomePage.module.scss";

import { useTranslation } from "react-i18next";

import { LayoutGrid } from "lucide-react";
import { LayoutList } from "lucide-react";

import { Select } from "@/shared/ui/Select.tsx";
import { dataGenre, dataYear, sortOptions } from "@/pages/home/model/filterData.ts";

export const HomePage = () => {
    const { t } = useTranslation();

    return (
        <div className={ styles.container }>
            <header className={ styles.header }>
                <div className={ styles.titleWrapper }>
                    <h1 className={ styles.title }>{ t("allMovies") }</h1>
                    <p className={ styles.description }>{ t("Manage and organize your personal movie library") }</p>
                </div>

                <div className={ styles.selectWrapper }>
                    <Select data={ dataGenre }></Select>
                    <Select data={ dataYear }></Select>
                    <Select data={ sortOptions }></Select>
                </div>

                <div className={ styles.layoutControls }>
                    <LayoutGrid/>
                    <LayoutList/>
                </div>
            </header>
        </div>
    );
};
