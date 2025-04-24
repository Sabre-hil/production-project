const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (sliceName) => `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ${firstCharUpperCase(sliceName)}Schema } from '../types/${sliceName}Schema';

const initialState: ${firstCharUpperCase(sliceName)}Schema = {};

export const ${sliceName}Slice = createSlice({
  name: '${sliceName}',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const { actions: ${sliceName}Actions } = ${sliceName}Slice;
export const { reducer: ${sliceName}Reducer } = ${sliceName}Slice;
`;
