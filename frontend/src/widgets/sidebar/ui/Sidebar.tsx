import styles from "./Sidebar.module.scss";
import { useTranslation } from "react-i18next";

import { ReactComponent as ArrowSvg } from "../../../shared/assets/sidebar/Arrow.svg";
import { ReactComponent as ExpandSvg } from "../../../shared/assets/sidebar/Expand.svg";

import AddCategoryInput from "../../../features/sidebar/ui/AddCategoryInput.tsx";
import AddBtn from "../../../features/sidebar/model/AddBtn.tsx";

const Sidebar = () => {

    const { t } = useTranslation();

    return (
        <aside className={ styles.sidebar }>
            <nav className={ styles.nav }>
                <AddCategoryInput></AddCategoryInput>

                <section>
                    <div className={ styles.wrapper }>
                        <h2 className={ styles.title }>{ t("yourCollections") }</h2>
                        <button className={ styles.collapseExpandBtn }>
                            <ArrowSvg className={ styles.arrowSvg }/>
                        </button>
                    </div>

                    <ul>
                        <li className={ `${ styles.item } ${ styles.select }` }>{ t("allMovies") }</li>
                        <li className={ styles.item }>{ t("favourites") }</li>
                    </ul>

                    <AddBtn>{ t("newFolder") }</AddBtn>
                </section>

                <section>
                    <div className={ styles.wrapper }>
                        <h2 className={ styles.title }>Категории</h2>
                        <button className={ styles.collapseExpandBtn }>
                            <ArrowSvg className={ styles.arrowSvg }/>
                        </button>
                    </div>

                    <div className={ styles.categoryGroup }>
                        <h3 className={ styles.categoryGroupTitle }>Уровень сюжета</h3>
                        <button className={ styles.collapseExpandCategoryBtn }>
                            <ExpandSvg className={ styles.expandSvg }/>
                        </button>
                    </div>

                    <ul>
                        <li className={ styles.flag }>Нарративный хаос</li>
                        <li className={ styles.flag }>Предсказуемая обыденность</li>
                        <li className={ styles.flag }>Удовлетворительная структура</li>
                        <li className={ styles.flag }>Захватывающее повествование</li>
                        <li className={ styles.flag }>Литературный шедевр</li>
                    </ul>

                    <AddBtn>Добавить флаг</AddBtn>
                </section>
            </nav>
        </aside>
    );
};

export default Sidebar;