import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
    data: null,
    isLoading: false,
    isError: null,
    readonly: false,

};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<Profile>) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
            builder
                .addCase(fetchProfileData.pending, (state) => {
                    state.isError = undefined;
                    state.isLoading = true;
                })
                .addCase(fetchProfileData.fulfilled, 
                    (
                        state, 
                        action: PayloadAction<Profile>
                    ) => {
                    state.isLoading = false;
                    state.data = action.payload;
                })
                .addCase(fetchProfileData.rejected, (state, action) => {
                    state.isLoading = false;
                    state.isError = action.payload;
                });
        },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;