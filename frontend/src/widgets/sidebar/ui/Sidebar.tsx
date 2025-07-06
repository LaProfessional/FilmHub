import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, Separator } from "@/shared/ui";

import { ChevronDown } from "lucide-react";
import { AddCategory } from "./AddCategory";
import { UserCollections } from "./UserCollections";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import { StoryLevel } from "./StoryLevel";

// TODO: попытаться переделать используя Sidebar коспонент из Shardcn

export const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <aside className="h-full flex flex-col gap-4 border-r border-r-primary p-6">
      <AddCategory />
      <Separator orientation="horizontal" />
      <Accordion type="multiple">
        <div className="flex flex-col gap-3">
          <AccordionItem value="collections">
            <AccordionTrigger className="flex justify-between items-center w-full cursor-pointer p-2">
              {t("yourCollections")}
              <ChevronDown />
            </AccordionTrigger>
            <AccordionContent className="pl-3">
              <UserCollections />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="flags">
            <AccordionTrigger className="flex justify-between items-center w-full cursor-pointer p-2">
              {t("categories")} <ChevronDown />
            </AccordionTrigger>
            <AccordionContent className="pl-3">
              <Accordion type="multiple">
                <AccordionItem value="story">
                  <AccordionTrigger className="flex justify-between items-center w-full cursor-pointe p-2">
                    {t("storyLevel")} <ChevronDown />
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pt-3">
                    <StoryLevel />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </div>
      </Accordion>
    </aside>
  );
};
