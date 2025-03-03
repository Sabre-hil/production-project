import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticlesDetailPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticlesDetailPageProps) => {
  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.ArticlesDetailPage, {}, [className])}>
      ArticlesDetailPage
    </div>
  );
};

export default memo(ArticleDetailsPage);
