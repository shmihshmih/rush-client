import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth from "./parts/AuthPart/Auth";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./station/reducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
      <Auth/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
