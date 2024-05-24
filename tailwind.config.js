/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./server/index.html",
    "./server/**/*.{ts,tsx}",
    "./src_js/**/*.{js,jsx}",
    "./src_ts/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
