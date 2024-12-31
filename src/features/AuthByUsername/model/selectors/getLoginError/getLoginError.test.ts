import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state = {
            loginForm: {
                error: 'error',
            },
        } as unknown as StateSchema;

        expect(getLoginError(state)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state = {} as unknown as StateSchema;
        expect(getLoginError(state)).toEqual(undefined);
    });
});