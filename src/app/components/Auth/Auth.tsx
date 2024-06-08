'use client';

import { FormEvent, FC, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '@/src/lib/features/auth/authApiSlice';
import styles from './styles.module.scss';
import logo from '@/public/logo.png';
import Image from 'next/image';
import { useAppSelector } from '@/src/lib/hooks';
import { LoginForm } from '../LoginForm/LoginForm';
import { selectLogin, selectPassword, selectRememberMe } from '@/src/lib/features/auth/authSlice';
import React from 'react';

export const Auth: FC = () => {
  const router = useRouter();
  const login = useAppSelector(selectLogin);
  const password = useAppSelector(selectPassword);
  const rememberMe = useAppSelector(selectRememberMe);
  const [loginMutation, { isLoading }] = useLoginMutation();
  const isButtonDisabled = isLoading || login.length === 0 || password.length === 0;
  const loginHandler = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        await loginMutation({ login, password, rememberMe }).unwrap();
        router.replace('/dashboard');
      } catch (err) {
        if (err instanceof Error) {
          console.error('Failed to login:', err.message);
        } else {
          console.error('Failed to login:', err);
        }
      }
    },
    [login, password, rememberMe, loginMutation, router]
  );

  return (
    <div className={styles.container}>
      <Image src={logo} alt='logo' className={styles.logo}></Image>
      <h1 className={styles.title}>Вход в Sirius Future</h1>
      <LoginForm isButtonDisabled={isButtonDisabled} onSubmit={loginHandler}></LoginForm>
    </div>
  );
};
