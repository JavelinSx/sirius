'use client';
import React, { ChangeEvent, useState, FC } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import checkMark from '@/public/solid_check.png';

interface CheckboxProps {
  label: string;
}

export const Checkbox: FC<CheckboxProps> = ({ label }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <label className={styles.checkboxLabel}>
      <input
        name='checkboxRemember'
        type='checkbox'
        className={styles.checkboxFake}
        checked={checked}
        onChange={handleChange}
      />
      <span className={checked ? styles.checkboxActive : styles.checkbox}>
        <Image src={checkMark} alt='mark' className={checked ? styles.checkMark : styles.checkMarkHidden} />
      </span>
      {label}
    </label>
  );
};
