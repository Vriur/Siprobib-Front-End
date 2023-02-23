import * as React from 'react';
import * as constants from '../../constants';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectField({id, label, value, data, handleChange}) {
    return (
        <FormControl sx={{ marginY: '5%' }}>
            <InputLabel id={label}>{label}</InputLabel>
            <Select
                id={id}
                label={label}
                labelId={label}
                value={value}
                onChange={handleChange} >

                {
                    data.map((element) => (
                        <MenuItem key={"year_" + element.value} value={element.value}>{element.label}</MenuItem>
                    ))
                }

            </Select>
        </FormControl>
    );
}

export default SelectField;