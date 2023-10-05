import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const { t } = useTranslation('not-found');
  return (
    <div className={classNames(cls.NotFounPage, {}, [])}>
      <h2>{t('Такой страницы не существует')}</h2>
    </div>
  );
};

export default NotFoundPage;
