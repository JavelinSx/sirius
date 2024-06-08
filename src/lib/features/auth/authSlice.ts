import {  PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "@/src/lib/createAppSlice";


interface AuthState{
    login: string;
    password: string;
    rememberMe: boolean;
}

const initialState: AuthState = {
    login: '',
    password: '',
    rememberMe: false
}

export const authSlice = createAppSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin(state,action: PayloadAction<string>){

            state.login = action.payload
        },
        setPassword(state,action: PayloadAction<string>){

            state.password = action.payload
        },
        setRememberMe(state,action: PayloadAction<boolean>){

            state.rememberMe = action.payload
        },
        resetCredentials(state){
            state.login = ''
            state.password = ''
        },

    },
    selectors: {
        selectLogin: (auth) => auth.login,
        selectPassword: (auth) => auth.password,
        selectRememberMe: (auth) => auth.rememberMe
    }
})

export const { setLogin, setPassword, setRememberMe, resetCredentials}  = authSlice.actions;
export const {selectLogin, selectPassword, selectRememberMe} = authSlice.selectors;
