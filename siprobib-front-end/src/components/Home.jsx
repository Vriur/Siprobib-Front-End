import React, { Component } from 'react';
import Banner from '../resources/banner.jpg';

//import  Buscador  from './Buscador';

/* Se siguió la guía que se encuentra en https://emotion.sh/docs/css-prop para permitir que el motor de css Emotion, 
 * el cual usa Material UI, permitiera estilizar los componentes y etiquetas HTML. La línea de abajo es un macro que 
 * permite el buen funcionamiento de Emotion, por lo que es muy importante no eliminarlo.
 */
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

/* 
 * Las variables home, content, title y subtitle son variables en las que se describe los estilos de los elementos 
 * correspondientes, Dichas correspondencias se establecen con css={Nombre de la variable}.
 */
const home = css({
  position: 'relative',
  width: '100%',
  height: '80vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  "&::before": {
      content: `''`,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: "url(" + Banner + ")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(60%)',
  }
});

const content = css({
  position: 'relative',        
  color: 'white',
  textAlign: 'center',
  margin: '0.625rem',
});

const title = css({
  fontSize: '3rem',
  fontWeight: 600,
  marginBottom: 0,
});

const subtitle = css({
  fontSize: '2rem',
  fontWeight: 200,
  marginTop: '1rem',
});

class Home extends React.Component{
  render() {
    return (
      <div>
        <section css={home}>
          <div css={content}>
            <h1 css={title}>
              Sistema de Producciones Bibliográficas
            </h1>
            <h2 css={subtitle}>
              Falta texto para colocar acá
            </h2>                   
          </div>
        </section>
      </div>
    )
  }
}

export default Home;