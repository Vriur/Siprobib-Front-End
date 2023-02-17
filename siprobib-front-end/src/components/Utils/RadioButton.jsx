import React from 'react';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

function RadioButton({id, label, value, buttons, handleChange}) {
    return(
        <>
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
                            value={button.value} 
                            control={<Radio />} />
                    ))}

            </RadioGroup>
        </>
    );
}

export default RadioButton;