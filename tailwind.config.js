/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./apps/web/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gw-primary': {
          50: '#eefcfd',
          100: '#d5f6f8',
          200: '#b0ecf1',
          300: '#7adde6',
          400: '#3cc5d4',
          500: '#1fa1b2',
          600: '#1e889c',
          700: '#1f6e7f',
          800: '#215a69',
          900: '#204c59'
        },
        'gw-error': {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc8c8',
          300: '#ffa1a1',
          400: '#fe6b6b',
          500: '#f73c3c',
          600: '#e41e1e',
          700: '#b81414',
          800: '#9f1515',
          900: '#831919'
        },
        'gw-success': {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a8f2d0',
          300: '#6fe6b7',
          400: '#36d199',
          500: '#14cc8f',
          600: '#079468',
          700: '#057756',
          800: '#075e46',
          900: '#074d3b'
        },
        'gw-secondary': {
          50: '#fff9eb',
          100: '#feeec7',
          200: '#fddb8a',
          300: '#fcc34d',
          400: '#fbab24',
          500: '#f0850a',
          600: '#d96306',
          700: '#b44309',
          800: '#92340e',
          900: '#782b0f'
        }
      }
    }
  },
  plugins: []
}
