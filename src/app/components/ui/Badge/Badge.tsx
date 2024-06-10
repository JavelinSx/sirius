import { FC } from 'react';
import styles from './styles.module.scss';

interface BadgeProps {
  count: number;
}

export const Badge: FC<BadgeProps> = ({ count = 2 }) => {
  return <div className={styles.badge}>{count}</div>;
};
