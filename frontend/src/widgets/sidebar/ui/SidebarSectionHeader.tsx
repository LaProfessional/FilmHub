import * as React from "react";
import styles from "@/widgets/sidebar/ui/SidebarSectionHeader.module.scss";

import { ReactComponent as ArrowSvg } from "@/shared/assets/sidebar/Arrow.svg";

import { Button } from "@/shared/ui/Button.tsx";

interface SidebarSectionHeaderProps {
    variant: string;
    headingStyle: string;
    toggleMenu: () => void;

    heading: string;
    isClose: Boolean;
}

export const SidebarSectionHeader: React.FC<SidebarSectionHeaderProps> = ({
                                                                              variant,
                                                                              headingStyle,
                                                                              heading,
                                                                              isClose,
                                                                              toggleMenu
                                                                          }) => {
    return (
        <div className={ styles[variant] }>
            { headingStyle === "title" ? (
                <h2 className={ styles[headingStyle] }>{ heading }</h2>
            ) : (
                <h3 className={ styles[headingStyle] }>{ heading }</h3>
            ) }

            <Button variant={ "collapseExpandBtn" } onClick={ toggleMenu }>
                <ArrowSvg className={ `${ styles.arrowSvg } ${ isClose ? styles.close : "" }` }/>
            </Button>
        </div>
    );
};

