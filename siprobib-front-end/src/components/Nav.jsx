import React from 'react';
import * as constants from './../constants';

import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const nav = {
    flexGrow: 1
};

const appBar = {
    main: '#999999',
    contrastText: '#fff',
};

const title = {
    flexGrow: 1,
};

const buttonText = {
    color: 'white',
};

function Nav(){
  return(
    <Box sx={nav}>
      <AppBar sx={appBar} position='static'>
        <Toolbar>                    
          <Typography variant='h6' sx={title}>
            {constants.APP_NAME}
          </Typography>
          <NavLink to='/'>
            <Button sx={buttonText}>{constants.HOME}</Button>
          </NavLink>
          <NavLink to='/buscador'>
            <Button sx={buttonText}>{constants.SEARCHER}</Button>
          </NavLink>
          <NavLink to='/mision'>
            <Button sx={buttonText}>{constants.MISSION}</Button>
          </NavLink>
          <NavLink to='/contactenos'>
            <Button sx={buttonText}>{constants.ABOUT_US}</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
