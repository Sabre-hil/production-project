import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesRecommendationsIsLoading = (state: StateSchema) => state.articlesDetailsPage?.recommendations.isLoading;
export const getArticlesRecommendationsError = (state: StateSchema) => state.articlesDetailsPage?.recommendations.error;
