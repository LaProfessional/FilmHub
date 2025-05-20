import styles from "./Sidebar.module.scss";

import { ReactComponent as ArrowSvg } from "../../../shared/assets/sidebar/Arrow.svg";

import AddCategoryInput from "../../../features/sidebar/ui/AddCategoryInput.tsx";
import AddBtn from "../../../features/sidebar/model/AddBtn.tsx";

const Sidebar = () => {
    return (
        <aside className={ styles.sidebar }>
            <nav className={ styles.nav }>
                <AddCategoryInput></AddCategoryInput>

                <section className={ styles.section }>
                    <div className={ styles.wrapper }>
                        <h2 className={ styles.title }>Ваши коллекции</h2>
                        <button className={ styles.collapseExpandBtn }>
                            <ArrowSvg className={ styles.arrowSvg }/>
                        </button>
                    </div>

                    <ul>
                        <li className={ `${ styles.item } ${ styles.select }` }>Все фильмы</li>
                        <li className={ styles.item }>Избранное</li>
                    </ul>

                    <AddBtn>Новая папка</AddBtn>
                </section>
            </nav>
        </aside>
    );
};

export default Sidebar;