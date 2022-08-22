import React from 'react'
import { Container, Flex } from '@chakra-ui/react'
import Details from './Details'
import Cart from './Cart'


function Page() {
  <Container maxWidth='container.xl' padding={0} /* p means padding*/>
    <Flex h='100vh' py={20} /* py means padding on y axis */>
      <Cart/>
      <Details/>
    </Flex>
  </Container>
}

export default Page