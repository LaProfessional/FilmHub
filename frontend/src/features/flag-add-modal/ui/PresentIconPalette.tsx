import { RenderIcon } from "@/features/flag-add-modal/ui/RenderIcon";
import type { IconType } from "@/features/flag-add-modal/model/types";

interface PresentIconPaletteProps {
  dataIcons: [string, IconType][];
}

export const PresentIconPalette = ({ dataIcons }: PresentIconPaletteProps) => {
  return (
    <section>
      <h2>Выберите иконку</h2>
      <div className="flex gap-2 flex-wrap mt-2 max-h-[140px] overflow-auto">
        {dataIcons.map(([name, icon]) => (
          <div
            className="basis-[calc((100%-9*8px)/10)] border border-solid border-[#d9d9d9] p-1 cursor-pointer max-w-[40px] h-[40px] rounded-[6px] flex items-center justify-center"
            key={name}
            title={name}
          >
            <RenderIcon icon={icon} />
          </div>
        ))}
      </div>
    </section>
  );
};
