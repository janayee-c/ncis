import React from 'react'
import App from './App.jsx'
import './index.css'
import './fonts/Beckman/Beckman.woff2';
import './fonts/Montserrat/montserrat.woff2'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
