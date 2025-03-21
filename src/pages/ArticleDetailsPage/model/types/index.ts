import { ArticlesDetailsCommentsScheme } from './ArticlesDetailsCommentsScheme';
import { ArticlesDetailsRecommendationsScheme } from './ArticlesDetailsRecommendationsScheme';

export interface ArticleDetailsPageScheme {
  comments: ArticlesDetailsCommentsScheme;
  recommendations: ArticlesDetailsRecommendationsScheme;
}
