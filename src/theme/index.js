import { extendTheme, theme as base } from "@chakra-ui/react";

//This is how to change/add things to the base theme
const theme = extendTheme({
  colors: {
    brand: {
      50: '#f5fee5',
      100: '#e1fbb2',
      200: '#cdf781',
      300: '#b8ee56',
      400: '#a2e032',
      500: '#8ac919',
      600: '#71ab09',
      700: '#578602',
      800: '#3c5e00',
    }
  },
  fonts: {
    // the first option is the font you want, the second means it will default to the main chakra them if the first one is unavailable 
    heading: `Montserrat, ${base.fonts?.heading}`, 
    body: `Inter, ${base.fonts?.body}`
  }
}) 

export default theme