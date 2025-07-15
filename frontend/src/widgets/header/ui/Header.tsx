// FIXME: нельзя использовать модули, которые находятся на одном уровне
import { UserMenu } from "@/widgets/user-menu";

import { MovieSearch } from "./MovieSearch";
import { ThemeSwitcher } from "@/shared/theme";
import { LangToggler } from "./LangToggler";
import { Logo } from "./Logo";
import { useAuth } from "@/features/auth";
import { Link } from "react-router";

// все компоненты в этой композиции можно вынести
// TODO: Header нужно сделать адаптивным

export const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="top-0 p-3 flex items-center gap-3 w-full border-b-primary border-b px-[210px]">
      <Logo />

      <div className="flex justify-end w-full gap-1.5">
        <MovieSearch />
        <div className="flex gap-2">
          <div className="flex gap-1">
            <ThemeSwitcher />
            <LangToggler />
          </div>
          {isAuthenticated ?
            <UserMenu />
          : <Link to="/auth" className="p-2">
              Login
            </Link>
          }
        </div>
      </div>
    </header>
  );
};
