import autoprefixer from 'autoprefixer';
import { postcss } from 'tailwindcss';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    postcss: {},
    autoprefixer: {}

  },
};

export default config;
