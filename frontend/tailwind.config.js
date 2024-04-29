/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customfont: ['"SF Pro Display"', "sans-serif"],
        SFPro: ['"SF Pro Text Regular"'],
      },
     
    },
  },
  plugins: [],
};
