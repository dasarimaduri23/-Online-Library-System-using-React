/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ensures Tailwind scans your JSX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};