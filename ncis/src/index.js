import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
const theme =  extendTheme({
  components: {
    Tabs: {
      baseStyle: {
        tab: {
          _selected: {
            color:'#103A9C'
          },
        },
      },
    },
  },
  })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
