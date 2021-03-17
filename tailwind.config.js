module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#EBF1F5",
          200: "#D9E3EA",
          300: "#C5D2DC",
          400: "#9BA9B4",
          500: "#707D86",
          600: "#55595F",
          700: "#33363A",
          800: "#25282C",
          900: "#151719",
        },
        purple: {
          100: "#5FAD56",
          200: "#5FAD56",
          300: "#5FAD56",
          400: "#5FAD56",
          500: "#5FAD56",
          600: "#5FAD56",
          700: "#5FAD56",
          800: "#5FAD56",
          900: "#5FAD56",
        },
      },
      spacing: {
        "9/16": "56.25%",
        "3/4": "75%",
        "1/1": "100%",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.25rem",
        "6xl": "4rem",
      },
      inset: {
        full: "100%",
      },
      minWidth: {
        10: "2.5rem",
      },
      scale: {
        98: ".98",
      },
      customForms: (theme) => ({
        default: {
          "input, textarea, multiselect, select, checkbox, radio": {
            backgroundColor: "transparent",
            borderColor: theme("colors.gray.700"),
            borderRadius: theme("borderRadius.sm"),
            "&:focus": {
              outline: undefined,
              boxShadow: undefined,
              borderColor: theme("colors.gray.500"),
            },
          },
          "input, textarea, multiselect, select": {
            backgroundColor: "transparent",
            fontSize: undefined,
            lineHeight: undefined,
            paddingTop: theme("spacing.3"),
            paddingRight: theme("spacing.4"),
            paddingBottom: theme("spacing.3"),
            paddingLeft: theme("spacing.4"),
          },
          "input, textarea": {
            "&::placeholder": {
              color: theme("colors.gray.500"),
            },
          },
          select: {
            paddingRight: theme("spacing.10"),
            iconColor: theme("colors.gray.500"),
          },
          "checkbox, radio": {
            color: theme("colors.purple.600"),
            backgroundColor: "transparent",
          },
        },
      }),
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
    translate: ["responsive", "hover", "focus", "group-hover"],
    boxShadow: ["responsive", "hover", "focus", "focus-within"],
    opacity: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [require("@tailwindcss/forms")],
};
