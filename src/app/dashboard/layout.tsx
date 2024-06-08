import { Menu } from '../components/Dashboard/Menu/Menu';
import { Profile } from '../components/Dashboard/Profile/Profile';
import styles from './styles.module.scss';
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className={styles.dashboard}>
      <Menu></Menu>
      <div className={styles.dashboardContent}>
        <Profile></Profile>
        {children}
      </div>
    </section>
  );
}
