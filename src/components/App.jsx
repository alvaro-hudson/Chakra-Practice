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
        <Flex h='100vh' py={20} /* py means padding on y axis */>

         <Details />

         <Cart />

        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
