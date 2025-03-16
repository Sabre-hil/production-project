import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';

export const fetchNextArticlesList = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
      'articlesPage/fetchNextArticlesList',
      async (_, thunkApi) => {
        const {
          getState,
          dispatch,
        } = thunkApi;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
          dispatch(fetchArticlesList({
            page: page + 1,
          }));
          dispatch(articlesPageActions.setPage(page + 1));
        }
      },
    );
