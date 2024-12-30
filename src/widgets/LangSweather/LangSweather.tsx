/* eslint-disable max-len */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSweatherProps {
  className?: string;
  short?: boolean
}

export const LangSweather = memo(({ className, short }: LangSweatherProps) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    /* i18next-extract-disable-next-line */
    <Button className={classNames('', {}, [className])} theme={ButtonTheme.CLEAR} onClick={toggle}>{t(short ? 'Короткий язык' : 'Язык')}</Button>
  );
});
