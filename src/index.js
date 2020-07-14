import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth from "./parts/Auth";
import {createStore} from "redux";
import {rootReducer} from "./station/reducer";
import {Provider} from "react-redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth />
    </Provider>

  </React.StrictMode>,
  document.getElementById('auth-modal')
);
