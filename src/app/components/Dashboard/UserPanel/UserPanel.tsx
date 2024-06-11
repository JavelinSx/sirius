'use client';
import { FC, useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { PanelItems } from '@/src/app/components/Dashboard/PanelItems/PanelItems';
import { useAppSelector } from '@/src/lib/hooks';
import { selectUsers } from '@/src/lib/features/users/usersSlice';
import avatarAnna from '@/public/avatar/avatar-anna.svg';
import avatarMiha from '@/public/avatar/avatar-miha.svg';
import emptyAvatar from '@/public/avatar/empty.svg';
import { ProfileList } from '../ProfileList/ProfileList';
import { selectCurrentProfile } from '@/src/lib/features/appSlice';
import Link from 'next/link';
import Image from 'next/image';

interface UserPanelProps {
  title?: string;
}

export const UserPanel: FC<UserPanelProps> = ({ title = '' }) => {
  const currentProfile = useAppSelector(selectCurrentProfile);
  const [mounted, setMounted] = useState(false);
  //таже истори с гидратацией
  useEffect(() => {
    setMounted(true);
  }, []);

  const avatarFake = currentProfile.name ? (currentProfile.name === 'Михаил' ? avatarMiha : avatarAnna) : emptyAvatar;

  if (!mounted) return null;

  return (
    <div className={styles.userPanelContainer}>
      <h1 className={styles.userPanelTitle}>
        {currentProfile.name ? (
          <>
            Добро пожаловать,&nbsp;
            <Link href={'/'}>{currentProfile.name}!</Link>
          </>
        ) : null}
      </h1>

      <PanelItems imgAvatar={avatarFake} />
      <ProfileList />
    </div>
  );
};
