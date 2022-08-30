import React from 'react';
import './App.css';

import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Mission from './components/Mission';
import Result from './components/Result';
import Searcher from './components/Searcher';
import AdminDashboard from './components/AdminDashboard';
import Logo from './resources/logo-inie.png';

//React-Router-Dom
import {Route, Routes, useLocation} from 'react-router-dom';

function App() {
  // Utiliza el hook useLocation de React-Router-Dom para saber la ubicación actual.
  let location = useLocation().pathname;

  return (
      <div className="App">
          { /** Con esta condición se impide que la barra de navegación aparezca en las vistas login o admin. **/
            location === '/login' || location === '/admin' ? null : <Header/> 
          }
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin/' element={<AdminDashboard/>}/>
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