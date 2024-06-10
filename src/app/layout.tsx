'use client';
import type { ReactNode } from 'react';
import { StoreProvider } from './StoreProvider';
import './styles/globals.css';
import type { Locale } from '@/i18n-config';

interface Props {
  readonly children: ReactNode;
  readonly params: { lang: Locale };
}

export default function RootLayout({ children, params: { lang } }: Props) {
  return (
    <StoreProvider>
      <html lang={lang}>
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
}
