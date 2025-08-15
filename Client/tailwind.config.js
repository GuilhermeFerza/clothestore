/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ajuste para o seu projeto
  ],
  theme: {
    extend: {
      colors: {
        muted: "#6b7280", // cor semelhante ao text-gray-500
      },
    },
  },
  plugins: [],
};
