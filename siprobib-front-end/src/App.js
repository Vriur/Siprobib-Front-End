import React from 'react';
import './App.css';

import Home from './components/Home';
/*import Layout from './components/Layout';
import NewSearcher from "./components/NewSearcher";
import TablaProducciones from "./components/TablaProducciones";*/

//REDUX
import {Link, Route, Router, Routes} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/*<Route path='/buscador' component={NewSearcher}/>
          <Route path='/tabla' component={TablaProducciones}/>*/}
        </Routes>
      </div>
  );
}

export default App;