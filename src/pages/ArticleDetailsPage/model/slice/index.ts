import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageScheme } from '../types';
import { articleDetailsRecommendationsReducer } from './articleDetailsPageRecommendations';
import { articleDetailsCommentsReducer } from './аrticlesDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageScheme>({
  recommendations: articleDetailsRecommendationsReducer,
  comments: articleDetailsCommentsReducer,
});
