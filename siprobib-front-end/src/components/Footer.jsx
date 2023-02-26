import React from 'react';
import FooterImg from '../resources/img_footer.png';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

/* 
 * Las variables footer, appbar y logoFooter son variables en las que se describe los estilos de los elementos 
 * correspondientes, Dichas correspondencias se establecen con css={Nombre de la variable}.
 */
const appBar = {
    main: '#204c6f',
    contrastText: '#fff',
    top: 'auto',
    bottom: 0,
    height: '50vh'
};

const footer = {
  flex: 1,
  justifyContent: 'space-between'
};

const logoFooter = {
    margin: 12,
};

function Footer(){
  return(
    <AppBar position='static' sx={appBar}>
      <Toolbar sx={footer}>            
        <Box sx={logoFooter}>
          <img alt='Logo' src={FooterImg}></img>
        </Box>            
      </Toolbar>
    </AppBar>
  );  
}

export default Footer;