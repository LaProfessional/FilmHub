import { AccordionContent, AccordionItem, AccordionTrigger, Accordion } from "@/shared/ui";
import CustomColorEditor from "@/features/flag-add-modal/ui/CustomColorEditor";
import { PresentColorPalette } from "@/features/flag-add-modal/ui/PresentColorPalette";
import { useRef, useState, useEffect } from "react";
import { hexColorRegex } from "@/features/flag-add-modal/lib/colorUtils";
import iro from "@jaames/iro";
import ColorPicker = iro.ColorPicker;

export const FlagColorSection = () => {
  const [dataColors, setDataColors] = useState<string[]>(
    Array.from(
      new Set([
        "#8d8d9c",
        "#FFFFFF",
        "#FF0000",
        "#008000",
        "#0000FF",
        "#FFFF00",
        "#FFA500",
        "#800080",
        "#FFC0CB",
        "#A52A2A",
        "#808080",
        "#00FFFF",
        "#FF00FF",
        "#00FF00",
        "#000080",
        "#008080",
        "#808000",
        "#800000",
        "#C0C0C0",
        "#FFD700",
      ]),
    ),
  );
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>("#ffffff");
  const colorPickerRef = useRef<HTMLDivElement>(null);
  const iroInstanceRef = useRef<ColorPicker | null>(null);

  useEffect(() => {
    if (showColorPicker && colorPickerRef.current) {
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

  useEffect(() => {
    if (iroInstanceRef.current && isValidHex(selectedColor)) {
      iroInstanceRef.current.color.hexString = selectedColor;
    }
  }, [selectedColor]);

  const isValidHex = (value: string) => {
    return hexColorRegex.test(value);
  };

  return (
    <>
      <PresentColorPalette
        dataColors={dataColors}
        setSelectedColor={setSelectedColor}
        selectedColor={selectedColor}
      />

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
            <CustomColorEditor
              setDataColors={setDataColors}
              ref={colorPickerRef}
              isValidHex={isValidHex}
              setSelectedColor={setSelectedColor}
              selectedColor={selectedColor}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
