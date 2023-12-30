import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";

const theme = extendTheme(
  {
    color: {
      brand: {
        50: "green.100",
        100: "#e1fbb2",
        200: "#cdf781",
        300: "#b8ee56",
        400: "#a2e032",
        500: "#8ac919",
        600: "#71ab09",
        700: "#578602",
        800: "#3c5e00",
        900: "#203300",
      },
    },

    fonts: {
      heading: `Montserrat, ${base.fonts.heading}`,
      body: "Inter",
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
  }),

  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select", "Textarea"],
  })
);

export default theme;