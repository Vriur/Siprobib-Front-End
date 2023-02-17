import React, { forwardRef } from 'react';
import Fade from '@mui/material/Fade';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast = ({state}) => {
  return (
    <Snackbar 
      open={state.open} 
      autoHideDuration={3000} 
      TransitionComponent={Fade} 
      onClose={state.handleClose} >

      <Alert 
        onClose={state.handleClose} 
        severity={state.severity} 
        sx={{ width: '100%' }} >
          {state.message}
      </Alert>
    </Snackbar>
  );
}

export default Toast;