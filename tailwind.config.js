/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ba2332",

          secondary: "#76e0db",

          accent: "#cf33ea",

          neutral: "#2C242D",

          "base-100": "#EEEFF1",

          info: "#9ECEF0",

          success: "#11976B",

          warning: "#FAA61E",

          error: "#EF553E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
