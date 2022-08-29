import { extendTheme, 
  theme as base, 
  withDefaultColorScheme, 
  withDefaultVariant } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'


//This object is called as a spread operator below
const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'brand.500' //To change the border color of the forms. You can also just do this in the actual <Input> where the form code is eg <Input focusBorderColor='pink.400'>
        } 
      }
    }
  },
  sizes: {
    md: {
      field: {
        borderRadius: 'none' // makes the border edges of the form right-angled and not slightly curved
      }
    }
  }
}

//This does the green outline for button and checkbox
const brandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.500'
  }
}


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
  },
  components: {
    Button: {
      variants: {
        primary: (props) => ({
          rounded: 'none',
          ...brandRing,
          //these background colors are for the green button
          backgroundColor: mode('brand.500', 'brand.200'),
          _hover: {
            backgroundColor: mode('brand.600', 'brand.300')(props),
          },
          _active: {
            backgroundColor: mode('brand.700', 'brand.400')(props)
          }
          
        })
      }
    },
    Input: { ...inputSelectStyles}, // from object at the top
    Select: { ...inputSelectStyles},
    Checkbox: { //this changes the outline color for tick box
      baseStyle: {
        control: {
          borderRadius: 'none',
          ...brandRing
        }
      }
    }
  }
},
//This allows you to make certain things match a style. So the checkbox will match the brand colours
withDefaultColorScheme({
  colorScheme: 'brand',
  components: ['Checkbox']
}),
withDefaultVariant({
  variant: 'filled',
  components: ['Input', 'Select']
})
) 

export default theme