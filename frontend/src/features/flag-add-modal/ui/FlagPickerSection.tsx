import { Accordion, AccordionTrigger, AccordionItem, AccordionContent } from "@/shared/ui";

import { PresentIconPalette } from "@/features/flag-add-modal/ui/PresentIconPalette";
import { IconSearchPanel } from "@/features/flag-add-modal/ui/IconSearchPanel";

export const FlagPickerSection = () => {
  return (
    <>
      <PresentIconPalette />

      <Accordion type="multiple">
        <AccordionItem value="icons">
          <AccordionTrigger className="p-2 w-full items-center bg-blue-950 transition-transform hover:no-underline cursor-pointer">
            Больше иконок
          </AccordionTrigger>

          <AccordionContent>
            <IconSearchPanel />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
