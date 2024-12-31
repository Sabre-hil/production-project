import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    data: null,
    isLoading: null,
    isError: null,
    readonly: null,

};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<Profile>) => {
            state.data = action.payload;
        },
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;