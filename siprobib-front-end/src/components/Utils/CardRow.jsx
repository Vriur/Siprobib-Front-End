import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function CardRow({label, value, variant, style = null, paragraph = false}){
    return(
        <Grid container key={label}>
            <Grid item xs={2} style={{ display: "flex", justifyContent: "flex-end"}}>
                <Typography 
                    variant={variant} 
                    align='justify' 
                    sx={style}>
                    {label}
                </Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography 
                    variant={variant} 
                    align='justify' 
                    paragraph={paragraph} 
                    sx={style}>
                    {value}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default CardRow;