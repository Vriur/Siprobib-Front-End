import React, { useEffect, useState } from 'react';
import * as constants from '../../constants';
import { request } from './../Utils/Actions';
import SearchForm from '../SearchComponents/SearchForm';
import SearchResults from '../SearchComponents/SearchResults';

import Box from '@mui/material/Box';

const style = {
    searcher: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
}

function Searcher(){
    const [buttonClick, setButtonClick] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const makeSearch = !buttonDisabled && buttonClick;
    const [data, setData] = useState({
        rows: [],
        handleUpdate: function(newData){
            setData({
                ...data,
                rows: newData
            });
        }
    });

    const [searchState, setSearchState] = useState({
        isAdvanceSearch: false,
        searchFields: {
            authors: [],
            category: null,
            descriptors: [],
            location: null,
            title: '',
            year: ''
        },
        radioButtons: {
            radioButtonAuthors: '',
            radioButtonCategory: '',
            radioButtonDescriptors: '',
            radioButtonLocation: '',
            radioButtonYear: '',
        },
        handleUpdate: function(data){
            setSearchState(data);
        }
    });

    useEffect(() => {
        async function fetchData(){
            request(null, constants.PRODUCTION_CLASS, null, data, null);
        }
        fetchData();
    }, []);

    function filterData(){
        const filterData = data.rows.filter(row => {
            /*  La variable que nos indica si la entrada se mostrará en pantalla empieza con el valor de la 
                validación del título. */
            let isValidRow = searchState.searchFields.title 
                                ? row.title.toLowerCase().includes(searchState.searchFields.title.toLowerCase()) 
                                : null;

            const validations = [
                // Validación de autores.
                searchState.searchFields.authors.length 
                    ? searchState.searchFields.authors.some(author => row.authors.includes(author.label)) 
                    : null,
                // Validación de categoría.
                searchState.searchFields.category 
                    ? row.category === searchState.searchFields.category.label 
                    : null,
                // Validación de descriptores.
                searchState.searchFields.descriptors.length 
                    ? searchState.searchFields.descriptors.some(descriptor => row.descriptors.includes(descriptor.label)) 
                    : null,
                // Validación de ubicación.
                searchState.searchFields.location 
                    ? row.location === searchState.searchFields.location.label 
                    : null,
                // Validación de año.
                searchState.searchFields.year 
                    ? row.year === searchState.searchFields.year 
                    : null
            ]
            
            /* Esta parte del código depende totalmente de que los valores de los radioButtons se mantengan 
               ordenados, pues lo que vamos hacer es mapear cada uno de los radioButtons con su respectiva
               validación, por lo que es vital que mantengan los mismos índices, por ejemplo: el índice del
               radioButtonAuthors es 0 en el objeto radioButtons, por lo que el índice de authorsValidation
               también tiene por índice 0 en el objeto validations. Si esto no se mantiene se va a revisar
               el operador binario de un campo con la validación de otro campo. */
            Object.values(searchState.radioButtons).forEach((radioButton, radioButtonIndex) => {
                switch(radioButton){
                    case constants.BINARY_OPERATION_AND:
                        isValidRow = isValidRow && validations[radioButtonIndex];
                        break;
                    case constants.BINARY_OPERATION_NOT:
                        isValidRow = isValidRow && !validations[radioButtonIndex];
                        break;
                    case constants.BINARY_OPERATION_OR:
                        isValidRow = isValidRow || validations[radioButtonIndex];
                        break;
                    default:
                        // Sí es otro valor no hace nada, pues no se a elegido ningún radio button.
                }
            });
            
            return isValidRow;
        });

        return filterData;
    }

    function handleValidation(value){
        setButtonClick(false);
        setButtonDisabled(value);
    }

    function handleSearch(){
        setButtonClick(true);
    }

    return(
        <Box sx={style.searcher}>
            <SearchForm 
                state={searchState} 
                buttonDisabled={buttonDisabled} 
                handleValidation={handleValidation} 
                handleSearch={handleSearch} />
            
            {makeSearch && <SearchResults data={filterData()} />}
        </Box>
    );
}

export default Searcher;