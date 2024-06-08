'use client';
import { FC, useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import logo from '@/public/logo-menu.svg';
import giftReferal from '@/public/icon/gift-illustration.svg';
import Image from 'next/image';
import { MenuList } from '../MenuList';
import { ButtonReferal } from '../../ui/ButtonReferal/ButtonReferal';

export const Menu: FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  const handleMouseEnter = (title: string) => {
    setHoveredLink(title);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <nav className={styles.menuContainer}>
      <Image src={logo} alt='logo' className={styles.logo} priority />
      <ul className={styles.menu}>
        {MenuList.map((item) => (
          <li
            className={`${styles.menuItem} ${activeLink === item.href ? styles.menuItemActive : ''}`}
            key={item.title}
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveLink(item.href)}
          >
            <Image
              src={activeLink === item.href || hoveredLink === item.title ? item.iconWhite : item.icon}
              className={styles.icon}
              alt={item.title}
            />
            <Link href={item.href} className={`${styles.link} ${activeLink === item.href ? styles.linkActive : ''}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.containerReferal}>
        <p className={styles.titleReferal}>Учитесь бесплатно</p>
        <p className={styles.textReferal}>Приводите друзей с детьми заниматься в Sirius Future и получайте подарки!</p>
        <ButtonReferal></ButtonReferal>
        <Image src={giftReferal} className={styles.imgReferal}></Image>
      </div>
    </nav>
  );
};
