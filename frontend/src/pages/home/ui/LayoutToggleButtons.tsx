import { useState } from "react";
import { LayoutGrid, LayoutList } from "lucide-react";
import { cn } from "@/shared/lib/utils";

import { Button } from "@/shared/ui";

export const LayoutToggleButtons = () => {
  const [layout, setLayout] = useState<string>("grid");

  // TODO: переделать на ToggleGroup
  return (
    <div className="flex items-center gap-3 max-h-[35px] p-4">
      <Button onClick={() => setLayout("grid")}>
        {/* TODO: повторяющиеся элементы */}
        <LayoutGrid size={18} className={cn("stroke-2", layout === "grid" && "stroke-3")} />
      </Button>

      <Button onClick={() => setLayout("list")}>
        <LayoutList
          size={18}
          className={cn("stroke-2 active:stroke-3", layout === "list" && "stroke-3")}
        />
      </Button>
    </div>
  );
};
