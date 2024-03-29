import { configureStore } from '@reduxjs/toolkit';
import  authSlice  from '../features/authentication/authentication';

export const store = configureStore({
    reducer: {
        auth: authSlice
    }
});
