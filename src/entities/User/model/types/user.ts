export interface User {
    id: number | null;
    username: string | null;
}

export interface UserSchema {
    authData: User | null;
}
