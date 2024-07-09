/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'xxs': '10rem',
      },
      screens: {
        'xs': '350px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
