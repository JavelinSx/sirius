'use client';
import React, { ChangeEvent, FC } from 'react';
import styles from './styles.module.scss';

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ name, type, placeholder, required, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={styles.input}
        required={required}
      />
    </div>
  );
};
