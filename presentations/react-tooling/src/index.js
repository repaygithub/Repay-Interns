import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { StyleProvider, Flex } from '@repay/cactus-web'
import { Link } from './components'
import { Home, Form } from './containers'

const appRoot = document.createElement('div')
appRoot.className = 'app-root'
document.body.appendChild(appRoot)

const AppContainer = props => {
  const { children } = props

  return (
    <StyleProvider global>
      <Flex
        alignItems="center"
        justifyContent="space-evenly"
        height="80px"
        width="100%"
        backgroundColor="lightContrast"
      >
        <Link to="/" style={{ fontSize: '30px' }}>
          Home
        </Link>
        <Link to="/form" style={{ fontSize: '30px' }}>
          Example Form
        </Link>
      </Flex>
      {children}
    </StyleProvider>
  )
}

const App = () => {
  return (
    <Router>
      <AppContainer path="/">
        <Home path="/" />
        <Form path="/form" />
      </AppContainer>
    </Router>
  )
}

ReactDOM.render(<App />, appRoot)
