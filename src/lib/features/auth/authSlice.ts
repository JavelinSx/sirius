import {  PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "@/src/lib/createAppSlice";


interface AuthState{
    Email: string;
    password: string;
    rememberMe: boolean;
}

const initialState: AuthState = {
    Email: '',
    password: '',
    rememberMe: false
}

export const authSlice = createAppSlice({
    name: 'auth',
    initialState,
    reducers: {
        setEmail(state,action: PayloadAction<string>){

            state.Email = action.payload
        },
        setPassword(state,action: PayloadAction<string>){

            state.password = action.payload
        },
        setRememberMe(state,action: PayloadAction<boolean>){

            state.rememberMe = action.payload
        },
        resetCredentials(state){
            state.Email = ''
            state.password = ''
        },

    },
    selectors: {
        selectEmail: (auth) => auth.Email,
        selectPassword: (auth) => auth.password,
        selectRememberMe: (auth) => auth.rememberMe
    }
})

export const { setEmail, setPassword, setRememberMe, resetCredentials}  = authSlice.actions;
export const {selectEmail, selectPassword, selectRememberMe} = authSlice.selectors;
