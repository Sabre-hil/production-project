import { EntityState } from '@reduxjs/toolkit';
import {
  Article,
  ArticleView,
  ArticleType,
  ArticleSortField,
} from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSheme extends EntityState<Article> {
    error?: string;
    isLoading?: boolean;
    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filter
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
    // init
    _inited: boolean;
}
