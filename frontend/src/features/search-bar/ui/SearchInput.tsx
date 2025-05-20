import { useTranslation } from "react-i18next";
import styles from "./SearchInput.module.scss";

import { ReactComponent as SearchSvg } from "../../../shared/assets/header/Search.svg";

const SearchInput = () => {

    const { t } = useTranslation();

    return (
        <div className={ styles.wrapper }>
            <input
                className={ styles.input }
                type="text"
                placeholder={ t("SearchMovies") }
            />
            <SearchSvg className={ styles.searchSvg }></SearchSvg>
        </div>
    );
};

export default SearchInput;