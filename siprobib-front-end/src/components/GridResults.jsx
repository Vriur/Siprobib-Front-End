import React from 'react';

import CardResult from './CardResult';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

/*
 * Componente encargado de desplegar los resultados obtenidos por la búsqueda en forma de una lista o grilla de 
 * componentes carta. Los resultados son obtenidos en el componente "Searcher" y son enviados a este por medio de 
 * los props, esta información se almacena en results y luego cada resultado es mapeado creando una carta que será
 * desplegada en la grilla. 
 */
function SearchResults(props){
    const results = props.results;

    return(
        <Container>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                {results.map(result => (
                    <Grid item key={result.id} xs={10}>
                        <CardResult data={result}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default SearchResults;