import React from 'react';
import * as constants from '../../constants';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import MUITextField from '@mui/material/TextField';

function TextField({id, label, value, required, fullWidth, handleChange, multiline = false, maxRows = 5, style = {marginTop: '4vh'}}) {
    return(
        <FormControl id={id} fullWidth={fullWidth} >
            <MUITextField 
                label={label} 
                value={value} 
                multiline={multiline}
                maxRows={maxRows}
                required={required} 
                onChange={handleChange} 
                variant='outlined' 
                sx={style} />

            {value === '' && required === true &&
            <FormHelperText>{constants.ERROR_TEXTFIELD_VALIDATOR}</FormHelperText>}
            
        </FormControl>
    );
}

export default TextField;