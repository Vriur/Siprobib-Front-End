import React from 'react';
import './App.css';
/*
import Inicio from './components/Inicio';
import Layout from './components/Layout';
import NewSearcher from "./components/NewSearcher";
import TablaProducciones from "./components/TablaProducciones";*/

//REDUX
import {Route, Link} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';/*

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App() {
  return (
      <div className="App">
          {/*<Layout>
              <Route exact path='/' component={Inicio}/>
              <Route path='/buscador' component={NewSearcher}/>
              <Route path='/tabla' component={TablaProducciones}/>*/}
          {/*</Layout>*/}
          <label>HOLA</label>
          <img src={logo} className="App-logo" alt="logo" />
      </div>
  );
}

export default App;