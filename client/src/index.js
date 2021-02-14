import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react'

import App from './App'
import { Stars } from './components'
import theme from './styles/theme'

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider resetCSS theme={theme}>
      <Stars />
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
)
