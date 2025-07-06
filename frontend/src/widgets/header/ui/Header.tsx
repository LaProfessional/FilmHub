// FIXME: нельзя использовать модули, которые находятся на одном уровне
import { UserMenu } from "@/widgets/user-menu";

import { MovieSearch } from "./MovieSearch";
import { ThemeToggler } from "@/shared/theme";
import { LangToggler } from "./LangToggler";
import { Logo } from "./Logo";

// все компоненты в этой композиции можно вынести
// TODO: Header нужно сделать адаптивным

export const Header = () => {
  return (
    <header className="sticky top-0 p-3 flex justify-between items-center gap-3 w-full border-b-gray-500 border-b px-20">
      <Logo />
      <MovieSearch />
      <div className="flex gap-2">
        <div className="flex gap-1">
          <ThemeToggler />
          <LangToggler />
        </div>
        <UserMenu />
      </div>
    </header>
  );
};
