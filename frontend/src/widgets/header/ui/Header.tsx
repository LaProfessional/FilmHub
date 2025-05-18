import styles from "./Header.module.scss";

import { ReactComponent as LogoSvg } from "../../../shared/assets/header/Logo.svg";
import { ReactComponent as SunSvg } from "../../../shared/assets/header/Sun.svg";
// import { ReactComponent as MoonSvg } from "../../../shared/assets/header/Moon.svg";

import SearchInput from "../../../features/search-bar/ui/SearchInput.tsx";

const Header = () => {
    return (
        <header className={ styles.headerContainer }>
            <div className={ styles.header }>
                <div className={ styles.headerTitle }>
                    <LogoSvg className={ styles.logoSvg }/>
                    <h2 className={ styles.title }>FilmHub</h2>
                </div>

                <nav className={ styles.nav }>
                    <SearchInput></SearchInput>
                    <SunSvg className={ styles.sunSvg }/>
                    {/*<img src="../../../shared/assets/header/ProfilePhoto.jpg" alt="ProfilePhoto"/>*/}

                </nav>
            </div>
        </header>
    );
};

export default Header;