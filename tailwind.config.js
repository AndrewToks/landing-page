/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        bgImgHero:"url('/bg-img.png')",
        bgImg:"linear-gradient(to bottom, rgba(35, 38, 47, 0.6), rgba(35, 38, 47, 0.9)), url('/bg-img.png')"
      },
    },
  },
  plugins: [],
}

