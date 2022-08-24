import * as React from 'react';

import {
  ChakraProvider,
  theme,
  Container,
  Flex,
  VStack,
  HStack,
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
  useColorMode,
  useColorModeValue,
  Image,
  AspectRatio,
  Stack,
  Divider,
} from '@chakra-ui/react';

function App() {

  const { toggleColorMode } = useColorMode() //On cart component
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');

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
          >
          <VStack>
            <Heading size='2xl'>Your Cart</Heading>
            <Text>If the price is too hard on your eyes {' '}
              <Button onClick={toggleColorMode} variant="link" colorScheme="black">
              try changing the theme.
              </Button>
            </Text>
          </VStack>
          <HStack spacing={6} alignItems="center" w="full">
            <AspectRatio ratio={1} w={24}>
              <Image src="https://www.thewarehouse.co.nz/dw/image/v2/BDMG_PRD/on/demandware.static/-/Sites-twl-master-catalog/default/dw40ba9372/images/hi-res/6A/27/R2433170_30.jpg?sw=765&sh=765" alt="Skateboard" />
            </AspectRatio>
            <Stack
              spacing={0}
              w="full"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <VStack w="full" spacing={0} alignItems="flex-start">
                <Heading size="md">Penny board</Heading>
                <Text color={secondaryTextColor}>PNYCOMP27541</Text>
              </VStack>
              <Heading size="sm" textAlign="end">
                $119.00
              </Heading>
            </Stack>
          </HStack>
          <VStack spacing={4} alignItems="stretch" w="full">
            <HStack justifyContent="space-between">
              <Text color={secondaryTextColor}>Subtotal</Text>
              <Heading size="sm">$119.00</Heading>
            </HStack>
            <HStack justifyContent="space-between">
              <Text color={secondaryTextColor}>Shipping</Text>
              <Heading size="sm">$19.99</Heading>
            </HStack>
            <HStack justifyContent="space-between">
              <Text color={secondaryTextColor}>Taxes (estimated)</Text>
              <Heading size="sm">$23.80</Heading>
            </HStack>
          </VStack>
          <Divider /> {/* This creates the line to separate */}
          <HStack justifyContent="space-between" w="full">
            <Text color={secondaryTextColor}>Total</Text>
            <Heading size="lg">$162.79</Heading>
          </HStack>
        </VStack>

        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
