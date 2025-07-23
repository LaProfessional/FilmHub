import type { IconType } from "@/features/flag-add-modal/model/types";

interface RenderIconProps {
  icon: IconType;
}

export const RenderIcon = ({ icon }: RenderIconProps) => {
  return (
    <div
      className="w-6 h-6 inline-block"
      dangerouslySetInnerHTML={{
        __html: `<svg xmlns="http://www.w3.org/2000/svg" width="${icon.width || 24}" height="${icon.height || 24}" viewBox="0 0 ${icon.width || 24} ${icon.height || 24}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon.body}</svg>`,
      }}
    />
  );
};
