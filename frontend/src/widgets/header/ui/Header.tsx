import styles from "./Header.module.scss";

import { ReactComponent as LogoSvg } from "@/shared/assets/header/Logo.svg";
import { ReactComponent as SunSvg } from "@/shared/assets/header/Sun.svg";
import { ReactComponent as MoonSvg } from "@/shared/assets/header/Moon.svg";
import { ReactComponent as SearchSvg } from "@/shared/assets/header/Search.svg";
import Avatar from "@/shared/assets/header/Avatar.png";

import { Input } from "@/shared/ui/Input.tsx";

import { useTheme } from "@/app/providers/theme";
import { useLanguage } from "@/app/providers/i18n/ui/LanguageProvider";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

export const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, changeLanguage } = useLanguage();

    const { t } = useTranslation();

    return (
        <header className={ styles.headerContainer }>
            <div className={ styles.header }>
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


                    <button className={ styles.button } onClick={ toggleTheme }>
                        { theme === "dark" ? <SunSvg className={ styles.sunSvg }/> : <MoonSvg/> }
                    </button>

                    <button
                        className={ styles.button }
                        onClick={ () => changeLanguage(language === "en" ? "ru" : "en") }
                    >
                        <span className={ styles.language }>{ language === "en" ? "en" : "ru" }</span>
                    </button>
                    <Link to="/profile">
                        <img className={ styles.avatar } src={ Avatar } alt="Avatar"/>
                    </Link>
                </nav>
            </div>
        </header>
    );
};
