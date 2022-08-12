/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '433px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    fontFamily: {
      sans: ['Arial', 'Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        black: '#141421',
        red: '#A10B25',
      },
      fontSize: {
        xs: '0.625rem',
        sm: '0.75rem',
      },
    },
  },
  variants: {
    extends: {
      lineClamp: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
