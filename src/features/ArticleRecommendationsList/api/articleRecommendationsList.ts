import { Article } from 'entities/Article';
import { rtkApi } from 'shared/api/rtkApi';

const recommendationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommandationsList: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const useArticleRecommendationsList = recommendationApi.useGetArticleRecommandationsListQuery;
