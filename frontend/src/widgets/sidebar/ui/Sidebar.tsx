import styles from "./Sidebar.module.scss";
import { useTranslation } from "react-i18next";

import { dataFlags } from "@/widgets/sidebar/model/dataFlags.ts";

import { ReactComponent as AddSvg } from "@/shared/assets/sidebar/Add.svg";

import { CollapsibleSidebarSection } from "@/widgets/sidebar/ui/CollapsibleSidebarSection.tsx";
import { Button } from "@/shared/ui/Button.tsx";
import { Input } from "@/shared/ui/Input.tsx";

import { Plus } from "lucide-react";

export const Sidebar = () => {

    const { t } = useTranslation();

    return (
        <aside className={ styles.sidebar }>
            <nav className={ styles.nav }>
                <div className={ styles.wrapperInput }>
                    <Input
                        variant={ "inputCategory" }
                        type={ "text" }
                        placeholder={ t("Create category") }
                    />
                    <Button variant={ "addCategoryBtn" }><Plus size={22} className={styles.plusIcon} /></Button>
                </div>

                <section>
                    <CollapsibleSidebarSection
                        heading={ t("Your collections") }
                        variant="wrapper"
                        headingStyle="title"
                    >
                        <ul>
                            <li className={ `${ styles.item } ${ styles.select }` }>{ t("All movies") }</li>
                            <li className={ styles.item }>{ t("Favourites") }</li>
                        </ul>

                        <div className={ styles.wrapper }>
                            <AddSvg className={ styles.addSvg }/>
                            <Button variant={ "addBtn" }>{ t("New folder") }</Button>
                        </div>

                    </CollapsibleSidebarSection>
                </section>

                <section>
                    <CollapsibleSidebarSection
                        heading={ t("Categories") }
                        variant="wrapper"
                        headingStyle="title"
                    >
                        <CollapsibleSidebarSection
                            heading={ t("Story level") }
                            variant="categoryGroup"
                            headingStyle="categoryGroupTitle"
                        >

                            <ul className={ styles.flagContainer }>
                                { dataFlags.map((flag, index) => (
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
                                <Button variant={ "addBtn" }>{ t("Add flag") }</Button>
                            </div>

                        </CollapsibleSidebarSection>

                    </CollapsibleSidebarSection>
                </section>
            </nav>
        </aside>
    );
};
