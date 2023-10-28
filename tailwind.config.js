/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          "light-cyan": "#cee3e9",
          "neon-green": "#52ffa8",
          "grayish-blue": "#4e5d73",
          "dark-grayish-blue": "#323a49",
          "dark-blue": "#1f2632",
        },
      },
      boxShadow: {
        "3xl": "0 0 28px 0 rgb(0 0 0 / 0.5)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
  },
  plugins: [],
};
