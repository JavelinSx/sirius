import type { Config } from "tailwindcss";

const colors = require('tailwindcss/colors')
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
      gray: {
        50: '#FDFDFF',
        200: '#ECECEC',
        400: '#C8C5CD',
        600: '#79747F',
      },
      violet:{
        100: '#eeeeff',
        200: '#decfff',
        400: '#8d7fc7',
      },
      blue: {
        200: '#D8ECFF',
        400: '#008aff',
        600: '#434B74',
        800: '#323854',
      }
    },
    extend: {
      fontSize: {
        '4.5xl': '40px'
      },
      lineHeight:{
        'leading-8.5': '35px'
      },
      borderRadius:{
        'dashboard': '30px'
      },
      boxShadow: {
        'custom-button': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Пример кастомного box-shadow
      },
      transitionDuration: {
        DEFAULT: '300ms', // Заменяем стандартное значение transition-duration
      },
    },
  },
  plugins: [],
}

export default config

