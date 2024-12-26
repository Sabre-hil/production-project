import { describe, expect, test } from '@jest/globals';
import { StateSheme } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return value', () => {
        const state = {
            loginForm: {
                username: 'Andrey'
            },
        } as unknown as StateSheme;

        expect(getLoginUsername(state)).toEqual('Andrey');
    });
    test('should work with empty state', () => {
        const state = {} as unknown as StateSheme;
        expect(getLoginUsername(state)).toEqual('');
    });
});