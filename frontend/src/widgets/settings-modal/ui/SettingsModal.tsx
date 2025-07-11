import { SettingsSidebar } from "./SettingsSidebar";

export const SettingsModal = () => {
  return (
    <div className="bg-background text-foreground w-full h-screen fixed top-0 left-0">
      <div className="h-full flex">
        <SettingsSidebar />
        <section className="p-4">Section</section>
      </div>
    </div>
  );
};
