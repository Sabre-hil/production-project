import { StateSheme } from "app/providers/StoreProvider";

export const getUserAuthData = (state: StateSheme) => state.user.authData;