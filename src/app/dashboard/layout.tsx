'use client';
import type { ReactNode } from 'react';
import { Menu } from '@/src/app/components/Dashboard/Menu/Menu';
import { UserPanel } from '@/src/app/components/Dashboard/UserPanel/UserPanel';
import { useAppSelector } from '@/src/lib/hooks';
import {
  setStateProfileList,
  setCurrentProfile,
  setProfileAfterLogout,
  selectStateProfileList,
  selectCurrentProfile,
} from '@/src/lib/features/appSlice';
import styles from './styles.module.scss';
interface Props {
  readonly children: ReactNode;
}
export default function DashboardLayout({ children }: Props) {
  const currentProfile = useAppSelector(selectCurrentProfile);
  return (
    <section className={styles.dashboard}>
      <Menu></Menu>
      <div className={styles.dashboardContent}>
        <UserPanel title={currentProfile.name ? currentProfile.name : ''}></UserPanel>
        <div className={styles.mainBoard}>{children}</div>
      </div>
    </section>
  );
}
