import React from 'react';
import FooterImg from '../resources/img_footer.png'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

/* Se siguió la guía que se encuentra en https://emotion.sh/docs/css-prop para permitir que el motor de css Emotion, 
 * el cual usa Material UI, permitiera estilizar los componentes y etiquetas HTML. La línea de abajo es un macro que 
 * permite el buen funcionamiento de Emotion, por lo que es muy importante no eliminarlo.
 */
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

/* 
 * Las variables footer, appbar y logoFooter son variables en las que se describe los estilos de los elementos 
 * correspondientes, Dichas correspondencias se establecen con css={Nombre de la variable}.
 */
const footer = css({
    flex: 1,
    justifyContent: 'space-between',
});

const appBar = css({
    main: '#204c6f',
    contrastText: '#fff',
    top: 'auto',
    bottom: 0,
});

const logoFooter = css({
    margin: 12,
});

class Footer extends React.Component{
  render(){
      return(
        <AppBar position="fixed" css={appBar}>
          <Toolbar css={footer}>            
            <div>
              <ul>
                <li>Hola</li>
                <li>Jaja</li>
              </ul>
            </div>
            <div css={logoFooter}>
              <img alt="Logo" src={FooterImg}></img>
            </div>            
          </Toolbar>
        </AppBar>
      );  
  }
}

export default Footer;