import { useState } from "react";
import styles from "@/pages/home/ui/layout-toggle-buttons/LayoutToggleButtons.module.scss";
import { LayoutGrid, LayoutList } from "lucide-react";
import cls from "@fvilers/cls";

import { Button } from "@/shared/ui/Button.tsx";

export const LayoutToggleButtons = () => {
    const [ layout, setLayout ] = useState<string>("grid");

    return (
        <div className={ styles.layoutControls }>
            <Button
                variant={ "btnLayoutControls" }
                isActive={ layout === "grid" }
                onClick={ () => setLayout("grid") }
            >
                <LayoutGrid
                    size={ 18 }
                    className={ cls(styles.iconLayoutGrid, layout === "grid" && styles.active) }
                />
            </Button>

            <Button
                variant={ "btnLayoutControls" }
                isActive={ layout === "list" }
                onClick={ () => setLayout("list") }
            >
                <LayoutList
                    size={ 18 }
                    className={ cls(styles.iconLayoutList, layout === "list" && styles.active) }
                />
            </Button>
        </div>
    );
};