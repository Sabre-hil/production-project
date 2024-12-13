import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

const initialState: UserSchema = {
    authData: {
        id: null,
        username: null,
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const isUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (isUser) {
                state.authData = JSON.parse(isUser);
            };
        },
        logout: (state) => {
            state.authData = null;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        }
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
