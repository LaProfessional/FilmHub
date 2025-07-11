import { Switch } from "@/shared/ui";

type Props = {
  value: string;
  checked: boolean;
  onChange: (val: boolean) => void;
};

export const SwitchOption = ({ value, checked, onChange }: Props) => {
  return (
    <label className="flex items-center justify-between lg:text-lg text-[16px]">
      {value}
      <Switch checked={checked} onCheckedChange={onChange} />
    </label>
  );
};
