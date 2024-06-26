import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSheme } from './StateSheme';

export function createReduxStore(initialState?: StateSheme) {
  return configureStore<StateSheme>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
  });
}
