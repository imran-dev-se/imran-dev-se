/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#0284c7',
          neon: '#0ea5e9',
          glow: '#38bdf8',
          dark: '#0f172a',
          card: '#ffffff',
          cardBorder: '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'light-glow': '0 4px 20px -2px rgba(2, 132, 199, 0.15)',
        'card-soft': '0 10px 30px -10px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.03)',
        'inner-subtle': 'inset 0 1px 0 rgba(255, 255, 255, 0.9)',
      },
    },
  },
  plugins: [],
};
