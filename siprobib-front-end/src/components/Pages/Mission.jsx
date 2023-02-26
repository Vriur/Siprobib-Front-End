import React from 'react';
import * as constants from './../../constants';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const card = {
    marginTop: '5%',
    marginX: '10%',
    padding: '50px',
};

function Mission(){
    return(
        <Box>
            <Card sx={card}>
                <Typography variant='h3'>{constants.MISSION}</Typography>
                <Typography variant='body1'>{constants.MISSION_FIRST_PARAGRAPH}</Typography><br/>
                <Typography variant='body1'>{constants.MISSION_SECOND_PARAGRAPH}</Typography>
            </Card>
        </Box>
    );
}

export default Mission;