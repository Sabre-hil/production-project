import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { VStack } from 'shared/ui/Stack';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticleComments } from '../../model/slice/аrticlesDetailsCommentsSlice';
import { getArticlesCommentsIsLoading } from '../../model/selectors/comment';
import {
  addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
  fetchCommentByArticleId,
} from '../../model/services/fetchCommentByArticleId/fetchCommentByArticleId';

interface ArticleDetailsCommentProps {
  id: string;
}

export const ArticleDetailsComment = memo((props: ArticleDetailsCommentProps) => {
  const { id } = props;
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticlesCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentByArticleId(id));
  });

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  return (
    <VStack>
      <Text size={TextSize.L} title="Комментарии" />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </VStack>
  );
});
