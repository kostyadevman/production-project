import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User, userActions } from 'entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface loginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(`${e}`);
        }
    },
);
