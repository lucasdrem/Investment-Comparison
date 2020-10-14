import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import myStore from './store';

import App from './App';

import AppProvider from './hooks';

ReactDOM.render(
  <Provider store={myStore}>
    <AppProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppProvider>
  </Provider>,
  document.getElementById('root'),
);
