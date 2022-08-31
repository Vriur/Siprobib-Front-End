import React, { Component, useEffect, useState } from 'react';
import Dialog from './Dialog';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

/**
 * Este vector cuenta con cada columna que debe de mostrarse para cada uno de los CRUD.
 */
const columnsLabels = {
    'Producción': ['Código', 'Título', 'Año', 'Categoría', 'Ubicación', 'Acciones'],
    'Autor': ['Id', 'Nombre', 'Tipo', 'Acciones'],
    'Categoría': ['Categoría', 'Acciones'],
    'Descriptor': ['Descriptor', 'Acciones'],
    'Ubicación': ['Ubicación', 'Acciones']
};

function ObjectCRUD(props){
    const objectType = props.objectType;
    const [addObjectOpen, setAddObjectOpen] = useState(false);

    const handleAddObject = () => {
        setAddObjectOpen(!addObjectOpen);
    }

    return(
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}} >
            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', marginBottom: '10px'}}>
                <Button id="logout" variant="contained" color="primary" onClick={handleAddObject} sx={{margin: '0 0 15px 15px'}} >Agregar {objectType}</Button>
            </Box>
            <TableContainer>
                <Table sx={{minWidth: 650}} size='small' aria-label='Tabla de registros'>
                    <TableHead>
                        <TableRow>
                            {columnsLabels[objectType].map((column) => (
                                <TableCell>{column}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog objectType={objectType} crudAction={'Agregar'} entryId={null} state={addObjectOpen} stateControl={handleAddObject} />
        </Box>
    );
}

export default ObjectCRUD;