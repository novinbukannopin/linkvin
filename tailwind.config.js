/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient-1":
          "linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248))",
        "hover-gradient":
          "linear-gradient(to right, rgb(147, 197, 253), rgb(187, 247, 208), rgb(253, 224, 71))",
      },
      colors: {
        primary: "#232946",
        secondary: "#fffffe",
        bg: "#b8c1ec",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
