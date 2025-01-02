/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        bgImg: "url('/bg-img.png')",
      },
    },
  },
  plugins: [],
}

