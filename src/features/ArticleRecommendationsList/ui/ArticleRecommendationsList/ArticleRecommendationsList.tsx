import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsList';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const {
    className,
  } = props;
  const { data: articles, error } = useArticleRecommendationsList(3);

  if (error) {
    return null;
  }

  return (
    <VStack gap="8">
      <Text size={TextSize.L} title="Рекомендуем" />
      <ArticleList
        articles={articles}
        target="_blank"
      />
    </VStack>
  );
});
