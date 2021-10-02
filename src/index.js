import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';
import { ChakraProvider } from "@chakra-ui/react"
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);