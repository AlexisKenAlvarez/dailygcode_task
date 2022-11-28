import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import App from './App';
import dataInput from './features/inputData';

export const store = configureStore({
  reducer: {
    listData: dataInput
  },
  
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
    thunk: true
  }),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


