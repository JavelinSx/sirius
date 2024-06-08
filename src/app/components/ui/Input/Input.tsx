'use client';
import React, { ChangeEvent, FC } from 'react';
import styles from './styles.module.scss';
import { useAppDispatch } from '@/src/lib/hooks';
import { setEmail, setPassword, setRememberMe } from '@/src/lib/features/auth/authSlice';
interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
}

export const Input: FC<InputProps> = ({ name, type, placeholder, required }) => {
  const dispatch = useAppDispatch();
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    if (nameInput === 'email') {
      dispatch(setEmail(value));
    }
    if (nameInput === 'password') {
      dispatch(setPassword(value));
    }
  };
  return (
    <div className={styles.inputContainer}>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChangeInput}
        className={styles.input}
        required={required}
      />
    </div>
  );
};
