import React, { Component, useEffect, useState } from 'react';
import AddObjectComponent from './AddObjectComponent';

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
 * Este vector cuenta con cada columna que debe de mostrarse para cada uno de los CRUD según el número de ID:
 * 0 - Producciones.
 * 1 - Autores.
 * 2 - Categorías.
 * 3 - Descriptores.
 * 4 - Ubicaciones.
 */
const columnsLabels = [
    ['Código', 'Título', 'Año', 'Categoría', 'Ubicación', 'Acciones'],
    ['Id', 'Nombre', 'Tipo', 'Acciones'],
    ['Categoría', 'Acciones'],
    ['Descriptor', 'Acciones'],
    ['Ubicación', 'Acciones']
]

const objectType = ['Producción', 'Autor', 'Categoría', 'Descriptor', 'Ubicación']

function ObjectCRUD(props){
    const objectId = props.objectId;
    const [addObjectOpen, setAddObjectOpen] = useState(false);

    const handleAddObject = () => {
        setAddObjectOpen(!addObjectOpen);
    }

    return(
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}} >
            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', marginBottom: '10px'}}>
                
                { /** Con esta condición se impide que el campo de texto se muestre para producciones y autores. **/
                    objectId < 2 ? null : <TextField size='small'></TextField>
                }
                <Button id="logout" variant="contained" color="primary" onClick={handleAddObject} sx={{margin: '0 0 15px 15px'}} >Agregar {objectType[objectId]}</Button>
            </Box>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} size='small' aria-label='Tabla de registros'>
                    <TableHead>
                        <TableRow>
                            {columnsLabels[objectId].map((column) => (
                                <TableCell>{column}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    
                    </TableBody>
                </Table>
            </TableContainer>
            <AddObjectComponent objectId={objectId} openState={addObjectOpen} action={handleAddObject} />
        </Box>
    );
}

export default ObjectCRUD;