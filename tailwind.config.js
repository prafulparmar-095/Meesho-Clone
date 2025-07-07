/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shopNowBg: '#5B3C2B',
        shopNowText: '#F7D691',
        shopNowBorder: '#F7D691',
        bannerBrown: '#5C3A2E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // ADD THESE EXTENSIONS
      animation: {
        'scroll-rtl': 'scrollRightToLeft 30s linear infinite', // Match the utility name
      },
      keyframes: {
        scrollRightToLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
      // END ADDITIONS
    },
  },
  plugins: [],
}