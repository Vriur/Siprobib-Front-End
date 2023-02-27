import React from 'react';
import SearchResult from './SearchResult';

import Box from '@mui/material/Box';

const style = {
    cardGrid:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

/*
 * Componente encargado de desplegar los resultados obtenidos por la búsqueda en forma de una lista o grilla de 
 * componentes carta. Los resultados son obtenidos en el componente "Searcher" y son enviados a este por medio de 
 * data, luego cada resultado es mapeado creando una carta que será
 * desplegada en la grilla. 
 */
function SearchResults({data}){
    return(
        <Box sx={style.cardGrid}>
            {data.map(result => ( <SearchResult key={result.id} data={result} /> ))}
        </Box>
    );
}

export default SearchResults;