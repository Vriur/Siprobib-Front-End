import React, { useEffect, useState } from 'react';
import * as constants from '../../constants';
import { loadAutocompleteOptions } from './Actions';

import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

function AutocompleteField({id, label, value, objectClass, required, handleChange, multiple = false}) {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const loading = open && data.length === 0;

    useEffect(() => {
        if(!open) {
            setData([]);
        }
    }, [open]);

    useEffect(() => {
        if (!loading) {
          return undefined;
        }

        (async () => {
            await loadAutocompleteOptions(objectClass, setData);
        })();
    }, [loading]);

    function handleOpen(){
        setOpen(true);
    }

    function handleClose(){
        setOpen(false);
    }

    function handleInputValue(event, newValue){
        setInputValue(newValue);
    }

    return (
        <FormControl sx={{ marginY: '2%' }}>
            <Autocomplete
                open={open}
                multiple={multiple}
                id={id}
                value={value}
                inputValue={inputValue}
                options={data}
                loading={loading}
                noOptionsText={constants.NO_OPTION_TEXT}
                loadingText={constants.LOADING}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                getOptionLabel={(option) => option.label || ''}  
                onOpen={handleOpen}
                onClose={handleClose}
                onChange={handleChange}
                onInputChange={handleInputValue}
                renderOption={(props, option) => <li {...props} key={option.id}>{option.label}</li>}
                renderInput={(params) => 
                    <TextField 
                        {...params} 
                        label={label} 
                        required={required} 
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </React.Fragment>
                            ),
                        }} 
                    />} 
                />

            {(value === null || Object.keys(value).length === 0) && required === true &&
            <FormHelperText>{constants.ERROR_AUTOCOMPLETEFIELD_VALIDATOR}</FormHelperText>}
        </FormControl>
    );
}

export default AutocompleteField;