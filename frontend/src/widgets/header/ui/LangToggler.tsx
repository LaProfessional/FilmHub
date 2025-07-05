// FIXME: импорт с более высокого уровня, исправить
import { useLanguage } from "@/app/providers/i18n";
import { Button } from "@/shared/ui";

// TODO: вынести этот компонент... куда-нибудь?

export function LangToggler() {
  const { language, changeLanguage } = useLanguage();

  const toggleLang = () => changeLanguage(language === "en" ? "ru" : "en");

  return <Button onClick={toggleLang}>{language === "en" ? "en" : "ru"}</Button>;
}
