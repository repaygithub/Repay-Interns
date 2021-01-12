import React, { useState } from 'react'
import { Button, TextInputField, TextAreaField, ToggleField, CheckBoxField, Flex } from '@repay/cactus-web'

const getInitialState = () => (
  {
    firstName: '',
    lastName: '',
    foods: '',
    toggle1: false,
    toggle2: false,
    checkbox: false,
  }
)

const Form = props => {
  const [state, setState] = useState(getInitialState())

  const handleChange = ({ target }) => {
    setState(state => ({ ...state, [target.name]: target.value }))
  }

  const handleChecked = ({ target }) => {
    setState(state => ({ ...state, [target.name]: target.checked }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(state)
    // send state to api
  }

  return (
    <Flex borderColor="base" borderWidth="2px" borderStyle="solid" width="90%" justifyContent="center" padding="24px">
      <form onSubmit={handleSubmit} style={{ width: '70%' }}>
        <TextInputField
          name="firstName"
          label="First Name"
          tooltip="Enter your first name"
          onChange={handleChange}
        />
        <TextInputField
          name="lastName"
          label="Last Name"
          tooltip="Enter your last name"
          mt={5}
          onChange={handleChange}
        />
        <TextAreaField
          name="foods"
          label="Favorite Foods"
          tooltip="Enter a list of your favorite foods"
          mt={5}
          onChange={handleChange}
        />
        <ToggleField
          name="toggle1"
          label="Toggle 1"
          mt={5}
          value={state.toggle1}
          onChange={handleChecked}
        />
        <ToggleField
          name="toggle2"
          label="Toggle 2"
          mt={5}
          value={state.toggle2}
          onChange={handleChecked}
        />
        <CheckBoxField
          name="checkbox"
          label="Checkbox"
          mt={5}
          onChange={handleChecked}
        />
        <Flex justifyContent="center">
          <Button
            type="submit"
            variant="action"
            mt={5}
          >
            Submit
          </Button>
        </Flex>
      </form>
    </Flex>
  )
}

export default Form
