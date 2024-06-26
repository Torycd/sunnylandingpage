/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        New: ["Barlow"],
        New2: ['Fraunces']
      },
    },
  },
  plugins: [],
};
