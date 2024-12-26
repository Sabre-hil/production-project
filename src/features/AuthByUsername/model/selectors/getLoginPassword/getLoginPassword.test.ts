import { describe, expect, test } from '@jest/globals';
import { StateSheme } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return value', () => {
        const state = {
            loginForm: {
                password: '1234'
            },
        } as unknown as StateSheme;

        expect(getLoginPassword(state)).toEqual('1234');
    });
    test('should work with empty state', () => {
        const state = {} as unknown as StateSheme;
        expect(getLoginPassword(state)).toEqual('');
    });
});