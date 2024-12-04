/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(122.33deg, #53E0FF 30.62%, #1E94E9 100%)',
      },
    },
  },
  plugins: [],
}