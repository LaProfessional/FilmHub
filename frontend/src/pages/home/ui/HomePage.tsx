import styles from "./HomePage.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import cls from "@fvilers/cls";

import { LayoutGrid } from "lucide-react";
import { LayoutList } from "lucide-react";
import { Plus } from "lucide-react";

import { FilterPanel } from "@/widgets/filters/ui/FilterPanel.tsx";

import { Button } from "@/shared/ui/Button.tsx";

export const HomePage = () => {
    const [ isActive, setIsActive ] = useState<boolean>(true);
    const [ selectedIndex, setSelectedIndex ] = useState<number>(0);
    const { t } = useTranslation();


    const toggleLayout = () => setIsActive(prev => !prev);

    const handleSelect = (index: number) => setSelectedIndex(index);

    const navItems = [
        { label: t("All"), count: 124 },
        { label: t("Movies"), count: 2 },
        { label: t("Serials"), count: 55 },
        { label: t("Cartoons"), count: 224 }
    ];

    return (
        <div className={ styles.container }>
            <nav className={ styles.nav }>
                <ul className={ styles.navItemWrapper }>
                    { navItems.map((item, index) =>
                        <li
                            className={ cls(styles.navItem, selectedIndex === index && styles.select) }
                            onClick={ () => handleSelect(index) }
                            key={ index }
                        >
                            { item.label } { item.count }
                        </li>
                    ) }
                </ul>

                <FilterPanel/>
            </nav>

            <hr/>

            <nav className={ styles.wrapper }>
                <div className={ styles.controlsGroup }>
                    <div className={ styles.layoutControls }>
                        <Button
                            variant={ "btnLayoutControls" }
                            isActive={ !isActive }
                            onClick={ toggleLayout }
                        >
                            <LayoutGrid
                                size={ 18 }
                                className={ cls(styles.iconLayoutGrid, isActive && styles.disabled) }
                            />
                        </Button>

                        <Button
                            variant={ "btnLayoutControls" }
                            isActive={ isActive }
                            onClick={ toggleLayout }
                        >
                            <LayoutList
                                size={ 18 }
                                className={ cls(styles.iconLayoutList, !isActive && styles.disabled) }
                            />
                        </Button>
                    </div>

                    <Button variant={ "btnAddMovie" }>
                        <Plus/>
                        { t("Add movie") }
                    </Button>
                </div>
            </nav>
        </div>
    );
};

