import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

/* Se siguió la guía que se encuentra en https://emotion.sh/docs/css-prop para permitir que el motor de css Emotion, 
 * el cual usa Material UI, permitiera estilizar los componentes y etiquetas HTML. La línea de abajo es un macro que 
 * permite el buen funcionamiento de Emotion, por lo que es muy importante no eliminarlo.
 */
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

/* 
 * Las variables nav, appBar, title y buttonText son variables en las que se describe los estilos de los elementos 
 * correspondientes, Dichas correspondencias se establecen con css={Nombre de la variable}.
 */
const nav = css({
    flexGrow: 1
});

const appBar = css({
    main: '#999999',
    contrastText: '#fff',
});

const title = css({
    flexGrow: 1,
});

const buttonText = css({
    color: 'white',
});

class Nav extends React.Component{
    render(){
        return(
          <nav css={nav}>
            <AppBar css={appBar} position="static">
              <Toolbar>                    
                <Typography variant="h6" css={title}>
                  SIPROBIB
                </Typography>
                <NavLink to='/'>
                  <Button css={buttonText}>Inicio</Button>
                </NavLink>
                <NavLink to='/buscador'>
                  <Button css={buttonText}>Buscador</Button>
                </NavLink>
                <NavLink to='/mision'>
                  <Button css={buttonText}>Misión</Button>
                </NavLink>
                <NavLink to='/contactenos'>
                  <Button css={buttonText}>Contáctenos</Button>
                </NavLink>
              </Toolbar>
            </AppBar>
          </nav>
        );
    }
}

export default Nav;
