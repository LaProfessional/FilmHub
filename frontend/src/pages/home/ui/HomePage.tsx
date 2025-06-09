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
    const { t } = useTranslation();

    const [ isLayoutGrid, setIsLayoutGrid ] = useState<boolean>(true);
    const [ isLayoutList, setIsLayoutList ] = useState<boolean>(false);

    const [ selectedIndex, setSelectedIndex ] = useState<number>(0);

    const toggleLayout = () => {
        // isLayoutGrid ? setIsLayoutList(!isLayoutList) : setIsLayoutGrid(!isLayoutGrid);
        if (isLayoutGrid) setIsLayoutGrid(prev => !prev);
        if (isLayoutList) setIsLayoutList(prev => !prev);
    };

    const handleSelect = (index: number) => setSelectedIndex(index);

    const navItems = [
        { label: t("All"), count: 124 },
        { label: t("Movies"), count: 2 },
        { label: t("Serials"), count: 55 },
        { label: t("Cartoons"), count: 224 }
    ];

    return (
        <div className={ styles.container }>
            <nav className={ styles.navContainer }>
                <section className={ styles.navSection }>
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
                </section>

                <hr/>

                <section className={ styles.controlsSection }>
                    <div className={ styles.controlsGroup }>
                        <div className={ styles.layoutControls }>
                            <Button
                                variant={ "btnLayoutControls" }
                                isActive={ isLayoutGrid }
                                onClick={ toggleLayout }
                            >
                                <LayoutGrid
                                    size={ 18 }
                                    className={ cls(styles.iconLayoutGrid, !isLayoutGrid && styles.disabled) }
                                />
                            </Button>

                            <Button
                                variant={ "btnLayoutControls" }
                                isActive={ isLayoutList }
                                onClick={ toggleLayout }
                            >
                                <LayoutList
                                    size={ 18 }
                                    className={ cls(styles.iconLayoutList, !isLayoutList && styles.disabled) }
                                />
                            </Button>
                        </div>

                        <Button variant={ "btnAddMovie" }>
                            <Plus/>
                            { t("Add movie") }
                        </Button>
                    </div>
                </section>
            </nav>
        </div>
    );
};

