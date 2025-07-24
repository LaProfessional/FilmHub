import { AccordionContent, AccordionItem, AccordionTrigger, Accordion } from "@/shared/ui";
import { PresentColorPalette, CustomColorEditor } from "./index";
import { useRef, useState, useEffect } from "react";
import { hexColorRegex } from "@/features/flag-add-modal/lib/colorUtils";
import iro from "@jaames/iro";
import ColorPicker = iro.ColorPicker;
import { initColorPicker } from "@/features/flag-add-modal/model/services";
import { colorList } from "@/features/flag-add-modal/data/colorList";

export const FlagColorSection = () => {
  const [dataColors, setDataColors] = useState<string[]>(colorList);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>("#ffffff");
  const colorPickerRef = useRef<HTMLDivElement>(null);
  const iroInstanceRef = useRef<ColorPicker | null>(null);

  useEffect(() => {
    if (showColorPicker)
      initColorPicker(colorPickerRef, selectedColor, setSelectedColor, iroInstanceRef);
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
