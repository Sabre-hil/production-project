/* eslint-disable react/jsx-curly-brace-presence */
import React, { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articleDetailsReducer,
} from 'entities/Article/model/slice/articleDetailsSlice';
import {
  Text,
  TextAlign,
  TextSize,
  TextTheme,
} from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalenadarIcon from 'shared/assets/icons/calendar-20-20.svg';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} block={block} className={cls.block} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} block={block} className={cls.block} />;
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} borderRadius={'50%'} />
        <Skeleton className={cls.title} width={300} height={24} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width={'100%'} height={200} />
        <Skeleton className={cls.skeleton} width={'100%'} height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        title={t('Произошла ошибка при загрузке статьи')}
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
      />
    );
  } else {
    content = (
      <>
        <div className={cls.AvatarWrapper}>
          <Avatar
            size={200}
            src={article?.img}
            alt="avatar"
            className={cls.avatar}
          />
        </div>
        <Text
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon} className={cls.icon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalenadarIcon} className={cls.icon} />
          <Text text={article?.createdAt} />
        </div>
        {/* {article?.blocks?.map((block) => (
          <React.Fragment key={block.id}>{renderBlock(block)}</React.Fragment>
        ))} */}
        {article?.blocks?.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
