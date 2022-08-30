import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
  Import Necesario para poder utilizar React Router, el cual sirve como un Router en toda la aplicación, 
  permitiendo enlazar cada una de las vistas de la misma. Para más información consultar la guía oficial
  de instalación: https://reactrouter.com/docs/en/v6/getting-started/installation#basic-installation.
*/
import { BrowserRouter } from "react-router-dom";

/* 
  Imports necesarios para utilizar Redux a lo largo de la aplicación. El Provider permite utilizar Redux
  a lo largo de toda la aplicación. Para más información consultar la guía oficial de instalación:
  https://react-redux.js.org/tutorials/quick-start.
*/
import store from './redux/store';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>    
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
