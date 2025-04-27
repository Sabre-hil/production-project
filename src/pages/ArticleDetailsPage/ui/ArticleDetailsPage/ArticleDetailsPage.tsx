import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import { articleDetailsPageReducer } from '../../model/slice/index';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComment } from '../ArticleDetailsComment/ArticleDetailsComment';

interface ArticlesDetailPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticlesDetailPageProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams<{id: string}>();
  const reducers: ReducersList = {
    articlesDetailsPage: articleDetailsPageReducer,
  };

  if (!id) {
    return (
      <div className={classNames(cls.ArticlesDetailPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticlesDetailPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRecommendationsList />
        <ArticleDetailsComment id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
