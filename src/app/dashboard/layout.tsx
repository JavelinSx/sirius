'use client';
import type { ReactNode } from 'react';
import { Menu } from '@/src/app/components/Dashboard/Menu/Menu';
import { UserPanel } from '@/src/app/components/Dashboard/UserPanel/UserPanel';
import styles from './styles.module.scss';
interface Props {
  readonly children: ReactNode;
}
export default function DashboardLayout({ children }: Props) {
  return (
    <section className={styles.dashboard}>
      <Menu></Menu>
      <div className={styles.dashboardContent}>
        <UserPanel></UserPanel>
        <div className={styles.mainBoard}>{children}</div>
      </div>
    </section>
  );
}
