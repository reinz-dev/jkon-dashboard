import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.300", "#17223F")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "none",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "grassBlue")(props),
    }),
  },
  Button: {
    variants: {
      BioDarkButton: {
        bg: "whiteAlpha.50",
        color: "whiteAlpha.800",
        fontSize: "sm",
        _hover: {
          bg: "whiteAlpha.300",
          color: "whiteAlpha.800",
        },
      },
      BioLightButton: {
        bg: "gray.700",
        color: "whiteAlpha.900",
        _hover: {
          bg: "gray.600",
          color: "whiteAlpha.900",
        },
      },
    },
  },
  Box: {
    variants: {
      separatorLine: {
        bg: "whiteAlpha.500",
      },
    },
  },
};

const fonts = {
  heading: "'Futura', sans-serif",
};

const colors = {
  grassTeal: "#0c3c63",
  grassBlueDark: "#90cdf4",
  grassBlueLight: "#3182ce",
  grayDark: "gray.500",
  grayLight: "whiteAlpha.500",
  bgDark: "#00000040",
  bgLight: "#ffffff40",
  separatorGray: "gray.700",
  separatorWhite: "whiteAlpha.800",
  textDark: "whiteAlpha.800",
  textLight: "gray.800",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
