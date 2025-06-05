import styles from "./HomePage.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import cls from "@fvilers/cls";

import { LayoutGrid } from "lucide-react";
import { LayoutList } from "lucide-react";
import { Plus } from "lucide-react";

import { Filters } from "@/widgets/filters/ui/Filters.tsx";

import { Button } from "@/shared/ui/Button.tsx";

export const HomePage = () => {
    const [ isActive, setIsActive ] = useState(true);
    const [ isSelect, setIsSelect ] = useState(true);
    const { t } = useTranslation();


    const toggleLayout = () => setIsActive(prev => !prev);

    const selectItem = () => setIsSelect(!isSelect);

    return (
        <div className={ styles.container }>
            <nav className={ styles.nav }>
                <ul className={ styles.navItemWrapper }>
                    <li className={ cls(styles.navItem, isSelect && styles.select) }>{ t("All") } 124</li>
                    <li className={ styles.navItem }>{ t("Movies") } 2</li>
                    <li className={ styles.navItem }>{ t("Serials") } 55</li>
                    <li className={ styles.navItem }>{ t("Cartoons") } 224</li>
                </ul>

                <Filters/>
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
                                className={ cls(styles.controlLayoutSvg, isActive && styles.disabled) }
                            />
                        </Button>

                        <Button
                            variant={ "btnLayoutControls" }
                            isActive={ isActive }
                            onClick={ toggleLayout }
                        >
                            <LayoutList
                                size={ 18 }
                                className={ cls(styles.controlLayoutSvg, !isActive && styles.disabled) }
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

