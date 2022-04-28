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
import './App.css';

function App() {
  return (
      <div className="App">
          {/*<Layout>
              <Route exact path='/' component={Inicio}/>
              <Route path='/buscador' component={NewSearcher}/>
              <Route path='/tabla' component={TablaProducciones}/>*/}
          {/*</Layout>*/}
          <label>HOLA</label>
      </div>
  );
}

export default App;