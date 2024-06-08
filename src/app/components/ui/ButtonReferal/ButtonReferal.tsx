'use client';
import { FC } from 'react';
import styles from './styles.module.scss';
import React from 'react';
import Link from 'next/link';
interface ButtonReferalProps {}

export const ButtonReferal: FC<ButtonReferalProps> = () => {
  return (
    <Link className={styles.button} href='/referal'>
      Узнать
    </Link>
  );
};
