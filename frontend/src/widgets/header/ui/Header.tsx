import { useTranslation } from "react-i18next";
import { useLanguage } from "@/app/providers/i18n";

import { useTheme } from "@/app/providers/theme";
// FIXME: нельзя использовать модули, которые находятся на одном уровне
import { UserMenu } from "@/widgets/user-menu";

import { ReactComponent as LogoSvg } from "@/shared/assets/header/Logo.svg";
import { ReactComponent as SunSvg } from "@/shared/assets/header/Sun.svg";
import { ReactComponent as MoonSvg } from "@/shared/assets/header/Moon.svg";
import { ReactComponent as SearchSvg } from "@/shared/assets/header/Search.svg";

import { Button, Input } from "@/shared/ui";
import { Form } from "react-router";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();

  const { t } = useTranslation();

  return (
    <header className="sticky top-0 bg-blue-50 p-3 flex justify-between items-center w-full border-b-gray-500 border">
      <div className="">
        <LogoSvg className="" />
        <h2 className="">FilmHub</h2>
      </div>

      <nav className="flex">
        <div className="flex">
          <Form>
            <Input type="search" placeholder={t("SearchMovies")} />
          </Form>

          <SearchSvg className=""></SearchSvg>
        </div>

        <Button onClick={toggleTheme}>
          {theme === "dark" ?
            <SunSvg className="" />
          : <MoonSvg />}
        </Button>

        <Button onClick={() => changeLanguage(language === "en" ? "ru" : "en")}>
          <span className="">{language === "en" ? "en" : "ru"}</span>
        </Button>

        <UserMenu />
      </nav>
    </header>
  );
};
