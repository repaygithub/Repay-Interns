import React from 'react'
import { Flex, Text } from '@repay/cactus-web'

const Home = () => {
  return (
    <Flex justifyContent="center" width="100%">
      <Flex width="90%" backgroundColor="base" alignItems="center" paddingLeft="10px">
        <Text color="white" textStyle="h2">
          Home
        </Text>
      </Flex>

      <Text>
        Welcome to my demo React application!
      </Text>
    </Flex>
  )
}

export default Home
