import React from 'react';

import MUIButton from '@mui/material/Button';

function Button({id, text, isButtonDisabled, handleClick, color}){
    
    return(
        <MUIButton 
            id={id} 
            disabled={isButtonDisabled}
            onClick={handleClick}
            color={color}
            variant='contained' 
            sx={{margin: '0 0 15px 15px'}}  >
                {text}
        </MUIButton> 
    );
}

export default Button;