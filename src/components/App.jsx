import * as React from 'react';

import {
  ChakraProvider,
  theme,
  Container,
  Flex,
  VStack,
  Heading
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth='container.xl' padding={0} /* p means padding*/>
        <Flex h='100vh' py={20} /* py means padding on y axis */>
        <VStack 
          w="full"
          h='full'
          p={10}
          spacing={10}
          alignItems='flex-start'
        >
          <Heading size="2xl">Your details</Heading>
        </VStack>
        <VStack 
          w="full"
          h='full'
          p={10}
          spacing={10}
          alignItems='flex-start'
          bg='gray.50'
        ></VStack>
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
