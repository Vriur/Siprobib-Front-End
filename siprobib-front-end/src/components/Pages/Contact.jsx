import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TwitterLogo from '../../resources/twitter.png';
import InstagramLogo from '../../resources/instagram.png';
import GmailLogo from '../../resources/gmail.png';

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
const logo = css({
    width: '50px', 
    height: '50px',
    margin: '5px',
});

// Estilo correspondiente para el componente carta que cuenta con la información de misión.
const card = css({
    marginTop: '50px',
    padding: '50px'
});

class Contact extends React.Component{
    render(){
        return(
            <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={2} /> {/* Etiqueda utilizada para centrar la tarjeta. */}
            <Grid item xs={8}>
                <Card css={card}>
                    <CardContent>
                        <h1>Contáctenos</h1>
                        <p>  
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, sed. 
                            Quos iure voluptatibus earum consequuntur voluptate quisquam veritatis possimus 
                            illum aliquam ex, sequi temporibus explicabo quidem, quo maxime amet! Dolorum. 
                        </p>
                    </CardContent>
                    <CardActions class="justify-center">
                        <a className="a1" href={"https://twitter.com/"}> <img css={logo} className='img' src={TwitterLogo} alt="Twitter" ></img> </a>
                        <a className="a2" href={"https://www.instagram.com/"}> <img css={logo} className='img1' src={InstagramLogo} alt="Instagram" ></img> </a>
                        <a className="a3" href={"https://www.google.co.cr/"}> <img css={logo} className='img2' src={GmailLogo} alt="Gmail" ></img> </a>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={2} /> {/* Etiqueda utilizada para centrar la tarjeta. */}
        </Grid>
        );
    }
}

export default Contact;