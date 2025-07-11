import { Button } from "@/shared/ui";
import { ArrowLeft } from "lucide-react";

const navItems = ["Gallery", "Sidebar", "Main Page"];

export const SettingsModal = () => {
  return (
    <div className="bg-background text-foreground w-full h-screen fixed top-0 left-0">
      <div className="h-full flex">
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
        <section className="p-4">Section</section>
      </div>
    </div>
  );
};
