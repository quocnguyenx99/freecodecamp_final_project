/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {

      },
      width: {
        500: '500px'
      },
      boxShadow: {
        btn: '0px 13px 0px 0px',
        active: '0px 6px 0px 0px'
      },
      fontFamily: {
        'PS2': "'Press Start 2P', cursive"
      }
    },
  },
  plugins: [],
}

