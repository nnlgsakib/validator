/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorprimary: "#079ce0",
      },
      maxWidth: {
        container: "1300px",
      },
    },
    plugins: [],
  },
};
