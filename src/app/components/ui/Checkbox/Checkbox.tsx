'use client';
import React, { ChangeEvent, FC } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import checkMark from '@/public/solid_check.png';
import { useAppSelector } from '@/src/lib/hooks';
import { selectRememberMe } from '@/src/lib/features/auth/authSlice';

interface CheckboxProps {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ label, onChange }) => {
  const checked = useAppSelector(selectRememberMe);
  return (
    <label className={styles.checkboxLabel}>
      <input
        name='checkboxRemember'
        type='checkbox'
        className={styles.checkboxFake}
        checked={checked}
        onChange={onChange}
      />
      <span className={checked ? styles.checkboxActive : styles.checkbox}>
        <Image src={checkMark} alt='mark' className={checked ? styles.checkMark : styles.checkMarkHidden} />
      </span>
      {label}
    </label>
  );
};
