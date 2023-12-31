/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  plugins: [],
  theme: {
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '992px',

      'xl': '1200px',

      '2xl': '1536px',
    }
  }
};

