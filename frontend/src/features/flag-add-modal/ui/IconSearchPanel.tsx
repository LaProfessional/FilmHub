import { Input } from "@/shared/ui";
import React, { type ChangeEvent, useRef, useState } from "react";
import tablerIcons from "@iconify/json/json/tabler.json";
import { useVirtualizer } from "@tanstack/react-virtual";
import { RenderIcon } from "@/features/flag-add-modal/ui/RenderIcon";
import type { IconType } from "@/features/flag-add-modal/model/types";
import type { IconTypeMap } from "@/features/flag-add-modal/model/types";

interface IconSearchPanelProps {
  dataIcons: [string, IconType][];
  setDataIcons: React.Dispatch<React.SetStateAction<[string, IconType][]>>;
}

export const IconSearchPanel = ({ dataIcons, setDataIcons }: IconSearchPanelProps) => {
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
  const queryRef = useRef<string>("");
  const [iconEntries, setIconEntries] = useState<[string, IconTypeMap][]>(
    Object.entries(tablerIcons.icons),
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const iconsPerRow = 9;
  const rowCount = Math.ceil(iconEntries.length / iconsPerRow);

  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => containerRef.current,
    estimateSize: () => 48,
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    queryRef.current = e.target.value.trim();

    if (timeoutId.current) clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      setIconEntries(() => {
        return Object.entries(tablerIcons.icons).filter(([icon]) =>
          icon.includes(queryRef.current),
        );
      });
    }, 300);
  };

  const handleAddIcon = (IconName: string, icon: IconType) => {
    const alreadyExists = dataIcons.some(([name]) => name === IconName);
    if (alreadyExists) return;
    setDataIcons((prev) => [...prev, [IconName, icon]]);
  };

  return (
    <>
      <div className="p-2">
        <Input onChange={handleSearch} placeholder="Найти иконку" />
      </div>

      <div ref={containerRef} className="overflow-auto max-h-[300px] border rounded">
        <div
          style={{
            height: rowVirtualizer.getTotalSize(),
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const rowIndex = virtualRow.index;
            const startIndex = rowIndex * iconsPerRow;
            const rowIcons = iconEntries.slice(startIndex, startIndex + iconsPerRow);

            return (
              <div
                key={rowIndex}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: `translateY(${virtualRow.start}px)`,
                  height: `${virtualRow.size}px`,
                  width: "100%",
                }}
                className="flex gap-2 px-2"
              >
                {rowIcons.map(([name, icon]) => (
                  <div
                    onClick={() => handleAddIcon(name, icon)}
                    key={name}
                    title={name}
                    className="border border-solid border-[#d9d9d9] p-2 cursor-pointer rounded-[6px] flex items-center justify-center w-[40px] h-[40px]"
                  >
                    <RenderIcon icon={icon} />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
