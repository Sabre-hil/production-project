import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailsSheme } from '../types/articleDetailsSheme';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';

const initialState: ArticleDetailsSheme = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (
        state,
        action: PayloadAction<Article>,
      ) => {
        state.error = undefined;
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
