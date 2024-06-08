'use client';

import { FormEvent, FC, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useEmailMutation } from '@/src/lib/features/auth/authApiSlice';
import styles from './styles.module.scss';
import logo from '@/public/logo.png';
import Image from 'next/image';
import { LoginForm } from './LoginForm/LoginForm';
import { selectEmail, selectPassword, selectRememberMe } from '@/src/lib/features/auth/authSlice';
import React from 'react';
import { LocaleSwitcher } from './LocaleSwitcher/LocaleSwitcher';
import { useTranslation } from 'next-i18next';
import { useAppSelector } from '@/src/lib/hooks';
import { selectDictionary } from '@/src/lib/features/appSlice';

export const Auth: FC = () => {
  const router = useRouter();
  const dictionary = useAppSelector(selectDictionary);
  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);
  const rememberMe = useAppSelector(selectRememberMe);
  const [loginMutation, { isLoading }] = useEmailMutation();
  const isButtonDisabled = isLoading || email.length === 0 || password.length === 0;

  const loginHandler = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        await loginMutation({ email, password, rememberMe }).unwrap();
      } catch (err) {
        if (err instanceof Error) {
          console.error(dictionary.auth.loginFailed, err.message);
        } else {
          console.error(dictionary.auth.loginFailed, err);
        }
      }
    },
    [email, password, rememberMe, loginMutation, router]
  );

  return (
    <div className={styles.container}>
      <Image src={logo} alt='logo' className={styles.logo}></Image>
      <h1 className={styles.title}>{dictionary.auth.title}</h1>
      <LoginForm isButtonDisabled={isButtonDisabled} onSubmit={loginHandler}></LoginForm>
      <LocaleSwitcher></LocaleSwitcher>
    </div>
  );
};
