import React, { Component } from 'react';
import Author from './Author';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogView from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Dialog(props){
  const objectType = props.objectType;
  const crudAction = props.crudAction;
  const entryId = props.entryId;
  const state = props.state;
  const stateControl = props.stateControl

  const dialogBody = (objectType) => {
    switch(objectType){
      case 'Producción':
        return('0');
      case 'Autor':
        return(<Author crudAction={crudAction} entryId={entryId} />);
      case 'Categoría':
        return('2');
      case 'Descriptor':
        return('3');
      case 'Ubicación':
        return('4');
    }
  };

  return(
    <DialogView maxWidth={'sm'} fullWidth={true} open={state} onClose={stateControl} >
      <DialogTitle>{crudAction} {objectType}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{justifyContent: 'flex-start'}}>
          Ingrese los datos correspondientes.
        </DialogContentText>
        {dialogBody(objectType)}
      </DialogContent>
      <DialogActions>
        <Button id="agregar" variant="contained" color="primary">{crudAction}</Button>
        <Button id="cerrar" variant="contained" color="secondary" onClick={stateControl}>Cerrar</Button>
      </DialogActions>
    </DialogView>
  );
}

export default Dialog;