import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSheme } from './StateSheme';
import { loginReducer } from 'features/AuthByUsername';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSheme) {
  const rootReducers: ReducersMapObject<StateSheme> = {
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSheme>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];