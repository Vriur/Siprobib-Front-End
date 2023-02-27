import React from 'react';
import * as constants from './../../constants';
import Banner from '../../resources/banner.jpg';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const home = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '82%',
  backgroundImage: 'url(' + Banner + ')',
  backgroundSize: 'cover',
  color: 'white',
  textAlign: 'center',
};

function Home(){
  return (
    <Box sx={home}>
      <Typography variant='h2'>{constants.HOME_TITLE}</Typography>
      <Typography variant='h4'>{constants.HOME_SUB_TITLE}</Typography>  
    </Box>
  )
}

export default Home;