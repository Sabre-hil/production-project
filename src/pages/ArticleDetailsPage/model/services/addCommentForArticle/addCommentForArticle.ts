import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { addCommentFormActions } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { fetchCommentByArticleId } from '../fetchCommentByArticleId/fetchCommentByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
  'ArticleDetails/addCommentForArticle',
  async (text, thunkApi) => {
    const {
      extra,
      rejectWithValue,
      getState,
      dispatch,
    } = thunkApi;
    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentByArticleId(article?.id));

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
