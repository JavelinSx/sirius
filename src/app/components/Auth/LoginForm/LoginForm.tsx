'use client';
import { FormEvent, FC, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/src/lib/hooks';
import { useLoginMutation } from '@/src/lib/features/auth/authApiSlice';
import { selectDictionary, selectRememberMe } from '@/src/lib/features/appSlice';
import { setUser } from '@/src/lib/features/users/usersSlice';
import { setCurrentProfile } from '@/src/lib/features/appSlice';
import styles from './styles.module.scss';
import { Input } from '../../ui/Input/Input';
import { Checkbox } from '../../ui/Checkbox/Checkbox';
import { Button } from '../../ui/Button/Button';
import { AccessoryAuthLink } from '../AccessoryAuthLink/AccessoryAuthLink';

interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = () => {
  const dictionary = useAppSelector(selectDictionary);
  const rememberMe = useAppSelector(selectRememberMe);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loginMutation, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const remember = rememberMe.toString();

    try {
      const result = await loginMutation({ email, password, remember }).unwrap();

      dispatch(setUser([result.user]));
      dispatch(setCurrentProfile(result.user));
      router.push('/dashboard/home');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <Input type='email' name='email' placeholder={dictionary.auth.email} required={true} />
        <Input type='password' name='password' placeholder={dictionary.auth.password} required={true} />
        <Checkbox label={dictionary.auth.rememberMe} />
      </div>
      <div>
        <Button type='submit' text={dictionary.auth.login} status={isLoading} />
        <AccessoryAuthLink />
      </div>
    </form>
  );
};
