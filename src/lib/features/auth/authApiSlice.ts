import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../users/usersSlice';
interface LoginResponse {
  user: User;
}

interface LoginRequest {
  email: string;
  password: string;
  remember: string;
}
interface LogoutRequest {
  email: string;
}

export const authApiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'auth',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation<LoginResponse, LogoutRequest>({
      query: (email) => ({
        url: 'logout',
        method: 'POST',
        body: email,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApiSlice;
