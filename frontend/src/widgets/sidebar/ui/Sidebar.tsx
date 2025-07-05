import { useTranslation } from "react-i18next";

import { dataFlags } from "@/widgets/sidebar/model/dataFlags";

import { ReactComponent as AddSvg } from "@/shared/assets/sidebar/Add.svg";

import { CollapsibleSidebarSection } from "@/widgets/sidebar/ui/CollapsibleSidebarSection";
import { Button, Input } from "@/shared/ui";

import { Plus } from "lucide-react";

export const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <aside className="h-full">
      <nav className="flex flex-col gap-2 h-full w-[400px]">
        <div className="">
          <Input type={"text"} placeholder={t("createCategory")} />
          <Button>
            <Plus size={22} className="" />
          </Button>
        </div>

        <section>
          <CollapsibleSidebarSection
            heading={t("yourCollections")}
            variant="wrapper"
            headingStyle="title"
          >
            <ul>
              <li className="">{t("allMovies")}</li>
              <li className="">{t("favourites")}</li>
            </ul>

            <div className="">
              <AddSvg className="" />
              <Button>{t("newFolder")}</Button>
            </div>
          </CollapsibleSidebarSection>
        </section>

        <section>
          <CollapsibleSidebarSection
            heading={t("categories")}
            variant="wrapper"
            headingStyle="title"
          >
            <CollapsibleSidebarSection
              heading={t("storyLevel")}
              variant="categoryGroup"
              headingStyle="categoryGroupTitle"
            >
              <ul className="">
                {dataFlags.map((flag, index) => (
                  <li className="" key={index}>
                    <div className="">
                      <span
                        className=""
                        title={t(flag.flagName)}
                        style={{
                          color: flag.color,
                          backgroundColor: flag.bg,
                          borderLeft: flag.border,
                        }}
                      >
                        {t(flag.flagName)}
                      </span>
                      <div className="">3</div>
                    </div>

                    <div className="">
                      <div className="" style={{ backgroundColor: flag.progress }}></div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="">
                <AddSvg className="" />
                <Button>{t("addFlag")}</Button>
              </div>
            </CollapsibleSidebarSection>
          </CollapsibleSidebarSection>
        </section>
      </nav>
    </aside>
  );
};
