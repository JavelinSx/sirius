'use client';
import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import avatarAnna from '@/public/avatar/avatar-anna.svg';
import avatarMiha from '@/public/avatar/avatar-miha.svg';
import arrowFillIcon from '@/public/icon/arrow-up-fill.svg';
import logOutIcon from '@/public/icon/logout-icon.svg';
import closeIcon from '@/public/icon/close-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

import { useAppSelector } from '@/src/lib/hooks';
import { useAppDispatch } from '@/src/lib/hooks';
import {
  setStateProfileList,
  setCurrentProfile,
  setProfileAfterLogout,
  selectStateProfileList,
  selectCurrentProfile,
} from '@/src/lib/features/appSlice';
import { User, selectUsers, deleteUser } from '@/src/lib/features/users/usersSlice';
import { useLogoutMutation } from '@/src/lib/features/auth/authApiSlice';

import { Divider } from '../../ui/Divider/Divider';
import { useRouter } from 'next/navigation';

export const ProfileList: FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectStateProfileList);
  const users = useAppSelector(selectUsers);
  const currentProfile = useAppSelector(selectCurrentProfile);
  const router = useRouter();
  const [logoutMutation, { isLoading }] = useLogoutMutation();

  // Устранение ошибки гидратации
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handlerClose = () => {
    dispatch(setStateProfileList());
  };

  const handlerChangeProfile = (userSelect: User) => {
    const profile = users.find((user) => user.name === userSelect.name);
    if (profile) {
      dispatch(setCurrentProfile(profile));
    }
  };

  const logout = async () => {
    try {
      await logoutMutation({ email: currentProfile.email }).unwrap();
      // Удаление пользователя из списка
      dispatch(deleteUser(currentProfile));

      //Поиск и Назначение нового текущего профиля
      const remainingUsers = users.filter((user) => user.email !== currentProfile.email);
      if (remainingUsers) {
        dispatch(setProfileAfterLogout({ currentProfile, remainingUsers }));
        router.push('/dashboard/home');
      } else {
        router.push('/');
      }
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  if (!mounted) return null;

  return isOpen ? (
    <div className={styles.profileList}>
      <Image src={arrowFillIcon} width={12} alt='arrow-fill-icon' className={styles.arrowFill}></Image>
      <button className={styles.close} onClick={handlerClose}>
        <Image src={closeIcon} width={24} height={24} alt='close-icon'></Image>
      </button>
      <p className={styles.profileTitle}>Смена пользователя</p>
      <ul className={styles.profileListContainer}>
        {users.map((user) => {
          const avatar = user.name === 'Михаил' ? avatarMiha : avatarAnna;
          const isCurrentProfile = currentProfile.name === user.name;
          return (
            <li
              key={user.name}
              className={`${styles.profileListItem} ${isCurrentProfile ? styles.active : ''}`}
              onClick={() => handlerChangeProfile(user)}
            >
              <Image src={avatar} width={32} height={32} alt='avatar-icon' className={styles.profileAvatar}></Image>
              <div>
                <p className={styles.profileName}>{user.name}</p>
                {isCurrentProfile ? <p className={styles.profileCurrent}>Это вы</p> : null}
              </div>
            </li>
          );
        })}
      </ul>
      <Divider />
      <div className={styles.profileLogout} onClick={logout}>
        Выход
        <Image src={logOutIcon} width={24} height={24} alt='logout-icon'></Image>
      </div>
    </div>
  ) : null;
};
