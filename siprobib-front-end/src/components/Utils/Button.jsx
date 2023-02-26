import React from 'react';

import MUIButton from '@mui/material/Button';

function Button({id, text, handleClick, color, isButtonDisabled = false}){
    
    return(
        <MUIButton 
            id={id} 
            disabled={isButtonDisabled}
            onClick={handleClick}
            color={color}
            variant='contained' 
            sx={{margin: '15px'}}  >
                {text}
        </MUIButton> 
    );
}

export default Button;