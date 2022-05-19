let plugin = require('tailwindcss/plugin')

module.exports = {
    content: ["./app/ui/**/*.{js,jsx,ts,tsx}", './client/*.html'],
  darkMode: 'media',
  theme: {
  extend: {
    animation: {
      blob: "blob 7s infinite",
    },
    keyframes: {
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "33%": {
          transform: "translate(30px, -50px) scale(1.1)",
        },
        "66%": {
          transform: "translate(-20px, 20px) scale(0.9)",
        },
        "100%": {
          transform: "tranlate(0px, 0px) scale(1)",
        },
      },
    },
    opacity: {
      '67': '.67',
      '80': '.80',
    },
    colors: {
      brand: {
        light: "#3fbaeb",
        DEFAULT: "#0fa9e5",
        dark: "#0c87b8",
      },
    },
    fontFamily: {
      headline: "Poppins, sans-serif",
    }
  },
},
variants: {
  extend: {
   backgroundColor: ["active"],
  },
},
plugins: [
  plugin(function ({ addVariant }) {
    // Add a `third` variant, ie. `third:pb-0`
    addVariant('third', '&:nth-child(3)')
  }),
  require("@tailwindcss/forms")({
  
  }),
],
}