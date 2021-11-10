import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';



import reportWebVitals from './reportWebVitals';
import { configureStore } from './store/configureStore';
import Routes from './routes/Routes';
import Layout from './components/MainLayout/MainLayout';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
          <Layout>
            <Routes/>
          </Layout>
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
