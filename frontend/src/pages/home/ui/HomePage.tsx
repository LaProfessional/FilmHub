import { FilterPanel } from "@/widgets/filters/ui/FilterPanel";

import { ControlsPanel } from "@/pages/home/ui/ControlsPanel";
import { NavTabs } from "@/pages/home/ui/NavTabs";

export const HomePage = () => {
  return (
    <div>
      <nav className="m-auto p-6 max-w-[1280px]">
        <section className="flex justify-between items-center flex-wrap w-full">
          <NavTabs />
          <FilterPanel />
        </section>

        <hr />

        <ControlsPanel />
      </nav>
    </div>
  );
};
