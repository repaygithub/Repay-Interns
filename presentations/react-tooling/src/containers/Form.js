import React from 'react'
import { Flex, Text } from '@repay/cactus-web'
import { Form } from '../components'

const FormContainer = props => {
  return (
    <Flex justifyContent="center" width="100%">
      <Flex width="90%" backgroundColor="base" alignItems="center" paddingLeft="10px">
        <Text color="white" textStyle="h2">
          My Form
        </Text>
      </Flex>

      <Form />
    </Flex>
  )
}

export default FormContainer
