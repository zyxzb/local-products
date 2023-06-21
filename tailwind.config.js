/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        khand: ['Khand', 'sans-serif'],
      },
      colors: {
        whiteColor: '#edede9',
        darkColor: '#503047',
        lightGreen: '#adc698',
        darkGreen: '#3a5a40',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        move: 'move 3s infinite alternate',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [],
};
