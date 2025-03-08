import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticlesDetailPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticlesDetailPageProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams<{id: string}>();

  if (!id) {
    return (
      <div className={classNames(cls.ArticlesDetailPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticlesDetailPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
