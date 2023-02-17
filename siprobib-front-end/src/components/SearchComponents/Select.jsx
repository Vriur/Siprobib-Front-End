import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import SelectComponent, { SelectChangeEvent } from '@mui/material/Select';

/* Se siguió la guía que se encuentra en https://emotion.sh/docs/css-prop para permitir que el motor de css Emotion, 
 * el cual usa Material UI, permitiera estilizar los componentes y etiquetas HTML. La línea de abajo es un macro que 
 * permite el buen funcionamiento de Emotion, por lo que es muy importante no eliminarlo.
 */

/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

const selectInput = css({
    width: '20vw',
    margin: '20px'
});

/*
 * Este componente es el encargado de mostrar la interfaz en donde se puede realizar la búsqueda de las producciones 
 * deseadas. Estas búsquedas se pueden realizar según título, autor o descriptor. Utilizando como posible filtros
 * la categoría y la ubicación en donde se encuentra la producción.
 */
function Select(props){
    const label = props.label;
    const contents = props.contents;
    const [value, setValue] = React.useState('0');

    function handleChange(event){
        setValue(event.target.value);
    };

    return(
        <FormControl css={selectInput}>
            <InputLabel id="select-label">{label}</InputLabel>
            <SelectComponent id="select-content" value={value} label={label} onChange={handleChange}>
                <MenuItem value={0}>-----</MenuItem>
                {contents.map(content => (
                    <MenuItem value={content.value}>{content.label}</MenuItem>
                ))}
            </SelectComponent>
        </FormControl>
    );
}

export default Select;