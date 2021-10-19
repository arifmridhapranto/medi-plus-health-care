module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('https://i.ibb.co/gWwgwq5/slider-bg-1.jpg')",
        "header-bg": "url('https://i.ibb.co/NrQpTxQ/22.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        btnColor: "#e12454",
        btnHover: "#223a66",
      }),
      textColor: (theme) => theme("colors"),
      textColor: {
        text_color: "#e12454",
        textColor2: "#223a66",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
