'use client';
import { FC } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useAppSelector } from '@/src/lib/hooks';
import { selectDictionary } from '@/src/lib/features/appSlice';

export const AccessoryAuthLink: FC = () => {
  const dictionary = useAppSelector(selectDictionary);

  return (
    <div className={styles.linkContainer}>
      <div className={styles.linkList}>
        <Link href={'/reset-password'}>{dictionary.auth.forgotPassword}</Link>
        <Link href={'/auth-coach'}>{dictionary.auth.loginAsCoach}</Link>
      </div>

      <div className={styles.registerContainer}>
        <p>{dictionary.auth.noAccount}</p>
        <Link href={'/register'}>{dictionary.auth.forgotPassword}</Link>
      </div>
    </div>
  );
};
