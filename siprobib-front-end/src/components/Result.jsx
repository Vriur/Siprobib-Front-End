import React from 'react';

/* Se siguió la guía que se encuentra en https://emotion.sh/docs/css-prop para permitir que el motor de css Emotion, 
 * el cual usa Material UI, permitiera estilizar los componentes y etiquetas HTML. La línea de abajo es un macro que 
 * permite el buen funcionamiento de Emotion, por lo que es muy importante no eliminarlo.
 */

/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

/*
 * Componente encargado de desplegar la información completa de la producción correspondiente. dicha producción es la
 * dueña del id que se envia como parámetro en el enlace.
 */
function Result(props){
    return(
        <div>
            <lable>Titulo</lable><br/>
            <lable>Autores</lable><br/>
            <lable>Descriptores</lable><br/>
            <lable>Clasificación</lable><br/>
            <lable>Año de la producción</lable><br/>
            <lable>Categoría</lable><br/>
            <lable>Ubicación</lable><br/>
            <lable>Resumen de producción</lable><br/>
            <lable>Dirección web</lable>
        </div>
    );
}

export default Result;