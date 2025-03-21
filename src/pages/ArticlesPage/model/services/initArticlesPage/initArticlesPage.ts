import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';
import {
  getArticlesPageInited,
} from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
      'articlesPage/initArticlesPage',
      async (searchParams, thunkApi) => {
        const {
          getState,
          dispatch,
        } = thunkApi;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
          const paramsMap = {
            sort: (value: string) => dispatch(articlesPageActions.setSort(value as ArticleSortField)),
            order: (value: string) => dispatch(articlesPageActions.setOrder(value as SortOrder)),
            search: (value: string) => dispatch(articlesPageActions.setSearch(value)),
            type: (value: string) => dispatch(articlesPageActions.setType(value as ArticleType)),
          };

          Object.entries(paramsMap).forEach(([key, action]) => {
            const paramValue = searchParams.get(key);
            if (paramValue) {
              action(paramValue);
            }
          });
          dispatch(articlesPageActions.initState());
          dispatch(fetchArticlesList({}));
        }
      },
    );
