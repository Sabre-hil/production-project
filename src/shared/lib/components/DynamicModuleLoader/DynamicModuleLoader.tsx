import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxWithManager, StateShemeKey } from 'app/providers/StoreProvider/config/StateSheme';

export type ReducerList = {
    [name in StateShemeKey]?: Reducer;
};

type ReducerListEntry = [StateShemeKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount: boolean;
};

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { reducers, removeAfterUnmount, children } = props;
    const store = useStore() as ReduxWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` })
        })
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        };
    }, []);

    return (
        <>
            {children}
        </>
    )
};