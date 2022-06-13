import React from 'react';
import './App.css';

import Contact from './components/Contact';
import Home from './components/Home';
import Mission from './components/Mission';
import Result from './components/Result';
import Searcher from './components/Searcher';

//REDUX
import {Link, Route, Router, Routes} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mision' element={<Mission/>}/>
          <Route path='/contactenos' element={<Contact/>}/>
          <Route path='/buscador' element={<Searcher/>}/>
          <Route path='/resultado/:id' element={<Result/>}/>
        </Routes>
      </div>
  );
}

export default App;