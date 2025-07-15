interface PresentColorPaletteProps {
  dataColors: string[];
  setSelectedColor: (col: string) => void;
  selectedColor: string;
}

export const PresentColorPalette = ({
  dataColors,
  setSelectedColor,
  selectedColor,
}: PresentColorPaletteProps) => {
  return (
    <section>
      <h2>Цвет</h2>
      <ul className="flex flex-wrap gap-2 mt-2 max-h-[140px] overflow-auto">
        {dataColors.map((col, index) => (
          <li
            key={index}
            onClick={() => setSelectedColor(col)}
            className={`basis-[calc((100%-9*8px)/10)] w-[40px] h-[40px] rounded-full cursor-pointer border-2 ${
              selectedColor === col ? "border-black" : "border-transparent"
            }`}
            style={{ backgroundColor: col }}
          />
        ))}
      </ul>
    </section>
  );
};
