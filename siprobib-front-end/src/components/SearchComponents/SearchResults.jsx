import React from 'react';
import * as constants from './../../constants';
import SearchResult from './SearchResult';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
    cardGrid:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },

    noResults: {
        paddingY: '10%'
    },

    footer: {
        height: '50px'
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
            {data.length ? data.map(result => ( <SearchResult key={result.id} data={result} /> ))
                         : <Typography variant='h5' sx={style.noResults}>{constants.NO_RESULTS}</Typography>}

            <Box sx={style.footer} />
        </Box>
    );
}

export default SearchResults;