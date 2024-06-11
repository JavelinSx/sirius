import CustomCalendar from '@/src/app/components/Schedule/CustomCalendar/CustomCalendar';
import styles from './styles.module.scss';
export default function Schedule() {
  return (
    <div className={styles.schedule}>
      <CustomCalendar></CustomCalendar>
    </div>
  );
}
