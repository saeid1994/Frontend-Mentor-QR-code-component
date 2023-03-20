module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
       
        Light_gray: " hsl(212, 45%, 89%)",
        Grayish_blue: "hsl(220, 15%, 55%)",
        Dark_blue: "hsl(218, 44%, 22%)",
      },
      fontFamily: {
        sans: ["Outfit"],
      },
    },
  },
  plugins: [],
};
