import React from "react";
import ReactDOM from "react-dom";
import App from "./app.tsx";
import { Provider } from 'react-redux';
import store from '../store/store.js';
ReactDOM.render(
  <Provider store={store} children={undefined}>
    <App />
  </Provider>,
  document.getElementById("app")
);