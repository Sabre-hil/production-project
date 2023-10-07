import { t } from 'i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface ErrorPageProps {
    className? : string
}

const reloadPage = () => {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
};

const PageError = ({ className }: ErrorPageProps) => (
  <div className={classNames(cls.PageError, {}, [])}>
    <h1>{t('Произошла ошибка')}</h1>
    <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
  </div>
);

export default PageError;
