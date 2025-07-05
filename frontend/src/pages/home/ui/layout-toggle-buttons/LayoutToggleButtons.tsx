import { useState } from "react";
import styles from "@/pages/home/ui/layout-toggle-buttons/LayoutToggleButtons.module.scss";
import { LayoutGrid, LayoutList } from "lucide-react";
import { cn } from "@/shared/lib/utils";

import { Button } from "@/shared/ui";

export const LayoutToggleButtons = () => {
  const [layout, setLayout] = useState<string>("grid");

  return (
    <div className={styles.layoutControls}>
      <Button onClick={() => setLayout("grid")}>
        <LayoutGrid
          size={18}
          className={cn(styles.iconLayoutGrid, layout === "grid" && styles.active)}
        />
      </Button>

      <Button onClick={() => setLayout("list")}>
        <LayoutList
          size={18}
          className={cn(styles.iconLayoutList, layout === "list" && styles.active)}
        />
      </Button>
    </div>
  );
};
