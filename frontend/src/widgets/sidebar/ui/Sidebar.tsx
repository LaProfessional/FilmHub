import styles from "./Sidebar.module.scss";
import { useTranslation } from "react-i18next";

import { ReactComponent as AddSvg } from "@/shared/assets/sidebar/Add.svg";

import { CollapsibleSidebarSection } from "@/widgets/sidebar/ui/CollapsibleSidebarSection.tsx";
import { Button } from "@/shared/ui/Button.tsx";
import { Input } from "@/shared/ui/Input.tsx";

export const Sidebar = () => {

    const { t } = useTranslation();

    const dataFlag = [
        {
            flagName: "narrativeChaos",
            color: "#8b8680",
            bg: "rgba(139, 134, 128, 0.08)",
            border: "4px solid #8b8680",
            progress: "#8b8680",
        },
        {
            flagName: "predictableOrdinariness",
            color: "#f2e6d8",
            bg: "rgba(242, 230, 216, 0.08)",
            border: "4px solid #f2e6d8",
            progress: "#f2e6d8",
        },
        {
            flagName: "satisfactoryStructure",
            color: "#a9dce3",
            bg: "rgba(169, 220, 227, 0.08)",
            border: "4px solid #a9dce3",
            progress: "#a9dce3",
        },
        {
            flagName: "grippingNarrative",
            color: "#ff937e",
            bg: "rgba(255, 147, 126, 0.08)",
            border: "4px solid #ff937e",
            progress: "#ff937e",
        },
        {
            flagName: "literaryMasterpiece",
            color: "#008a73",
            bg: "rgba(0, 138, 115, 0.08)",
            border: "4px solid #008a73",
            progress: "#008a73",
        },
    ];

    return (
        <aside className={ styles.sidebar }>
            <nav className={ styles.nav }>
                <div className={ styles.wrapperInput }>
                    <Input
                        variant={ "inputCategory" }
                        type={ "text" }
                        placeholder={ t("createCategory") }
                    />
                    <button className={ styles.addCategoryBtn }>+</button>
                </div>

                <section>
                    <CollapsibleSidebarSection
                        heading={ t("yourCollections") }
                        variant="wrapper"
                        headingStyle="title"
                    >
                        <ul>
                            <li className={ `${ styles.item } ${ styles.select }` }>{ t("allMovies") }</li>
                            <li className={ styles.item }>{ t("favourites") }</li>
                        </ul>

                        <div className={ styles.wrapper }>
                            <AddSvg className={ styles.addSvg }/>
                            <Button variant={ "addBtn" }>{ t("newFolder") }</Button>
                        </div>

                    </CollapsibleSidebarSection>
                </section>

                <section>
                    <CollapsibleSidebarSection
                        heading={ t("categories") }
                        variant="wrapper"
                        headingStyle="title"
                    >
                        <CollapsibleSidebarSection
                            heading={ t("storyLevel") }
                            variant="categoryGroup"
                            headingStyle="categoryGroupTitle"
                        >

                            <ul className={ styles.flagContainer }>
                                { dataFlag.map((flag, index) => (
                                    <li className={ styles.flagData } key={ index }>
                                        <div className={ styles.wrapperFlagStat }>
                                    <span
                                        className={ styles.flag }
                                        title={ t(flag.flagName) }
                                        style={ {
                                            color: flag.color,
                                            backgroundColor: flag.bg,
                                            borderLeft: flag.border
                                        } }
                                    >{ t(flag.flagName) }
                                    </span>
                                            <div className={ styles.amountFlag }>3</div>
                                        </div>

                                        <div className={ styles.progressBar }>
                                            <div
                                                className={ styles.progress }
                                                style={ { backgroundColor: flag.progress } }
                                            ></div>
                                        </div>
                                    </li>
                                )) }
                            </ul>

                            <div className={ styles.wrapper }>
                                <AddSvg className={ styles.addSvg }/>
                                <Button variant={ "addBtn" }>{ t("addFlag") }</Button>
                            </div>

                        </CollapsibleSidebarSection>

                    </CollapsibleSidebarSection>
                </section>
            </nav>
        </aside>
    );
};
