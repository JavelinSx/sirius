'use client';
import { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import logo from '@/public/logo-menu.svg';
import giftReferal from '@/public/icon/gift-illustration.svg';
import Image from 'next/image';
import { MenuList } from '../MenuList';
import { ButtonReferal } from '../../ui/ButtonReferal/ButtonReferal';
import { usePathname } from 'next/navigation';
import { useAppSelector } from '@/src/lib/hooks';

export const Menu: FC = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.menuContainer}>
      <Image quality={100} src={logo} alt='logo' width={142} className={styles.logo} priority />
      <ul className={styles.menu}>
        {MenuList.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li className={`${styles.menuItem} ${isActive ? styles.active : ''}`} key={item.title}>
              <Link href={item.href} className={styles.link}>
                <item.icon className={styles.icon} />
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.containerReferal}>
        <p className={styles.titleReferal}>Учитесь бесплатно</p>
        <p className={styles.textReferal}>Приводите друзей с детьми заниматься в Sirius Future и получайте подарки!</p>
        <ButtonReferal />
        <Image src={giftReferal} className={styles.imgReferal} width={81} alt='gift-image' />
      </div>
    </nav>
  );
};
