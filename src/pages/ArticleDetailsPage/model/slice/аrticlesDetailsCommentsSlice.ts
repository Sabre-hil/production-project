import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { ArticlesDetailsCommentsSheme } from '../types/ArticlesDetailsCommentsSheme';
import { fetchCommentByArticleId } from '../services/fetchCommentByArticleId/fetchCommentByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const аrticlesDetailsCommentsSlice = createSlice({
  name: 'аrticlesDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticlesDetailsCommentsSheme>({
    isLoading: false,
    error: undefined,
    ids: ['1', '2'],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentByArticleId.fulfilled, (
        state,
        action: PayloadAction<Comment[]>,
      ) => {
        state.error = undefined;
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsCommentsReducer } = аrticlesDetailsCommentsSlice;
