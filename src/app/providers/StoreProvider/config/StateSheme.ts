import { CounterSheme } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface StateSheme {
    counter: CounterSheme;
    user: UserSchema;
}
