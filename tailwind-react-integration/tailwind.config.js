/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Removes unused styles in production
  darkMode: 'media', // Enables dark mode based on user's system settings
  theme: {
    extend: {},
  },
  variants: {
    extend: {}, // Add custom variant configurations if needed
  },
  plugins: [],
};
