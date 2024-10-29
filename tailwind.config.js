/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xxs: "0px",
        xs: "360px",
        sm: "480px",
        msm: "540px",
        lsm: "640px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px",
        "3xl": "1536px",
      },
      boxShadow: {
        "3xl": "3px 0px 15px rgba(235, 249, 243, 0.8)",
        "4xl": "0 0 20px #1011301f"
      },
      colors: {
        main: "#62A92B",
        "main_body": "#e8e8e8",
        "main_body_dark": "#1f1f24",
        "yellow_mode": "#ffc107"
      }
    },
  },
  plugins: [],
}

