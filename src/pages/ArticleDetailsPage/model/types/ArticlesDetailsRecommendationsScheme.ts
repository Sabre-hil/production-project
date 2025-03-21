import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export interface ArticlesDetailsRecommendationsScheme extends EntityState<Article> {
    error?: string;
    isLoading?: boolean;
}
