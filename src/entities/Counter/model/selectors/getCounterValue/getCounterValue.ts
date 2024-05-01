import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterSheme } from '../../types/CounterSheme';

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSheme) => counter.value,
);
