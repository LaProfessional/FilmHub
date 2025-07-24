import React from "react";
import { Input, Button, Form, FormField, FormItem, FormControl, FormMessage } from "@/shared/ui";
import { colorSchema } from "@/features/flag-add-modal/model/colorSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface CustomColorEditorProps {
  setDataColors: React.Dispatch<React.SetStateAction<string[]>>;
  selectedColor: string;
  setSelectedColor: (val: string) => void;
  isValidHex: (val: string) => boolean;
}

export const CustomColorEditor = React.forwardRef<HTMLDivElement, CustomColorEditorProps>(
  ({ setDataColors, selectedColor, isValidHex, setSelectedColor }, ref) => {
    const validColor = useForm({
      resolver: zodResolver(colorSchema),
      defaultValues: {
        hexColor: "",
      },
      mode: "onChange",
    });

    return (
      <div className="flex justify-between items-center">
        <div className="mt-4">
          <div ref={ref} className="mx-auto" />
        </div>

        <div className="flex flex-col items-center">
          <p className="text-lg">Цвет: {selectedColor}</p>
          <div
            style={{ backgroundColor: `${selectedColor}` }}
            className="w-[120px] h-[120px] rounded-[6px] border-[gray] border border-dashed mb-3"
          ></div>

          <Button
            className="mb-3"
            onClick={() => setDataColors((prev) => Array.from(new Set([...prev, selectedColor])))}
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
    );
  },
);
