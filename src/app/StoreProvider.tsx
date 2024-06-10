'use client';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/src/lib/store';

interface Props {
  children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
