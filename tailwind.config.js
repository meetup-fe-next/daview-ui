/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
          100: '#4F1307',
          200: '#772514',
          300: '#97331E',
          400: '#C84E34',
          500: '#E35F43',
          600: '#E97F69',
          700: '#EE9F8E',
          800: '#F4BFB4',
          900: '#F9DFD9',
        },
        secondary: {
          100: '#383124',
          200: '#564C3A',
          300: '#796C56',
          400: '#9B8D76',
          500: '#BCB19E',
          600: '#DCD2C2',
          700: '#E8E0D2',
          800: '#F6F3ED',
          900: '#FAF9F6',
        },
        blue: {
          100: '#151F4E',
          200: '#25357C',
          300: '#374A9E',
          400: '#4B5FB9',
          500: '#586ED1',
          600: '#798BDA',
          700: '#9BA8E3',
          800: '#BCC5ED',
          900: '#DEE2F6',
        },
        grey: {
          100: '#1D1B20',
          200: '#48464C',
          300: '#48464C',
          400: '#605D64',
          500: '#79767D',
          600: '#938F96',
          700: '#AEA9B1',
          800: '#CAC5CD',
          900: '#E6E0E9',
          950: '#F5EFF7',
        },
        white: '#ffffff',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
