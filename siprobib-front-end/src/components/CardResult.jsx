import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

/* Se siguió la guía que se encuentra en https://emotion.sh/docs/css-prop para permitir que el motor de css Emotion, 
 * el cual usa Material UI, permitiera estilizar los componentes y etiquetas HTML. La línea de abajo es un macro que 
 * permite el buen funcionamiento de Emotion, por lo que es muy importante no eliminarlo.
 */

/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

const link = css({
    textDecoration: 'none'
})

/*
 * Este componente es el encargado de representar a cada carta en la grilla de resultados, en este se despliega la 
 * información de cada uno de los resultados de la búsqueda, además se establece un evento cliqueable que consiste en
 * abrir en una nueva pestaña el componente "Result" con el id respectivo, esto con el fin de desplegar toda la 
 * información de dicha producción.
 */
function CardResult(props){
    const data = props.data;

    return(
        <Card>
            <CardActionArea component="a">
            <Link to={'/resultado/' + data.id} target="_blank" rel="noopener noreferrer" css={link} >
                <CardHeader title={data.title} subheader={data.authors} />
                <CardContent>
                    {data.abstract} {data.locations}
                </CardContent>
                </Link>
            </CardActionArea>
        </Card>
    );
}

export default CardResult;