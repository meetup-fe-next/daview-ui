const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      letterSpacing: {
        tighter: '-0.5px',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        '3xl': '48px', // for Headline1
        '2xl': '34px', // for Headline2
        xl: '24px', // for Headline3
        lg: '20px', // for Headline4
        base: '16px', // for Headline5
      },
      lineHeight: {
        '150': '150%',
      },
      textColor: {
        'high-emphasis': 'rgba(0, 0, 0, 0.87)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          100: '#F9DFD9',
          200: '#F4BFB4',
          300: '#EE9F8E',
          400: '#E97F69',
          500: '#E35F43',
          600: '#C84E34',
          700: '#97331E',
          800: '#772514',
          900: '#4F1307',
        },
        secondary: {
          100: '#FAF9F6',
          200: '#F6F3ED',
          300: '#E8E0D2',
          400: '#DCD2C2',
          500: '#BCB19E',
          600: '#9B8D76',
          700: '#796C56',
          800: '#564C3A',
          900: '#383124',
        },
        blue: {
          100: '#DEE2F6',
          200: '#BCC5ED',
          300: '#9BA8E3',
          400: '#798BDA',
          500: '#586ED1',
          600: '#4B5FB9',
          700: '#374A9E',
          800: '#25357C',
          900: '#151F4E',
        },
        grey: {
          50: '#F5EFF7',
          100: '#E6E0E9',
          200: '#CAC5CD',
          300: '#AEA9B1',
          400: '#938F96',
          500: '#79767D',
          600: '#605D64',
          700: '#48464C',
          800: '#48464C',
          900: '#1D1B20',
        },
        white: '#ffffff',
        black: '#000000',
      },
      opacity: {
        '87': '.87',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.tracking-tighter': {
          'letter-spacing': '-0.5px',
        },
      });
    }),
  ],
};
