import * as React from 'react';
import {
  ChakraProvider,
  theme,
  Container,
  Flex,
} from '@chakra-ui/react';
// import theme from '../theme'
import Details from './Details';
import Cart from './Cart';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth='container.xl' padding={0}>
        <Flex h={{base: 'auto', md: '100vh'}} py={[0, 10, 20]} /* py means padding on y axis. Also these 3 values relate to the break points of screen size. So 0 is 0 pixels for y axis padding when the screen is up to to say 480px. 10 is the padding for a screen between 480 to something else, say 780px, and then 20 refers to 780 and above */ direction={{base: 'column-reverse', md: 'row'}} /* base is from 0px to 767 and md is anything above that. Base makes the boxes appear on top of each other*/>

         <Details />

         <Cart />

        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
