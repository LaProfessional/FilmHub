import { useTheme } from "@/shared/theme";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/shared/ui";

// TODO: вынести этот компонент в `shared/theme`?

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ?
        <Sun />
      : <Moon />}
    </Button>
  );
}
