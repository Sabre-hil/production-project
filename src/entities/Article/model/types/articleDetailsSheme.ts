import { Article } from './article';

export interface ArticleDetailsSheme {
    isLoading: boolean;
    error?: string;
    data?: Article;
}
