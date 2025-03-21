import { CombinedState } from 'redux';
import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { LoginSchema } from 'features/AuthByUsername';
import { AddCommentFormSheme } from 'features/AddCommentForm';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { ProfileSchema } from 'entities/Profile';
import { ArticleDetailsSheme } from 'entities/Article';
import { ArticlesPageSheme } from 'pages/ArticlesPage';
import { UIScheme } from 'features/UI/model/types/UIScheme';
import { ArticleDetailsPageScheme } from 'pages/ArticleDetailsPage/index';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    ui: UIScheme;

    // Асинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSheme;
    addCommentForm?: AddCommentFormSheme;
    articlesPage?: ArticlesPageSheme;
    articlesDetailsPage?: ArticleDetailsPageScheme;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
