import type { Config } from 'tailwindcss';

const colors = require('tailwindcss/colors');
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      inherit: colors.inherit,
      white: colors.white,
      black: colors.black,
      red: '#E84849',
      yellow: {
        400: '#FFF1CB',
      },
      gray: {
        50: '#FDFDFF',
        200: '#ECECEC',
        400: '#C8C5CD',
        600: '#79747F',
      },
      violet: {
        100: '#eeeeff',
        200: '#decfff',
        300: '#E8CBFF',
        400: '#8d7fc7',
        800: '#7362BC',
      },
      blue: {
        200: '#D8ECFF',
        400: '#008aff',
        600: '#434B74',
        800: '#323854',
      },
    },
    extend: {
      fontFamily: {
        'circle-rounded': ['Circle-Rounded', 'sans-serif'],
        'circle-rounded-light': ['Circle-Rounded-Light', 'sans-serif'],
        'circle-rounded-bold': ['Circle-Rounded-Bold', 'sans-serif'],
      },
      fontSize: {
        '4.5xl': '40px',
      },
      lineHeight: {
        'leading-8.5': '35px',
      },
      borderRadius: {
        smallButton: '15px',
        dashboard: '30px',
        dashboardMin: '20px',
        dashboardSmall: '12px',
      },
      boxShadow: {
        custom: '0 4px 6px -1px rgba(143, 143, 183, 0.1), 0 2px 4px -1px rgba(143, 143, 183, 0.06)',
      },
      transitionDuration: {
        DEFAULT: '300ms', // Заменяем стандартное значение transition-duration
      },
    },
  },
  plugins: [],
};

export default config;
