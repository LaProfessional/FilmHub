import { Input } from "@/shared/ui";
import { useCallback, useEffect, useRef, useState } from "react";
import lucideIcons from "@iconify/json/json/tabler.json";

interface IconType {
  body: string;
  width?: number;
  height?: number;
}

export const IconSearchPanel = () => {
  const [iconList, setIconList] = useState(
    Array.from(new Map(Object.entries(lucideIcons.icons).slice(0, 45))),
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const startSlice = useRef<number>(0);
  const endSlice = useRef<number>(45);
  const observer = useRef<IntersectionObserver | null>(null);
  const prevNode = useRef<HTMLDivElement | null>(null);
  const totalIcons = useRef<number>(0);

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

  useEffect(() => {
    totalIcons.current = Object.entries(lucideIcons.icons).length - 1;
  }, []);

  const loadMoreIcons = () => {
    const nextStart = startSlice.current + 45;
    const nextEnd = endSlice.current + 45;

    const more = Object.entries(lucideIcons.icons).slice(nextStart, nextEnd);

    setIconList((prev) => {
      const allEntries = [...prev, ...more];
      const uniqueEntries = new Map<string, [string, IconType]>();

      for (const [name, icon] of allEntries) {
        if (!uniqueEntries.has(name)) {
          uniqueEntries.set(name, [name, icon]);
        }
      }

      return Array.from(uniqueEntries.values());
    });

    startSlice.current = nextStart;
    endSlice.current = nextEnd;
  };

  const lastIconRef = useCallback((node: HTMLDivElement) => {
    if (node) {
      if (!observer.current) {
        observer.current = new IntersectionObserver(
          (entries) => {
            if (entries[0]?.isIntersecting) {
              loadMoreIcons();
            }
          },
          {
            root: containerRef.current,
            rootMargin: "0px",
            threshold: 0.5,
          },
        );
      }

      if (prevNode.current) observer.current.unobserve(prevNode.current);
      prevNode.current = node;
      observer.current.observe(prevNode.current);

      if (endSlice.current >= totalIcons.current) observer.current.disconnect();
    }
  }, []);

  return (
    <>
      <div className="p-2">
        <Input placeholder="Найти иконку" />
      </div>

      <section className="overflow-auto max-h-[200px]">
        <div ref={containerRef} className="flex mt-2.5 gap-2 flex-wrap justify-between">
          {iconList.map(([name, icon], index) => (
            <div
              key={name}
              title={name}
              ref={index === iconList.length - 1 ? lastIconRef : null}
              className="border border-solid border-[#d9d9d9] p-2 cursor-pointer rounded-[6px] flex items-center"
            >
              {renderIcon(icon)}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
