import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

/* Se siguió la guía que se encuentra en https://emotion.sh/docs/css-prop para permitir que el motor de css Emotion, 
 * el cual usa Material UI, permitiera estilizar los componentes y etiquetas HTML. La línea de abajo es un macro que 
 * permite el buen funcionamiento de Emotion, por lo que es muy importante no eliminarlo.
 */
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

// Estilo correspondiente para el componente carta que cuenta con la información de misión.
const card = css({
    marginTop: '50px',
    padding: '50px'
});

class Mission extends React.Component{
    render(){
        return(
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={2} /> {/* Etiqueda utilizada para centrar la tarjeta. */}
                <Grid item xs={8}>
                    <Card css={card}>
                        <h1>Misión</h1>
                        <p>  
                            La base de datos de la Producción Bibliográfica Costarricense está conformada principalmente por los trabajos finales de graduación y los informes finales de las investigaciones realizadas en los centros e institutos de investigación de las instituciones productoras.
                        </p>
                        <p>
                            Pretende potenciar temas de investigación que sean de especial interés en materia educativa, divulgar los resultados de los hallazgos y la producción de información científica en el ámbito educativo.
                            La razón principal de la creación de esta herramienta es la necesidad de saber qué tipo de investigación se ha realizado en el país sobre los diversos temas relativos a la educación, con el fin de incidir en la política pública.
                        </p>
                    </Card>
                </Grid>
                <Grid item xs={2} /> {/* Etiqueda utilizada para centrar la tarjeta. */}
            </Grid>
        );
    }
}

export default Mission;