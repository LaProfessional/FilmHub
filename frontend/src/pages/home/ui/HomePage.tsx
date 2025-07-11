import { FilterPanel } from "@/widgets/filters/ui/FilterPanel";

import { ControlsPanel } from "@/pages/home/ui/ControlsPanel";
import { NavTabs } from "@/pages/home/ui/NavTabs";
import { Separator } from "@/shared/ui";
import { SettingsModal } from "@/widgets/settings-modal";

export const HomePage = () => {
  return (
    <div>
      <nav className="flex flex-col m-auto p-6 max-w-[1280px] gap-3">
        <section className="flex justify-between items-center flex-wrap w-full">
          <NavTabs />
          <FilterPanel />
        </section>

        <Separator orientation="horizontal" />

        <ControlsPanel />

        <SettingsModal />
      </nav>
    </div>
  );
};
