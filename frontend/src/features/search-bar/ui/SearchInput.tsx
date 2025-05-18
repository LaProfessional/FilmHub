import styles from "./SearchInput.module.scss";

import { ReactComponent as SearchSvg } from "../../../shared/assets/header/Search.svg";

const SearchInput = () => {
    return (
        <div className={ styles.wrapper }>
            <input
                className={ styles.input }
                type="text"
                placeholder="Поиск фильмов..."
            />
            <SearchSvg className={ styles.searchSvg }></SearchSvg>
        </div>
    );
};

export default SearchInput;