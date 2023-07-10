/** @type {import('tailwindcss').Config} */

import {defaultTheme} from 'tailwindcss/defaultTheme'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "540px",
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
