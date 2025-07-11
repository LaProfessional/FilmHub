import { Button } from "@/shared/ui";
import { ArrowLeft } from "lucide-react";
import { navItems } from "../model/consts";

export const SettingsSidebar = () => {
  return (
    <aside className="h-full max-w-[325px] w-full p-4 border-r border-r-primary">
      <Button className="w-fit">
        <ArrowLeft /> Back
      </Button>

      <div className="flex flex-col gap-4 mt-10">
        {navItems.map((item) => (
          <Button key={item} className="justify-start text-lg py-5">
            {item}
          </Button>
        ))}
      </div>
    </aside>
  );
};
