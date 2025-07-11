import { Switch } from "@/shared/ui/switch";
import { useState } from "react";

export const SwitchOption = ({ value }: { value: string }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <label className="flex items-center justify-between">
      {value}
      <Switch checked={checked} onCheckedChange={handleChange} />
    </label>
  );
};
