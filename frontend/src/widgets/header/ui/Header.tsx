import styles from "./Header.module.scss";
import { UserMenu } from "./UserMenu/UserMenu";
import { Button } from "@/shared/ui/Button";

import { ReactComponent as LogoSvg } from "@/shared/assets/header/Logo.svg";
import { ReactComponent as SunSvg } from "@/shared/assets/header/Sun.svg";
import { ReactComponent as MoonSvg } from "@/shared/assets/header/Moon.svg";
import { ReactComponent as SearchSvg } from "@/shared/assets/header/Search.svg";

import { Input } from "@/shared/ui/Input.tsx";

import { useTheme } from "@/app/providers/theme";
import { useLanguage } from "@/app/providers/i18n/ui/LanguageProvider";
import { useTranslation } from "react-i18next";

export const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, changeLanguage } = useLanguage();

    const { t } = useTranslation();

    return (
        <header className={ styles.header }>

                <div className={ styles.titleWrapper }>
                    <LogoSvg className={ styles.logoSvg }/>
                    <h2 className={ styles.title }>FilmHub</h2>
                </div>

                <nav className={ styles.nav }>
                    <div className={ styles.wrapper }>
                        <Input
                            variant={ "inputSearch" }
                            type="text"
                            placeholder={ t("SearchMovies") }
                        />

                        <SearchSvg className={ styles.searchSvg }></SearchSvg>
                    </div>


                    <Button variant="headerButton" onClick={toggleTheme}>
                        {theme === "dark" ? <SunSvg className={ styles.sunSvg }/> : <MoonSvg />}
                    </Button>

                    <Button variant="headerButton" onClick={() => changeLanguage(language === "en" ? "ru" : "en")}>
                        <span className={styles.language}>{language === "en" ? "en" : "ru"}</span>
                    </Button>



                    <UserMenu />
                </nav>

        </header>
    );
};
