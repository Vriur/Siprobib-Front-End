import React, { useState } from 'react';

import GridResult from './GridResults';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';

/* Se siguió la guía que se encuentra en https://emotion.sh/docs/css-prop para permitir que el motor de css Emotion, 
 * el cual usa Material UI, permitiera estilizar los componentes y etiquetas HTML. La línea de abajo es un macro que 
 * permite el buen funcionamiento de Emotion, por lo que es muy importante no eliminarlo.
 */

/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

/*
 * Este componente es el encargado de mostrar la interfaz en donde se puede realizar la búsqueda de las producciones 
 * deseadas. Estas búsquedas se pueden realizar según título, autor o descriptor. Utilizando como posible filtros
 * la categoría y la ubicación en donde se encuentra la producción.
 */
function Searcher(props){
    // Hooks utilizados para manejar la hilera de búsqueda y el tipo de búsqueda (por título, autor, descriptor, todos).
    const [searchString, setSearchString] = useState('');
    const [searchParam, setSearchParam] = useState('all');

    const [results, setResults] = useState(null);
    
    // Evento que permite que al presionar ENTER en la barra de búsqueda se realice la búsqueda deseada.
    function handleEnterKey(event){
        if(event.key === 'Enter'){
            event.preventDefault();
            document.getElementById('submit-button').click();
        }
    }

    // Hook que agrega el evento o elimina el evento "handleEnterKey".
    React.useEffect(() => {
        let textField = document.getElementById('search-bar');
        textField.addEventListener('keydown', handleEnterKey);

        return () => {
            textField.addEventListener('keydown', handleEnterKey);
        };
    }, []);

    /*
     * Función que representa el evento que se encarga de enviar el formulario de búsqueda al backend para que se 
     * despliegue la información solicitada.
     */
    function handleSubmit(){
        setResults([
            {title: 'Producción 1', authors: 'Autores 1', locations: 'Locaciones 1', abstract: 'Resumen... 1', id: 1},
            {title: 'Producción 2', authors: 'Autores 2', locations: 'Locaciones 2', abstract: 'Resumen... 2', id: 2},
            {title: 'Producción 3', authors: 'Autores 3', locations: 'Locaciones 3', abstract: 'Resumen... 3', id: 3}
        ]);
    }

    return(
        <Container>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <div className="searcherWrapper">
                <div className="searcherTittle">
                    <h2>Buscador de producciones</h2>
                </div>
                <div className="searcher">
                    <Box component="form" noValidate autoComplete="on">
                        <FormControl>
                            <TextField id="search-bar" label="Terminos de búsqueda" variant="outlined" onChange={e => setSearchString(e.target.value)}/>
                        </FormControl>
                        <Button id="submit-button" variant="contained" color="primary" onClick={handleSubmit}><span className="material-symbols-outlined">search</span>Buscar</Button>
                        <br/>
                        <FormControl>
                            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="all" row>
                                <FormControlLabel name="search-param" value="tittle" control={<Radio />} label="Título" onChange={e => setSearchParam(e.target.value)} />
                                <FormControlLabel name="search-param" value="author" control={<Radio />} label="Autor" onChange={e => setSearchParam(e.target.value)} />
                                <FormControlLabel name="search-param" value="descriptors" control={<Radio />} label="Descriptores" onChange={e => setSearchParam(e.target.value)} />
                                <FormControlLabel name="search-param" value="all" control={<Radio />} label="Todos" onChange={e => setSearchParam(e.target.value)} />
                            </RadioGroup>
                        </FormControl> 
                    </Box>
                </div>
                <div className="results">
                    {results && <GridResult results={results} />}
                </div>
            </div>
        </Container>
    );
}

export default Searcher;