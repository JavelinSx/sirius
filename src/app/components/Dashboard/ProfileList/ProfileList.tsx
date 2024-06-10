import { FC } from 'react';
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

export const ProfileList: FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectStateProfileList);
  const users = useAppSelector(selectUsers);
  const currentProfile = useAppSelector(selectCurrentProfile);
  const [logoutMutation, { isLoading }] = useLogoutMutation();

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
      const result = await logoutMutation({ email: currentProfile.email }).unwrap();
      console.log(result);

      // Удаление пользователя из списка
      dispatch(deleteUser(currentProfile));

      // Назначение нового текущего профиля
      const remainingUsers = users.filter((user) => user.email !== currentProfile.email);
      dispatch(setProfileAfterLogout({ currentProfile, remainingUsers }));

      // Обработка успешного выхода, например, редирект на страницу входа
      // Пример: window.location.href = '/login';
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

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
