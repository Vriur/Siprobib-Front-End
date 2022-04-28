import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* 
  Imports necesarios para utilizar Redux a lo largo de la aplicación. El Provider permite utilizar Redux
  a lo largo de toda la aplicación. Para más información consultar la guía oficial de instalación:
  https://react-redux.js.org/tutorials/quick-start.
*/
import store from './redux/store';
import { Provider } from 'react-redux';

/*
  Import Necesario para poder utilizar React Router, el cual sirve como un Router en toda la aplicación, 
  permitiendo enlazar cada una de las vistas de la misma. Para más información consultar la guía oficial
  de instalación: https://reactrouter.com/docs/en/v6/getting-started/installation#basic-installation.
*/
import { BrowserRouter } from "react-router-dom";

import Layout from './components/Layout';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
