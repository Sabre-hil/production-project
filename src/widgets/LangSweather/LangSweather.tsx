import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import csl from "./LangSweather.module.scss";

interface LangSweatherProps {
  className?: string;
}

export const LangSweather = ({ className }: LangSweatherProps) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru'? 'en': 'ru')
  }

  return (
      <Button className={classNames(csl.LangSweather, {}, [className])} theme={ThemeButton.CLEAR} onClick={toggle}>{t("Язык")}</Button>
  );
};