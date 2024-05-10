/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'bruno': ['bruno'],
      'raleway-400': ['raleway-400'],
      'raleway-500': ['raleway-500'],
      'raleway-600': ['raleway-600'],
      'raleway-700': ['raleway-700'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1380px',
      }
    },
    extend: {},
  },
  plugins: [],
}