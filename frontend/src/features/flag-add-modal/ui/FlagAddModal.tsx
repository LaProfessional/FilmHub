import {
  Input,
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion,
} from "@/shared/ui";
import { useTranslation } from "react-i18next";
import iro from "@jaames/iro";
import { useRef, useState, useEffect } from "react";

const FlagAddModal = () => {
  const { t } = useTranslation();

  const dataColors = new Set([
    "#e91e63",
    "#3f51b5",
    "#2196f3",
    "#ff9800",
    "#9c27b0",
    "#009688",
    "#f44336",
    "#4caf50",
    "#a855f7",
    "#6366f1",
    "#3b82f6",
    "#14b8a6",
    "#22c55e",
    "#f59e0b",
    "#f97316",
    "#ef4444",
    "#10b981",
    "#8b5cf6",
  ]);

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>("#ff0000");
  const colorPickerRef = useRef<HTMLDivElement>(null);
  const iroInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (showColorPicker && colorPickerRef.current) {
      if (iroInstanceRef.current) {
        iroInstanceRef.current.off("color:change");
        iroInstanceRef.current = null;
        colorPickerRef.current.innerHTML = "";
      }

      // @ts-expect-error: iro.ColorPicker не имеет явно объявленного конструктора
      const picker = new iro.ColorPicker(colorPickerRef.current, {
        width: 200,
        color: selectedColor,
      });

      picker.on("color:change", (color: { hexString: string }) => {
        setSelectedColor(color.hexString);
      });

      iroInstanceRef.current = picker;
    }
  }, [showColorPicker]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">{t("Add flag")}</Button>
      </DialogTrigger>

      <DialogContent aria-describedby="">
        <DialogTitle>{t("flagModal.header.title")}</DialogTitle>

        <label className="flex flex-col gap-2">
          Название
          <Input placeholder={t("flagModal.body.name")} />
        </label>

        <section>
          <h2>Цвет</h2>
          <ul className="flex flex-wrap gap-2 justify-between w-full mt-2">
            {Array.from(dataColors).map((col, index) => (
              <li
                key={index}
                onClick={() => setSelectedColor(col)}
                className={`w-[40px] h-[40px] rounded-full cursor-pointer border-2 ${
                  selectedColor === col ? "border-black" : "border-transparent"
                }`}
                style={{ backgroundColor: col }}
              />
            ))}
          </ul>
        </section>

        <Accordion type="multiple">
          <AccordionItem className="border-none" value="color">
            <AccordionTrigger
              className="p-2 w-full items-center bg-blue-950 transition-transform hover:no-underline cursor-pointer"
              onClick={() => setShowColorPicker((prev) => !prev)}
            >
              Свой цвет
            </AccordionTrigger>
          </AccordionItem>

          <AccordionItem value="color">
            <AccordionContent>
              <div className="flex justify-between items-center">
                <div className="mt-4">
                  <div ref={colorPickerRef} className="mx-auto" />
                </div>

                <div className="flex flex-col items-center">
                  <p className="text-lg">Цвет: {selectedColor}</p>
                  <div
                    style={{ backgroundColor: `${selectedColor}` }}
                    className="w-[120px] h-[120px] rounded-[6px] border-[gray] border border-dashed mb-3"
                  ></div>

                  <Button className="mb-3">Добавить цвет</Button>

                  <label>
                    Введите цвет
                    <Input placeholder="HEX" />
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
};

export default FlagAddModal;
