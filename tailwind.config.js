/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        hxl: { max: "1350px" },
        xl: { max: "1279px" },
        lg: { max: "1024px" },
        lgb: { max: "846px" },
        mdb: { max: "768px" },
        smb: { max: "639px" },
        smb2: { max: "572px" },
        slg: { max: "505px" },
        xs: { max: "430px" },
        xxs: { raw: "(max-height: 740px)" },
      },
      animation: {
        tilt: "tilt 5s infinite linear",
        upDown: "upDown 2s infinite linear",
        customPing: "customPing 3s cubic-bezier(0,0, 0.2, 1) infinite",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        },
        upDown: {
          "0%, 100%": {
            transform: "translate(-50%, 0)",
          },
          "50%": {
            transform: "translate(-50%, -8px)",
          },
        },
        customPing: {
          "75%, 100%": {
            transform: "scale(1.25)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme("translate"), supportsNegativeValues: true }
      );
    }),
  ],
};
