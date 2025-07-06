export function addFlag() {
  // noop
}

// Как я понял это только заглушка, но я вынесу ее сюда и оставлю как есть
// Если этот тип останется, его лучше вынести в shared
export type Flag = {
  flagName: string;
  color: string;
  bg: string;
  border: string;
  progress: string;
};

export function getAllFlags(): Flag[] {
  // TODO
  return [
    {
      flagName: "narrativeChaos",
      color: "#8b8680",
      bg: "rgba(139, 134, 128, 0.08)",
      border: "4px solid #8b8680",
      progress: "#8b8680",
    },
    {
      flagName: "predictableOrdinariness",
      color: "#f2e6d8",
      bg: "rgba(242, 230, 216, 0.08)",
      border: "4px solid #f2e6d8",
      progress: "#f2e6d8",
    },
    {
      flagName: "satisfactoryStructure",
      color: "#a9dce3",
      bg: "rgba(169, 220, 227, 0.08)",
      border: "4px solid #a9dce3",
      progress: "#a9dce3",
    },
    {
      flagName: "grippingNarrative",
      color: "#ff937e",
      bg: "rgba(255, 147, 126, 0.08)",
      border: "4px solid #ff937e",
      progress: "#ff937e",
    },
    {
      flagName: "literaryMasterpiece",
      color: "#008a73",
      bg: "rgba(0, 138, 115, 0.08)",
      border: "4px solid #008a73",
      progress: "#008a73",
    },
  ];
}
