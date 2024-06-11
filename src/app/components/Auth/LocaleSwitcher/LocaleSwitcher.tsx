'use client';
import type { Locale } from 'i18n-config';
import { useRouter } from 'next/navigation';
import { FC, useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/src/lib/hooks';
import { setLang, selectLang } from '@/src/lib/features/appSlice';
import styles from './styles.module.scss';

export const LocaleSwitcher: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const lang = useAppSelector(selectLang);
  const [activeLocale, setActiveLocale] = useState(lang);

  const handleLocaleChange = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>, locale: Locale) => {
      e.preventDefault();
      dispatch(setLang(locale));
      setActiveLocale(locale);
    },
    [dispatch]
  );

  return (
    <div className={styles.localesContainer}>
      <ul className={styles.localeSwitcherList}>
        <li key='ru'>
          <span
            onClick={(e) => handleLocaleChange(e, 'ru')}
            className={`${styles.localeItem} ${activeLocale === 'ru' ? styles.localeItemActive : ''}`}
          >
            RU
          </span>
        </li>
        <li key='en'>
          <span
            onClick={(e) => handleLocaleChange(e, 'en')}
            className={`${styles.localeItem} ${activeLocale === 'en' ? styles.localeItemActive : ''}`}
          >
            EN
          </span>
        </li>
      </ul>
    </div>
  );
};
