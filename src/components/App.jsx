import * as React from 'react';

import {
  ChakraProvider,
  theme,
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth='container.xl' padding={0} /* p means padding*/>
        <Flex h='100vh' py={20} /* py means padding on y axis */>

        {/* Details component */}
        <VStack 
          w="full"
          h='full'
          p={10}
          spacing={10}
          alignItems='flex-start'
        >
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl">Your details</Heading>
            <Text>If you already have an account, click here to log in</Text>
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder='John'></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder='Doe'></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input placeholder='11 Generic Street'></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input placeholder='Wellington'></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Chile">Chile</option>
                  <option value="Germany">Germany</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <Checkbox defaultChecked>Ship to billing</Checkbox>
            </GridItem>
            <GridItem colSpan={2}>
              <Button size='lg' w='full'>Place Order</Button>
            </GridItem>
          </SimpleGrid>
          
        </VStack>

        {/* Cart component */}
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
