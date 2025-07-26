import type { TFunction } from "i18next";

export const getTexts = (t: TFunction) => {
  const descriptions = {
    0: t("resetPassword.steps.email.description"),
    1: t("resetPassword.steps.code.description"),
    2: t("resetPassword.steps.newPassword.description"),
  };

  const titles = {
    0: t("resetPassword.steps.email.title"),
    1: t("resetPassword.steps.code.title"),
    2: t("resetPassword.steps.newPassword.title"),
  };

  return { descriptions, titles };
};
