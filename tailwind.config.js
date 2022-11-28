/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bOutline': '#d9d9d9',
        'textCol': '#252525',
        'inpCol': '#8f8f8f',
        'hoverBorder': "#42aaff",
        'focusBorder': "#cae2f8",
        'disableCol': '#b8b8b8',
        'btnGrey': '#bfbfbf',
        'plusGreen': '#e8fdf5',
        'submitBorder': '#e7040f',
        'submitHover': '#ff1622'
      }
    },
  },
  plugins: [],
}
