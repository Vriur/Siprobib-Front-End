import React, { useState } from 'react';
import SearchForm from '../SearchComponents/SearchForm';
import SearchResults from '../SearchComponents/SearchResults';

import Box from '@mui/material/Box';

function Searcher(){
    const [data, setData] = useState({});
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

    function handleSearch(event){
        console.log('Estoy buscando bi bu bu bop ...');
    }

    return(
        <Box>
            <SearchForm state={searchState} handleSearch={handleSearch} />
            <SearchResults data={data} />
        </Box>
    );
}

export default Searcher;