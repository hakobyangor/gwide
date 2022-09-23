/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./apps/web/pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
})
