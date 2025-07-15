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
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/shared/ui";
import { useTranslation } from "react-i18next";
import iro from "@jaames/iro";
import { useRef, useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { colorSchema } from "@/features/flag-add-modal/model/colorSchema";
import { hexColorRegex } from "@/features/flag-add-modal/lib/colorUtils";

const FlagAddModal = () => {
  const { t } = useTranslation();

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
  const iroInstanceRef = useRef<any>(null);

  const validColor = useForm({
    resolver: zodResolver(colorSchema),
    defaultValues: {
      hexColor: "",
    },
    mode: "onChange",
  });

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

  useEffect(() => {
    if (iroInstanceRef.current && isValidHex(selectedColor)) {
      iroInstanceRef.current.color.hexString = selectedColor;
    }
  }, [selectedColor]);

  const isValidHex = (value: string) => {
    return hexColorRegex.test(value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">{t("Add flag")}</Button>
      </DialogTrigger>

      <DialogContent className="w-full !max-w-[520px] min-w-[200px]" aria-describedby="">
        <DialogTitle>{t("flagModal.header.title")}</DialogTitle>

        <label className="flex flex-col gap-2">
          Название
          <Input placeholder={t("flagModal.body.name")} />
        </label>

        <section>
          <h2>Цвет</h2>
          <ul className="flex flex-wrap gap-2 mt-2 max-h-[140px] overflow-auto">
            {dataColors.map((col, index) => (
              <li
                key={index}
                onClick={() => setSelectedColor(col)}
                className={`basis-[calc((100%-9*8px)/10)] w-[40px] h-[40px] rounded-full cursor-pointer border-2 ${
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

                  <Button
                    className="mb-3"
                    onClick={() =>
                      setDataColors((prev) => Array.from(new Set([...prev, selectedColor])))
                    }
                  >
                    Добавить цвет
                  </Button>

                  <Form {...validColor}>
                    <FormField
                      name="hexColor"
                      control={validColor.control}
                      render={({ field }) => (
                        <FormItem>
                          <label htmlFor="hexColor">Введите цвет</label>
                          <FormControl>
                            <Input
                              placeholder="#FFFFFF"
                              id="hexColor"
                              {...field}
                              onChange={(e) => {
                                const value = e.target.value;
                                field.onChange(e);

                                if (isValidHex(value)) setSelectedColor(value);
                              }}
                              maxLength={7}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </Form>
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
