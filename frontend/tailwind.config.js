/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
        "mytheme", // Mueve tu tema personalizado al principio de la lista
        "light",
        "dark",
        "cupcake",
        "acid",
        {
          mytheme: {
            "primary": "#140151",
            "secondary": "#706d6f",
            "accent": "#0094b2",
            "neutral": "#24224f",
            "base-100": "#fafdf6",
            "info": "#008fff",
            "success": "#00a982",
            "warning": "#ffbe00",
            "error": "#ff5175",
          },
        },
    ],
  },
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
      require("daisyui"),
  ],
}

