import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/inter"

const config: ThemeConfig = {
    initialColorMode: 'dark',
};

const theme = extendTheme({
  config,
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
});

export default theme;