import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
  Input,
} from "@/shared/ui";
import { useTranslation } from "react-i18next";
import { FlagNameField } from "@/features/flag-add-modal/ui/FlagNameField";
import { FlagColorSection } from "@/features/flag-add-modal/ui/FlagColorSection";
import lucideIcons from "@iconify/json/json/tabler.json";

import {
  Home,
  Search,
  Menu,
  User,
  Settings,
  Bell,
  Camera,
  Heart,
  Star,
  CheckCircle,
  Plus,
  Trash2,
  Edit,
  Eye,
  Lock,
  LogOut,
  Download,
  Upload,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface IconEntry {
  name: string;
  icon: React.ElementType;
}

interface IconType {
  body: string;
  width?: number;
  height?: number;
}

export const FlagAddModal = () => {
  const { t } = useTranslation();

  const [iconList, setIconList] = useState(
    Array.from(new Map(Object.entries(lucideIcons.icons).slice(0, 45))),
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const startSlice = useRef<number>(0);
  const endSlice = useRef<number>(45);
  const observer = useRef<IntersectionObserver | null>(null);
  const prevNode = useRef<HTMLDivElement | null>(null);
  const totalIcons = useRef<number>(0);

  const icons: IconEntry[] = [
    { name: "Home", icon: Home },
    { name: "Search", icon: Search },
    { name: "Menu", icon: Menu },
    { name: "User", icon: User },
    { name: "Settings", icon: Settings },
    { name: "Bell", icon: Bell },
    { name: "Camera", icon: Camera },
    { name: "Heart", icon: Heart },
    { name: "Star", icon: Star },
    { name: "CheckCircle", icon: CheckCircle },
    { name: "Plus", icon: Plus },
    { name: "Trash2", icon: Trash2 },
    { name: "Edit", icon: Edit },
    { name: "Eye", icon: Eye },
    { name: "Lock", icon: Lock },
    { name: "LogOut", icon: LogOut },
    { name: "Download", icon: Download },
    { name: "Upload", icon: Upload },
  ];

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
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">{t("Add flag")}</Button>
      </DialogTrigger>

      <DialogContent className="w-full !max-w-[520px] min-w-[200px]" aria-describedby="">
        <DialogTitle>{t("flagModal.header.title")}</DialogTitle>

        <FlagNameField />

        <FlagColorSection />

        <section>
          <h2>Выберите иконку</h2>

          <div className="flex justify-between gap-2 flex-wrap mt-2">
            {icons.map(({ name, icon: Icon }) => (
              <div
                className="border border-solid border-[#d9d9d9] p-2 cursor-pointer"
                key={name}
                title={name}
              >
                <Icon />
              </div>
            ))}
          </div>
        </section>

        <Accordion type="multiple">
          <AccordionItem value="icons">
            <AccordionTrigger className="p-2 w-full items-center bg-blue-950 transition-transform hover:no-underline cursor-pointer">
              Больше иконок
            </AccordionTrigger>

            <AccordionContent>
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
};
