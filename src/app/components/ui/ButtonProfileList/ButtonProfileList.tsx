import { FC, MouseEventHandler } from 'react';
import styles from './styles.module.scss';
import arrowDown from '@/public/icon/arrow-down.svg';
import Image from 'next/image';

interface ButtonProfileListProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const ButtonProfileList: FC<ButtonProfileListProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <Image src={arrowDown} width={24} height={24} alt='arrow-down' />
    </button>
  );
};
