'use client';
import { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import { PanelItems } from '@/src/app/components/Dashboard/PanelItems/PanelItems';
import { useAppSelector } from '@/src/lib/hooks';
import { selectUsers } from '@/src/lib/features/users/usersSlice';
import avatarAnna from '@/public/avatar/avatar-anna.svg';
import avatarMiha from '@/public/avatar/avatar-miha.svg';
import emptyAvatar from '@/public/avatar/empty.svg';
import { ProfileList } from '../ProfileList/ProfileList';
import { selectCurrentProfile } from '@/src/lib/features/appSlice';
interface UserPanelProps {
  title?: string;
}

export const UserPanel: FC<UserPanelProps> = ({ title = '' }) => {
  const currentProfile = useAppSelector(selectCurrentProfile);
  const avatarFake = currentProfile ? (currentProfile.name === 'Михаил' ? avatarMiha : avatarAnna) : emptyAvatar;
  return (
    <div className={styles.userPanelContainer}>
      <PanelItems imgAvatar={avatarFake} />
      <ProfileList></ProfileList>
    </div>
  );
};
