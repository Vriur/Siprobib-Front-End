import React, { useEffect, useState } from 'react';
import * as constants from '../../constants';
import { request } from './../Utils/Actions';
import SearchForm from '../SearchComponents/SearchForm';
import SearchResults from '../SearchComponents/SearchResults';

import Box from '@mui/material/Box';

function Searcher(){
    const [buttonClick, setButtonClick] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const makeSearch = true; //!buttonDisabled && buttonClick; quitar este comentario para probar bien

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
            radioButtonDescriptors: '',
            radioButtonCategory: '',
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
        return data.rows;
    }

    function handleValidation(value){
        setButtonClick(false);
        setButtonDisabled(value);
    }

    function handleSearch(){
        setButtonClick(true);
    }

    return(
        <Box>
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