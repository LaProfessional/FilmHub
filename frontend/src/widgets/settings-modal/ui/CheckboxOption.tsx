import { Checkbox } from "@/shared/ui/checkbox";
import { useState } from "react";

export const CheckboxOption = ({
  value,
  // checked,
  // onChange,
}: {
  value: string;
  // checked: boolean;
  // onChange: () => void;
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <label className="flex items-center justify-between">
      {value}
      <Checkbox checked={checked} onCheckedChange={handleChange} />
    </label>
  );
};
