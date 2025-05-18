import { useContext } from "react";
import styles from "./Header.module.scss";

import { ReactComponent as LogoSvg } from "../../../shared/assets/header/Logo.svg";
import { ReactComponent as SunSvg } from "../../../shared/assets/header/Sun.svg";
import { ReactComponent as MoonSvg } from "../../../shared/assets/header/Moon.svg";
import Avatar from '../../../shared/assets/header/Avatar.png';

import SearchInput from "../../../features/search-bar/ui/SearchInput.tsx";

import { ThemeContext } from "../../../app/providers/ThemeProvider";

const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext) ?? {};

    return (
        <header className={ styles.headerContainer }>
            <div className={ styles.header }>
                <div className={ styles.titleWrapper }>
                    <LogoSvg className={ styles.logoSvg }/>
                    <h2 className={ styles.title }>FilmHub</h2>
                </div>

                <nav className={ styles.nav }>
                    <SearchInput></SearchInput>

                    <button className={ styles.button } onClick={ toggleTheme }>
                        { theme === "dark" ? <SunSvg className={ styles.sunSvg }/> : <MoonSvg/> }
                    </button>

                    <button className={ styles.button }>
                        <span className={ styles.language }>ru</span>
                    </button>

                    <img
                        className={ styles.avatar }
                        src={ Avatar }
                        alt="Avatar"
                    />
                </nav>
            </div>
        </header>
    );
};

export default Header;