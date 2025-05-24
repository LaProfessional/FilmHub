import styles from "./Header.module.scss";

import { ReactComponent as LogoSvg } from "@/shared/assets/header/Logo.svg";
import { ReactComponent as SunSvg } from "@/shared/assets/header/Sun.svg";
import { ReactComponent as MoonSvg } from "@/shared/assets/header/Moon.svg";
import Avatar from "@/shared/assets/header/Avatar.png";

import SearchInput from "@/features/search-bar/ui/SearchInput.tsx";

import { useTheme } from "@/app/providers/theme";
import { useLanguage } from "@/app/providers/i18n/ui/LanguageProvider";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <LogoSvg className={styles.logoSvg} />
          <h2 className={styles.title}>FilmHub</h2>
        </div>

        <nav className={styles.nav}>
          <SearchInput></SearchInput>

          <button className={styles.button} onClick={toggleTheme}>
            {theme === "dark" ? <SunSvg className={styles.sunSvg} /> : <MoonSvg />}
          </button>

          <button
            className={styles.button}
            onClick={() => changeLanguage(language === "en" ? "ru" : "en")}
          >
            <span className={styles.language}>{language === "en" ? "en" : "ru"}</span>
          </button>

          <img className={styles.avatar} src={Avatar} alt="Avatar" />
        </nav>
      </div>
    </header>
  );
};
