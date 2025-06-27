import styles from "./Header.module.scss"
import { useTranslation } from "react-i18next"
import { useLanguage } from "@/app/providers/i18n"

import { useTheme } from "@/app/providers/theme"
import { UserMenu } from "@/entities/user"
import titleStyles from "@/shared/styles/components/TitleStyles.module.scss"

import { ReactComponent as LogoSvg } from "@/shared/assets/header/Logo.svg"
import { ReactComponent as SunSvg } from "@/shared/assets/header/Sun.svg"
import { ReactComponent as MoonSvg } from "@/shared/assets/header/Moon.svg"

import { ReactComponent as SearchSvg } from "@/shared/assets/header/Search.svg"
import { Button, Input } from "@/shared/ui"
import { Form } from "react-router-dom"


export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();

  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.titleWrapper}>
        <LogoSvg className={styles.logoSvg} />
        <h2 className={titleStyles.titleGradient}>FilmHub</h2>
      </div>

      <nav className={styles.nav}>
        <div className={styles.wrapper}>
          <Form>
            <Input
              variant={"inputSearch"}
              type="search"
              placeholder={t("SearchMovies")}
            />
          </Form>

          <SearchSvg className={styles.searchSvg}></SearchSvg>
        </div>

        <Button variant="headerButton" onClick={toggleTheme}>
          {theme === "dark" ? (
            <SunSvg className={styles.sunSvg} />
          ) : (
            <MoonSvg />
          )}
        </Button>

        <Button
          variant="headerButton"
          onClick={() => changeLanguage(language === "en" ? "ru" : "en")}
        >
          <span className={styles.language}>
            {language === "en" ? "en" : "ru"}
          </span>
        </Button>

        <UserMenu />
      </nav>
    </header>
  );
};
