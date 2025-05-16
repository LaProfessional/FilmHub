import styles from "../../../shared/styles/layout/Header.module.scss";

import { ReactComponent as LogoSvg } from "../../../shared/assets/header/Logo.svg";
// import { ReactComponent as SearchSvg } from "../../../shared/assets/header/Search.svg";
import { ReactComponent as SunSvg } from "../../../shared/assets/header/Sun.svg";
// import { ReactComponent as MoonSvg } from "../../../shared/assets/header/Moon.svg";

const Header = () => {
    return (
        <header className={ styles.headerContainer }>
            <div className={ styles.header }>
                <div className={ styles.headerTitle }>
                    <LogoSvg className={ styles.logoSvg }/>
                    <h2 className={ styles.title }>FilmHub</h2>
                </div>

                <nav>
                    <input
                        className={ styles.input }
                        type="text"
                        placeholder="Поиск фильмов..."
                    />
                    <SunSvg/>
                    <img src="../../../shared/assets/header/ProfilePhoto.jpg" alt="ProfilePhoto"/>
                </nav>
            </div>
        </header>
    );
};

export default Header;