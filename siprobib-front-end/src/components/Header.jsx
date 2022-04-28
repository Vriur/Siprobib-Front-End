import { render } from '@testing-library/react';
import React from 'react';
import Nav from './Nav';

/*
 * Componente encargado de cumplir la función de header, en este se integra el componente Nav, el cual efectua el
 * trabajo de la barra de navegación.
 */    
class Header extends React.Component{
    render(){
        return (
            <header>
              <Nav/>
            </header>
        );
    }
}

export default Header;