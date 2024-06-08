'use client';
import { ChangeEvent, FormEvent, FC, useCallback } from 'react';
import styles from './styles.module.scss';
import { Input } from '../ui/Input/Input';
import { Checkbox } from '../ui/Checkbox/Checkbox';
import { Button } from '../ui/Button/Button';
import { AccessoryAuthLink } from '../AccessoryAuthLink/AccessoryAuthLink';
import { useAppDispatch, useAppSelector } from '@/src/lib/hooks';
import {
  selectEmail,
  selectPassword,
  selectRememberMe,
  setEmail,
  setPassword,
  setRememberMe,
} from '@/src/lib/features/auth/authSlice';

interface LoginFormProps {
  isButtonDisabled: boolean;
  onSubmit: (e: FormEvent) => void;
}

export const LoginForm: FC<LoginFormProps> = ({ isButtonDisabled, onSubmit }) => {
  const dispatch = useAppDispatch();

  const handleCheckboxChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setRememberMe(e.target.checked));
  }, []);

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.inputContainer}>
        <Input type='email' name='email' placeholder='E-mail' required={true} />
        <Input type='password' name='password' placeholder='Password' required={true} />
        <Checkbox label='Запомнить меня' onChange={handleCheckboxChange} />
      </div>
      <div>
        <Button type='submit' text='Войти' status={isButtonDisabled} />
        <AccessoryAuthLink />
      </div>
    </form>
  );
};
