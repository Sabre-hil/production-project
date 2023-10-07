import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.NotFounPage, {}, [])}>
      <h2>{t('Страница не найдена')}</h2>
    </div>
  );
};

export default NotFoundPage;
