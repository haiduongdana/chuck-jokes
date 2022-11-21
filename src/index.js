import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  applyMiddleware(...middleware)
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider> 
    <React.StrictMode store={store}>
      <App />
    </React.StrictMode>
  </Provider>
);
