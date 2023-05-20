/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.html"],
  theme: {
    safelist:['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
    extend: {},
    screens: {
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'md': '600px',
      // => @media (min-width: 768px) { ... }

      'lg': '900px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [require("tw-elements/dist/plugin.js")],
  darkMode:'class'
}