import { FilterPanel } from "@/widgets/filters/ui/FilterPanel";

import { ControlsPanel } from "@/pages/home/ui/controls-panel/ControlsPanel";
import { NavTabs } from "@/pages/home/ui/nav-tabs/NavTabs";

export const HomePage = () => {
  return (
    <div>
      <nav className="m-auto p-6">
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
