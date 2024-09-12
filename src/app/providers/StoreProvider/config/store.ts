import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSheme } from './StateSheme';

export function createReduxStore(initialState?: StateSheme) {
  const rootReducers: ReducersMapObject<StateSheme> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSheme>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
  });
}
