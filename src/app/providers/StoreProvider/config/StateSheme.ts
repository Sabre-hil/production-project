import { combineReducers, EnhancedStore, Reducer, ReducersMapObject, StateFromReducersMapObject } from '@reduxjs/toolkit';
import { CounterSheme } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSheme } from 'features/AuthByUsername/model/types/loginSheme';
import { AnyAction } from '@reduxjs/toolkit';
import { ProfileScheme } from 'entities/Profile';

export interface StateSheme {
    counter: CounterSheme;
    user: UserSchema;

    // Асинхронные редюсеры
    loginForm?: LoginSheme;
    profile?: ProfileScheme;
}

export type StateShemeKey = keyof StateSheme;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSheme>;
    reduce: (state: StateSheme, action: AnyAction) => any;
    add: (key: StateShemeKey, reducer: Reducer) => void;
    remove: (key: StateShemeKey) => void;
}
export interface ReduxWithManager extends EnhancedStore<StateSheme> {
    reducerManager: ReducerManager;
}
