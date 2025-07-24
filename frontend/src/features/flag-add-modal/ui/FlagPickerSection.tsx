import { useState } from "react";
import { Accordion, AccordionTrigger, AccordionItem, AccordionContent } from "@/shared/ui";
import { PresentIconPalette, IconSearchPanel } from "./index";
import tablerIcons from "@iconify/json/json/tabler.json";
import type { IconType } from "@/features/flag-add-modal/model/types";

export const FlagPickerSection = () => {
  const [dataIcons, setDataIcons] = useState<[string, IconType][]>(
    Object.entries(tablerIcons.icons).slice(0, 20),
  );

  return (
    <>
      <PresentIconPalette dataIcons={dataIcons} />

      <Accordion type="multiple">
        <AccordionItem value="icons">
          <AccordionTrigger className="p-2 w-full items-center bg-blue-950 transition-transform hover:no-underline cursor-pointer">
            Больше иконок
          </AccordionTrigger>

          <AccordionContent>
            <IconSearchPanel setDataIcons={setDataIcons} dataIcons={dataIcons} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
