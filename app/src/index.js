import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';

import './index.css';

import reportWebVitals from './reportWebVitals';
import { configureStore } from './store/configureStore';
import Routes from './routes/Routes';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
          <Routes/>
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
