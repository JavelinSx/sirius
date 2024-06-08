'use client';
import { FC } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
export const AccessoryAuthLink: FC = () => {
  return (
    <div className={styles.linkContainer}>
      <div className={styles.linkList}>
        <Link href={'/reset-password'}>Я забыл пароль</Link>
        <Link href={'/auth-coach'}>Войти как тренер</Link>
      </div>

      <div className={styles.registerContainer}>
        <p>Нет аккаунта?</p>
        <Link href={'/register'}>Зарегистрироваться</Link>
      </div>
    </div>
  );
};
