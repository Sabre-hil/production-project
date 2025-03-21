import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesCommentsIsLoading = (state: StateSchema) => state.articlesDetailsPage?.comments.isLoading;
export const getArticlesCommentsError = (state: StateSchema) => state.articlesDetailsPage?.comments.error;
