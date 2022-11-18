import { To } from 'history';
import { NavigateOptions } from 'react-router';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { CounterSchema } from 'entities/Counter';
import { LoginSchema } from 'features/authByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,

    // Асинхронные редьюсеры
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
}

export type StateSchemaKey = keyof StateSchema;

export interface reducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: reducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg
}
