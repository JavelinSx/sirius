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
      grey: {
        50: '#FDFDFF',
        200: '#ECECEC',
        400: '#C8C5CD',
        600: '#79747F',
        800: '#323854'
      },
      violet:{
        100: '#eeeeff',
        200: '#decfff',
        400: '#8d7fc7',
      },
      darkBlue: '#008aff'
    },
    extend: {
      fontSize: {
        '4.5xl': '40px'
      },
      lineHeight:{
        'leading-8.5': '35px'
      }
    },
  },
  plugins: [],
}

export default config

