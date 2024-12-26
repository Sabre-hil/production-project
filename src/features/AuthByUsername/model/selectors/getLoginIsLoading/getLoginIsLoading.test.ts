import { describe, expect, test } from '@jest/globals';
import { StateSheme } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('should return true', () => {
        const state = {
            loginForm: {
                isLoading: true
            },
        } as unknown as StateSheme;

        expect(getLoginIsLoading(state)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state = {} as unknown as StateSheme;
        expect(getLoginIsLoading(state)).toEqual(false);
    });
});