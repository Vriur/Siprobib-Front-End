import React from 'react';
import * as constants from './../constants';

import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const style = {
  nav:{
    flexGrow: 1
  },

  appBar:{
    main: '#999999',
    contrastText: '#fff',
  },

  title:{
    flexGrow: 1,
  },

  buttonText:{
    color: 'white',
  },

  link:{
    textDecoration: 'none'
  }
}

function Nav(){
  return(
    <Box sx={style.nav}>
      <AppBar sx={style.appBar} position='static'>
        <Toolbar>                    
          <Typography variant='h6' sx={style.title}>
            {constants.APP_NAME}
          </Typography>
          <NavLink to='/' style={style.link}>
            <Button sx={style.buttonText}>{constants.HOME}</Button>
          </NavLink>
          <NavLink to='/buscador' style={style.link}>
            <Button sx={style.buttonText}>{constants.SEARCHER}</Button>
          </NavLink>
          <NavLink to='/mision' style={style.link}>
            <Button sx={style.buttonText}>{constants.MISSION}</Button>
          </NavLink>
          <NavLink to='/contactenos' style={style.link}>
            <Button sx={style.buttonText}>{constants.ABOUT_US}</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
