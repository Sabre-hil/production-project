import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AddCommentForm } from 'features/AddCommentForm';
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slice/аrticlesDetailsCommentsSlice';
import {
  getArticlesCommentsIsLoading,
} from '../../model/selectors/comment';

import {
  addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
  fetchCommentByArticleId,
} from '../../model/services/fetchCommentByArticleId/fetchCommentByArticleId';
import cls from './ArticleDetailsPage.module.scss';

interface ArticlesDetailPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticlesDetailPageProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams<{id: string}>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
  };
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticlesCommentsIsLoading);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentByArticleId(id));
  });

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

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
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t('Назад к списку')}
        </Button>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title="Комментарии" />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
