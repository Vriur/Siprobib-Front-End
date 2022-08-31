import React, { Component, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function Author(props){
    const entryId = props.entryId;
    const crudAction = props.crudAction;
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [institutionalName, setInstitutionalName] = useState('');
    const [type, setType] = useState('Persona');


    useEffect(() => {
        let authorNameElement = document.getElementById('nombre-autor');
        let authorLastnameElement = document.getElementById('apellido-autor');
        let institutionalNameElement = document.getElementById('nombre-institucional');
        
        if(type === 'Persona'){
            authorNameElement.style.display = 'block';
            authorLastnameElement.style.display = 'block';
            institutionalNameElement.style.display = 'none';
        }
        else{
            authorNameElement.style.display = 'none';
            authorLastnameElement.style.display = 'none';
            institutionalNameElement.style.display = 'block';
        }

        setName('NombrePrueba');
        setLastname('ApellidoPrueba');
        setInstitutionalName('NombreInstitucionalPrueba');
    });

    function hideInputs(value){
        if(type === 'Persona'){
            setType('Institución');
        }
        else{
            setType('Persona');
        }
    }

    function renderAction(){
        switch(crudAction){
            case 'Agregar':
                return addOrEditRendering();
            case 'Editar':
                return addOrEditRendering();
            default:
                return viewOrDeleteRendering();
        }
    }

    function addOrEditRendering(){
        return(
            <div>
                <FormControl>
                    <FormLabel>Tipo de autor</FormLabel>
                    <RadioGroup id="tipo-autor" aria-labelledby="tipo-autor" defaultValue={'Persona'} name="grupo-tipo-autor" onChange={(e, value) => hideInputs(value)} row>
                        <FormControlLabel value="Persona" control={<Radio />} label="Persona" />
                        <FormControlLabel value="Institución" control={<Radio />} label="Institución" />
                    </RadioGroup>
                </FormControl>
                <FormControl id="nombre-autor">
                    <TextField required value={name} label="Nombre del autor" variant="outlined" sx={{marginTop: '4vh'}} />
                </FormControl>
                <FormControl id="apellido-autor">
                    <TextField required value={lastname} label="Apellido del autor" variant="outlined" sx={{marginTop: '4vh'}}  />
                </FormControl>
                <FormControl id="nombre-institucional">
                    <TextField required value={institutionalName} label="Nombre de la institución" variant="outlined" sx={{marginTop: '4vh'}}  />
                </FormControl>
            </div>
        );
    }

    function viewOrDeleteRendering(){
        return(
            <div>
                <Typography id='tipo-autor'>Tipo de Autor: {type}</Typography>
                <Typography id='nombre-autor' sx={{marginTop: '2vh'}} >Nombre: {name}</Typography>
                <Typography id='apellido-autor' sx={{marginTop: '2vh'}} >Apellido: {lastname}</Typography>
                <Typography id='nombre-institucional' sx={{marginTop: '2vh'}} >Nombre institucional: {institutionalName}</Typography>
            </div>    
        );
    }

    return(
        <Box noValidate component="form" sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '2vw', width: 'fit-content'}} >
            { renderAction() }
        </Box>
    );
}

export default Author;