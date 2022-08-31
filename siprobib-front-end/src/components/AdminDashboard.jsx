import React, { Component } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import ObjectCRUD from './ObjectCRUD';

/* Se siguió la guía que se encuentra en https://emotion.sh/docs/css-prop para permitir que el motor de css Emotion, 
 * el cual usa Material UI, permitiera estilizar los componentes y etiquetas HTML. La línea de abajo es un macro que 
 * permite el buen funcionamiento de Emotion, por lo que es muy importante no eliminarlo.
 */

/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { width } from '@mui/system';

const tabContent = css({
    margin: '0 5vw',
    width: '90vw'
})

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other} css={tabContent} >
      {value === index && (<Box sx={{ p: 3 }}> <Typography>{children}</Typography> </Box>)}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AdminDashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', height: '100vh'}}>
        <Box sx={{display: 'flex', justifyContent: 'flex-end', width: '100vw'}}>
            <Typography variant='h5' sx={{margin: '15px 0 0 5vw'}}>Administración del Sistema de Producciones</Typography>
            <Box sx={{flexGrow: 1}}/>
            <Button id="logout" variant="contained" color="primary" sx={{margin: '15px'}} >Cerrar Sesión</Button>
        </Box>
        <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="Panel de Administración" sx={{margin: '0 5vw', width: '90vw', borderBottom: 1, borderColor: 'divider'}} >
            <Tab label='Producciones' {...a11yProps(0)} />
            <Tab label='Autores' {...a11yProps(1)} />
            <Tab label='Categorías' {...a11yProps(2)} />
            <Tab label='Descriptores' {...a11yProps(3)} />
            <Tab label='Ubicación' {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0} >
            <ObjectCRUD objectType={'Producción'} />
        </TabPanel>
        <TabPanel value={value} index={1} >
            <ObjectCRUD objectType={'Autor'} />
        </TabPanel>
        <TabPanel value={value} index={2} >
            <ObjectCRUD objectType={'Categoría'} />
        </TabPanel>
        <TabPanel value={value} index={3} >
            <ObjectCRUD objectType={'Descriptor'} />
        </TabPanel>
        <TabPanel value={value} index={4} >
            <ObjectCRUD objectType={'Ubicación'} />
        </TabPanel>
    </Box>
  );
}