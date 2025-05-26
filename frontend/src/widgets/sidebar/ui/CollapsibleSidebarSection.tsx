import * as React from "react";
import styles from "./CollapsibleSidebarSection.module.scss";
import { useCollapsible } from "@/widgets/sidebar/lib/useCollapsible.ts";

import { SidebarSectionHeader } from "@/widgets/sidebar/ui/SidebarSectionHeader.tsx";

interface CollapsibleSidebarSectionProps {
    children: React.ReactNode;
    variant: string;
    headingStyle: string;
    heading: string;
}

export const CollapsibleSidebarSection: React.FC<CollapsibleSidebarSectionProps> = ({
                                                                                        children,
                                                                                        variant,
                                                                                        headingStyle,
                                                                                        heading
                                                                                    }) => {
    const { toggleMenu, isClose, contentRef } = useCollapsible();

    return (
        <>
            <SidebarSectionHeader
                variant={ variant }
                headingStyle={ headingStyle }
                heading={ heading }
                toggleMenu={ toggleMenu }
                isClose={ isClose }
            />

            <div
                ref={ contentRef }
                className={ `${ styles.section } ${ isClose ? styles.close : "" }` }
            >{ children }
            </div>
        </>
    );
};