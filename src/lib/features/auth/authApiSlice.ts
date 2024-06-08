import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface LoginResponse {
  message: string;
}

interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const authApiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    email: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'auth',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation<LoginResponse, void>({
      query: () => ({
        url: 'logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useEmailMutation, useLogoutMutation } = authApiSlice;
