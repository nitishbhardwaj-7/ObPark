/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 ADD THIS
  ],
  theme: {
    extend: {
      fontFamily: {
        mgbold: ["Mgbold", "sans-serif"],
      },
      colors: {
        primary: "#16a34a", // green
        accent: "#22c55e",  // lighter green
      },
    },
  },
  plugins: [],
};