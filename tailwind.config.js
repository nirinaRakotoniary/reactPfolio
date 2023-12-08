/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'test': "url(/public/bg_test.png)",
        
      },
      fontFamily: {
        "manrope": ['Manrope', "sans-serif"]
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

