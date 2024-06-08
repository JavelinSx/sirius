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
import { selectDictionary } from '@/src/lib/features/appSlice';

interface LoginFormProps {
  isButtonDisabled: boolean;
  onSubmit: (e: FormEvent) => void;
}

export const LoginForm: FC<LoginFormProps> = ({ isButtonDisabled, onSubmit }) => {
  const dictionary = useAppSelector(selectDictionary);
  const dispatch = useAppDispatch();

  const handleCheckboxChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setRememberMe(e.target.checked));
    },
    [dispatch]
  );

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.inputContainer}>
        <Input type='email' name='email' placeholder={dictionary.auth.email} required={true} />
        <Input type='password' name='password' placeholder={dictionary.auth.password} required={true} />
        <Checkbox label={dictionary.auth.rememberMe} onChange={handleCheckboxChange} />
      </div>
      <div>
        <Button type='submit' text={dictionary.auth.login} status={isButtonDisabled} />
        <AccessoryAuthLink />
      </div>
    </form>
  );
};
