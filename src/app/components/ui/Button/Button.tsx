'use client';
import { FC } from 'react';
import styles from './styles.module.scss';
import React from 'react';
interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  status: boolean;
  text: string;
}

export const Button: FC<ButtonProps> = ({ type, status, text }) => {
  return (
    <button className={styles.button} disabled={status} type={type}>
      {text}
    </button>
  );
};
