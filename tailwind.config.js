module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          base: "hsl(203, 89%, 53%)",
          dark: "hsl(203, 89%, 46%)",
          light: "hsl(203, 89%, 96%)"
        },
        gray: {
          dark: "#657786",
          light: "#AAB8C2",
          extralight: "#E1E8ED",
          lightest: "#F5F8FA",
          profile: "#0f14191a"
        },
        black: "#14171A",
        faded: "rgb(83, 100, 113)"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}