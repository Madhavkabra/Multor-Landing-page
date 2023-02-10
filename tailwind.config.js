/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "multor-cover": 'url("/homeImage.jpeg")',
      },
    },
    fontFamily: {
      "work-sans": ['"Work Sans"', "sans-serif"],
      muli: ["Mulish", "sans-serif"],
    },
  },
  plugins: [],
};
