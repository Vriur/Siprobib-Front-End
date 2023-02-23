import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as constants from '../../constants';
import { request } from './../Utils/Actions';
import Author from './CRUD/Author'
import Button from './../Utils/Button';
import Category from './CRUD/Category';
import Descriptor from './CRUD/Descriptor';
import Location from './CRUD/Location';

import Box from '@mui/material/Box';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogView from '@mui/material/Dialog';
import Production from './CRUD/Production';

function Dialog({state, tableState, toastState}){
  const objectInstanceReference = useRef(0);
  const [actionButtonDisabled, setActionButtonDisabled] = useState(false);

  useMemo(() => {
    if(state.crudAction === constants.REMOVE_ACTION){
      return setActionButtonDisabled(false);
    }
    else{
      return setActionButtonDisabled(true);
    }
  }, [state.crudAction]);

  const dialogBody = (objectClass) => {
    switch(objectClass){
      case constants.PRODUCTION_CLASS:
        return(<Production
                  dialogState={state} 
                  tableState={tableState} 
                  toastState={toastState} 
                  checkFormValidity={checkFormValidity}
                  ref={objectInstanceReference} />);
      case constants.AUTHOR_CLASS:
        return(<Author
                  dialogState={state} 
                  tableState={tableState} 
                  toastState={toastState} 
                  checkFormValidity={checkFormValidity}
                  ref={objectInstanceReference} />);
      case constants.CATEGORY_CLASS:
        return(<Category
                  dialogState={state} 
                  tableState={tableState} 
                  toastState={toastState} 
                  ref={objectInstanceReference} />);
      case constants.DESCRIPTOR_CLASS:
        return(<Descriptor
                  dialogState={state} 
                  tableState={tableState} 
                  toastState={toastState} 
                  ref={objectInstanceReference} />);
      default:
        return(<Location 
                  dialogState={state} 
                  tableState={tableState} 
                  toastState={toastState} 
                  ref={objectInstanceReference} />);
    }
  };

  function checkFormValidity(){
    let form = document.getElementById('form');
    let validity = form.checkValidity();
    setActionButtonDisabled(!validity);
  }

  function handleSubmit(){
    let requestData = objectInstanceReference.current.getInstanceData();
    request(requestData, state.objectClass, state.crudAction, tableState, toastState);
    state.handleDialog();
  }

  function handleClose(){
    state.handleDialog();
  }

  return(
    <DialogView 
      maxWidth={'sm'} 
      fullWidth={true} 
      open={state.open} 
      onClose={() => state.handleDialog()} >
      
      <DialogTitle>
        {state.crudAction} {state.objectClass}
      </DialogTitle>

      <DialogContent 
        sx={{width: 0.9, '& .MuiBox-root': {width: 1, margin: 0}}} >
        
          <DialogContentText sx={{justifyContent: 'flex-start'}} >
            {constants.DIALOG_TITLE[state.crudAction]}
          </DialogContentText>
          { 
            state.open && 
            <Box 
              id='form' 
              component='form' 
              onChange={checkFormValidity} 
              sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '2vw', width: 'fit-content'}} >
              { dialogBody(state.objectClass) }
            </Box> 
          }
      </DialogContent>

      <DialogActions 
        sx={{marginBottom: '2%', marginRight: '2%'}} >
        { 
          /** Esto es un render condicional, es decir mostrará el botón de acción, mientras la acción no sea "Detalle". */
          state.crudAction !== constants.DETAIL_ACTION && 
          <Button 
            id='submit_button' 
            text={state.crudAction}
            isButtonDisabled={actionButtonDisabled}
            handleClick={handleSubmit}
            color='primary' />
        }
        <Button 
          id='close_button' 
          text={constants.CLOSE}
          isButtonDisabled={false}
          handleClick={handleClose}
          color='secondary' />
      </DialogActions>
    </DialogView>
  );
}

export default Dialog;