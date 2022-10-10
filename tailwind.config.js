/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#eaa4e3",

          secondary: "#ffa7a3",

          accent: "#3abc1a",

          neutral: "#1D1721",

          "base-100": "#E3E5E8",

          info: "#96E6F8",

          success: "#25BB70",

          warning: "#EFB81F",

          error: "#E75C40",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
