import styles from "@/widgets/sidebar/ui/SidebarSectionHeader.module.scss";
import cls from "@fvilers/cls";

import { ChevronDown } from "lucide-react";

import { Button } from "@/shared/ui/Button/Button";

interface SidebarSectionHeaderProps {
    variant: string;
    headingStyle: string;
    heading: string;

    toggleMenu: () => void;
    isClose: Boolean;
}

export const SidebarSectionHeader: React.FC<SidebarSectionHeaderProps> = ({
                                                                              variant,
                                                                              headingStyle,
                                                                              heading,
                                                                              toggleMenu,
                                                                              isClose
                                                                          }) => {
    return (
        <div className={ styles[variant] }>
            { headingStyle === "title" ? (
                <h2 className={ styles[headingStyle] }>{ heading }</h2>
            ) : (
                <h3 className={ styles[headingStyle] }>{ heading }</h3>
            ) }

            <Button variant={ "collapseExpandBtn" } onClick={ toggleMenu }>
                <ChevronDown  size={18} className={ cls(styles.arrowSvg, isClose && styles.close) }/>
            </Button>
        </div>
    );
};

