import { Input } from "@/shared/ui";
import { useMemo, useRef } from "react";
import tablerIcons from "@iconify/json/json/tabler.json";
import { useVirtualizer } from "@tanstack/react-virtual";

export const IconSearchPanel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const iconEntries = useMemo(() => Object.entries(tablerIcons.icons), []);
  const iconsPerRow = 9;
  const rowCount = Math.ceil(iconEntries.length / iconsPerRow);

  const renderIcon = (icon: { body: string; width?: number; height?: number }) => {
    const w = icon.width || 24;
    const h = icon.height || 24;

    return (
      <div
        className="w-6 h-6 inline-block "
        dangerouslySetInnerHTML={{
          __html: `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon.body}</svg>`,
        }}
      />
    );
  };

  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => containerRef.current,
    estimateSize: () => 40,
  });

  return (
    <>
      <div className="p-2">
        <Input placeholder="Найти иконку" />
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
                className="flex gap-2 px-2 py-1"
              >
                {rowIcons.map(([name, icon]) => (
                  <div
                    key={name}
                    title={name}
                    className="border border-solid border-[#d9d9d9] p-2 cursor-pointer rounded-[6px] flex items-center justify-center w-[40px] h-[40px]"
                  >
                    {renderIcon(icon)}
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
