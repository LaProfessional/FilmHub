import { Checkbox, Switch } from "@/shared/ui";
import type { OptionType } from "../model/types";

type Props = {
  value: string;
  checked: boolean;
  onChange: (val: boolean) => void;
  type: OptionType;
};

export const OptionToggle = ({ value, checked, onChange, type }: Props) => {
  const Option = type === "checkbox" ? Checkbox : Switch;

  return (
    <label className="flex items-center justify-between lg:text-lg text-[16px]">
      {value}
      <Option checked={checked} onCheckedChange={onChange} />
    </label>
  );
};
