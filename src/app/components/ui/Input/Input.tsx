import React, { ChangeEvent, FC } from 'react';
import styles from './styles.module.scss';

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
}

export const Input: FC<InputProps> = ({ name, type, placeholder, required }) => {
  return (
    <div className={styles.inputContainer}>
      <input name={name} type={type} placeholder={placeholder} className={styles.input} required={required} />
    </div>
  );
};
