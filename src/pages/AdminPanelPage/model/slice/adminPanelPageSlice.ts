import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdminPanelPageSchema } from '../types/adminPanelPageSchema';

const initialState: AdminPanelPageSchema = {};

export const adminPanelPageSlice = createSlice({
  name: 'adminPanelPage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const { actions: adminPanelPageActions } = adminPanelPageSlice;
export const { reducer: adminPanelPageReducer } = adminPanelPageSlice;
