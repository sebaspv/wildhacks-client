import React from 'react';
import ReactDOM from 'react-dom';
import Store from './components/Redux/store';
import { Provider } from 'react-redux'
import './index.css';

import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';
import { ChakraProvider } from "@chakra-ui/react"
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <ChakraProvider>
      <Provider store={Store}>
        <App />
      </Provider>
    </ChakraProvider>
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);