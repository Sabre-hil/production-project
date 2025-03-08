import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation('article');
  const { className, block } = props;

  return (
    <div className={classNames(cls.ArticleText, {}, [className])}>
      {block?.title && (
        <Text title={block.title} className={cls.title} />
      )}
      {block?.paragraphs.map((paragraph, index) => (
        <Text key={paragraph} title={paragraph} className={cls.paragraph} />
      ))}
    </div>
  );
});
