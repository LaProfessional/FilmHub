export type Option = {
  value: string;
  type: "checkbox" | "switch";
};

export type Settings = {
  title: string;
  desc?: string;
  options: Option[];
};
