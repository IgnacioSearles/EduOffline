import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import fullReducer from './redux/datos';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(fullReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

