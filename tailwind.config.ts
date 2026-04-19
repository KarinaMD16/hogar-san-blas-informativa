import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ecruYellow: '#DBBA6B',
        ecruYellow300: '#E1CC9A',
        amaranthPink: '#A7074D',
        night: '#0D0D11',
        basicWhite: '#F5F5F5',
        antiFlashWhite: '#ECECEC',
        amaranthPinkDark: '#8F1047',
      },
    },
  },
  plugins: [],
} satisfies Config
