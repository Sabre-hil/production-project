import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

export interface ArticlesDetailsCommentsSheme extends EntityState<Comment> {
    error?: string;
    isLoading?: boolean;
}
