import React from 'react';
import * as constants from '../../constants';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText'
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

function RadioButton({id, value, buttons, handleChange, disabled = false, label = '', labelPlacement = 'start', required=false, style = null}) {
    return(
        <FormControl sx={style}>
            <FormLabel id={'label_' + id}>{label}</FormLabel>

            <RadioGroup 
                id={id} 
                aria-labelledby={id} 
                value={value} 
                onChange={handleChange} 
                row >

                    {buttons.map(button => (
                        <FormControlLabel
                            key={button.label}
                            label={button.label}
                            labelPlacement={labelPlacement}
                            value={button.value} 
                            disabled={disabled}
                            control={<Radio />} />
                    ))}

            </RadioGroup>

            {value === '' && required === true && disabled === false &&
            <FormHelperText>{constants.ERROR_RADIO_BUTTON_VALIDATOR}</FormHelperText>}
        </FormControl>
    );
}

export default RadioButton;