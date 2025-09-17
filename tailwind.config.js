/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          500: '#6366f1',
          600: '#5b5cf6',
          700: '#4f46e5',
          900: '#312e81',
        },
        dark: {
          100: '#1f2937',
          200: '#111827',
          300: '#0f172a',
          400: '#0c1220',
        }
      },
    },
  },
  plugins: [],
}
