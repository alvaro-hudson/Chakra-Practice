import React from 'react'
import {
  VStack,
  HStack,
  Heading,
  Text,
  Image,
  AspectRatio,
  Stack,
  useColorModeValue,
  Divider
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

function Cart() {

  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');
 
  return (
    <VStack 
      w="full"
      h='full'
      p={10}
      spacing={10}
      alignItems='flex-start'
      bg={bgColor}
      >
      <VStack>
        <Heading size='2xl'>Your Cart</Heading>
        <Text>
          If the price is too hard on your eyes try changing the theme <ColorModeSwitcher />
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
  )
}

export default Cart