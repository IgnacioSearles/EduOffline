import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import pReducer from './redux/datos';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './fonts/Montserrat-Regular.ttf';
import './fonts.css';

const store = createStore(pReducer);
const pStore = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={pStore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

