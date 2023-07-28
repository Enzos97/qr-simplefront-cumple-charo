/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { 
        transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

// screens: {
//   sm: '480px',
//   md: '768px',
//   lg: '976px',
//   mlg: '1130px',
//   xl: '1440px',
//   '2xl': '1660px',
// },

// fontFamily: {
//   sans: ['Poppins', 'sans-serif !important'],
// },
// extend: {
//   colors: {
//       pink: {
//           600: '#F72585',
//       },
//       slate: {
//           700: '#3F5188',
//           800: '#0A163D',
//       },
//   },
// },