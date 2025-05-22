import styles from "./Sidebar.module.scss";
import { useTranslation } from "react-i18next";

import { ReactComponent as ArrowSvg } from "../../../shared/assets/sidebar/Arrow.svg";

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
                        <h2 className={ styles.title }>{ t("categories") }</h2>
                        <button className={ styles.collapseExpandBtn }>
                            <ArrowSvg className={ styles.arrowSvg }/>
                        </button>
                    </div>

                    <div className={ styles.categoryGroup }>
                        <h3 className={ styles.categoryGroupTitle }>{ t("storyLevel") }</h3>
                        <button>
                            <ArrowSvg className={ styles.arrowSvg }/>
                        </button>
                    </div>

                    <ul className={ styles.flagContainer }>
                        <li
                            className={ styles.flag }
                            title={ t("narrativeChaos") }>{ t("narrativeChaos") }
                        </li>
                        <li
                            className={ styles.flag }
                            title={ t("predictableOrdinariness") }>{ t("predictableOrdinariness") }
                        </li>
                        <li
                            className={ styles.flag }
                            title={ t("satisfactoryStructure") }>{ t("satisfactoryStructure") }
                        </li>
                        <li
                            className={ styles.flag }
                            title={ t("grippingNarrative") }>{ t("grippingNarrative") }
                        </li>
                        <li
                            className={ styles.flag }
                            title={ t("literaryMasterpiece") }>{ t("literaryMasterpiece") }
                        </li>
                    </ul>

                    <AddBtn>{ t("addFlag") }</AddBtn>
                </section>

                {/*<section>*/}
                {/*    <div className={ styles.wrapper }>*/}
                {/*        <h2 className={ styles.title }>Статистика флагов</h2>*/}
                {/*        <button className={ styles.collapseExpandBtn }>*/}
                {/*            <ArrowSvg className={ styles.arrowSvg }/>*/}
                {/*        </button>*/}
                {/*    </div>*/}


                {/*    <div className={ styles.categoryGroup }>*/}
                {/*        <h3 className={ styles.categoryGroupTitle }>{ t("storyLevel") }</h3>*/}
                {/*        <button>*/}
                {/*            <ArrowSvg className={ styles.arrowSvg }/>*/}
                {/*        </button>*/}
                {/*    </div>*/}

                {/*    <ul className={ styles.flagContainer }>*/}
                {/*        <li className={ styles.flagData }>*/}
                {/*            <div className={ styles.wrapperFlagStat }>*/}
                {/*                <span*/}
                {/*                    className={ `${ styles.flag } ${ styles.flagStat }` }*/}
                {/*                    title={ t("narrativeChaos") }>{ t("narrativeChaos") }*/}
                {/*                </span>*/}

                {/*                <div className={ styles.amountFlag }>3</div>*/}
                {/*            </div>*/}

                {/*            <div className={ styles.progressBar }>*/}
                {/*                <div className={ styles.progress }></div>*/}
                {/*            </div>*/}
                {/*        </li>*/}

                {/*        <li*/}
                {/*            className={ `${ styles.flag } ${ styles.flagStat }` }*/}
                {/*            title={ t("predictableOrdinariness") }>{ t("predictableOrdinariness") }*/}
                {/*        </li>*/}

                {/*        <li*/}
                {/*            className={ `${ styles.flag } ${ styles.flagStat }` }*/}
                {/*            title={ t("satisfactoryStructure") }>{ t("satisfactoryStructure") }*/}
                {/*        </li>*/}

                {/*        <li*/}
                {/*            className={ `${ styles.flag } ${ styles.flagStat }` }*/}
                {/*            title={ t("grippingNarrative") }>{ t("grippingNarrative") }*/}
                {/*        </li>*/}

                {/*        <li*/}
                {/*            className={ `${ styles.flag } ${ styles.flagStat }` }*/}
                {/*            title={ t("literaryMasterpiece") }>{ t("literaryMasterpiece") }*/}
                {/*        </li>*/}
                {/*    </ul>*/}

                {/*</section>*/}
            </nav>
        </aside>
    );
};

export default Sidebar;