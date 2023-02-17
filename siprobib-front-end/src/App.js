import React from 'react';
import './App.css';

import Header from './components/Header';
import AdminDashboard from './components/Pages/AdminDashboard';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Mission from './components/Pages/Mission';
import Result from './components/Pages/Result';
import Searcher from './components/Pages/Searcher';
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