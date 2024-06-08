import type { Metadata } from 'next';
import { Auth } from './components/Auth/Auth';

export default function IndexPage() {
  return <Auth />;
}

export const metadata: Metadata = {
  title: 'Redux Toolkit',
};
