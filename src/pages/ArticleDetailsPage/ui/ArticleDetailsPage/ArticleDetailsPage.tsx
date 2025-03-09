import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slice/аrticlesDetailsCommentsSlice';
import {
  getArticlesCommentsIsLoading,
} from '../../model/selectors/comment';
import cls from './ArticleDetailsPage.module.scss';
import { fetchCommentByArticleId } from '../../model/services/fetchCommentByArticleId/fetchCommentByArticleId';

interface ArticlesDetailPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticlesDetailPageProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams<{id: string}>();
  const dispatch = useAppDispatch();
  const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
  };
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticlesCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentByArticleId(id));
  });

  if (!id) {
    return (
      <div className={classNames(cls.ArticlesDetailPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticlesDetailPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title="Комментарии" />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
