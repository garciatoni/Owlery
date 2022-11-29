import { configureStore } from '@reduxjs/toolkit';


import { authSlice } from './auth/authSlice';
import { setsSlice } from './sets/setsSlice';


export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        sets: setsSlice.reducer,
    }
})