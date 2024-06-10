'use client';
import { FC } from 'react';
import { useAppSelector } from '@/src/lib/hooks';
import { useTranslation } from 'next-i18next';
import { selectDictionary } from '@/src/lib/features/appSlice';

import styles from './styles.module.scss';
import logo from '@/public/logo.png';
import Image from 'next/image';

import { LoginForm } from './LoginForm/LoginForm';
import { LocaleSwitcher } from './LocaleSwitcher/LocaleSwitcher';

export const Auth: FC = () => {
  const dictionary = useAppSelector(selectDictionary);

  return (
    <div className={styles.container}>
      <Image src={logo} alt='logo' className={styles.logo}></Image>
      <h1 className={styles.title}>{dictionary.auth.title}</h1>
      <LoginForm></LoginForm>
      <LocaleSwitcher></LocaleSwitcher>
    </div>
  );
};
