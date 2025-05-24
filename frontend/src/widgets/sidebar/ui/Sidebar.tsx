import styles from "./Sidebar.module.scss";
import { useTranslation } from "react-i18next";

import { ReactComponent as ArrowSvg } from "@/shared/assets/sidebar/Arrow.svg";

import AddCategoryInput from "@/features/sidebar/ui/AddCategoryInput.tsx";
import AddBtn from "@/features/sidebar/ui/AddBtn.tsx";

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
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <AddCategoryInput></AddCategoryInput>

        <section>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>{t("yourCollections")}</h2>
            <button className={styles.collapseExpandBtn}>
              <ArrowSvg className={styles.arrowSvg} />
            </button>
          </div>

          <ul>
            <li className={`${styles.item} ${styles.select}`}>{t("allMovies")}</li>
            <li className={styles.item}>{t("favourites")}</li>
          </ul>

          <AddBtn>{t("newFolder")}</AddBtn>
        </section>

        <section>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>{t("categories")}</h2>
            <button className={styles.collapseExpandBtn}>
              <ArrowSvg className={styles.arrowSvg} />
            </button>
          </div>

          <div className={styles.categoryGroup}>
            <h3 className={styles.categoryGroupTitle}>{t("storyLevel")}</h3>
            <button>
              <ArrowSvg className={styles.arrowSvg} />
            </button>
          </div>

          <ul className={styles.flagContainer}>
            {dataFlag.map((flag, index) => (
              <li className={styles.flagData} key={index}>
                <div className={styles.wrapperFlagStat}>
                  <span
                    className={styles.flag}
                    title={t(flag.flagName)}
                    style={{ color: flag.color, backgroundColor: flag.bg, borderLeft: flag.border }}
                  >
                    {t(flag.flagName)}
                  </span>
                  <div className={styles.amountFlag}>3</div>
                </div>

                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{ backgroundColor: flag.progress }}></div>
                </div>
              </li>
            ))}
          </ul>

          <AddBtn>{t("addFlag")}</AddBtn>
        </section>
      </nav>
    </aside>
  );
};
