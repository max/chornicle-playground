/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: '12px',
      base: '13px',
      lg: '14px',
      xl: '16px'
    },
    extend: {
      boxShadow: {
        'inner-sm': 'inset 0 1px 0 rgba(0, 0, 0, 0.01)'
      }
    }
  },
  plugins: []
}
