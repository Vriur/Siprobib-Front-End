import React from 'react';
import Nav from './Nav';
import UCRLogoHeader from '../resources/logo_ucr.png';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const header = {
  height: '18%',
  width: '100%'
}

/*
 * Componente encargado de cumplir la función de header, en este se integra el componente Nav, el cual efectua el
 * trabajo de la barra de navegación, además es atraves de este componente que se muestra el logo de la UCR.
 */    
function Header(){
  return(
    <Box sx={header}>
      <AppBar position='static'>
        <Toolbar>
          <a href={'https://www.ucr.ac.cr/'}> <img alt='Logo' src={UCRLogoHeader}></img> </a>
        </Toolbar>
      </AppBar>
      <Nav/>
    </Box>
  );
}

export default Header;