import { CounterSheme } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSheme } from 'features/AuthByUsername/model/types/loginSheme';

export interface StateSheme {
    counter: CounterSheme;
    user: UserSchema;
    loginForm?: LoginSheme;
}
