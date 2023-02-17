import React from 'react';
import * as constants from '../../constants';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import ObjectCRUD from './../DashboardComponents/ObjectCRUD';

/* Se siguió la guía que se encuentra en https://emotion.sh/docs/css-prop para permitir que el motor de css Emotion, 
 * el cual usa Material UI, permitiera estilizar los componentes y etiquetas HTML. La línea de abajo es un macro que 
 * permite el buen funcionamiento de Emotion, por lo que es muy importante no eliminarlo.
 */

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const tabContent = css({
    margin: '0 5vw',
    width: '90vw'
})

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function TabPanel({children, index, value}) {
  const isTabConsistent = value === index
  return (
    <div id={'panel_' + {index}} aria-labelledby={'tab_' + {index}} role="tabpanel" hidden={!isTabConsistent} css={tabContent} >
      {
        isTabConsistent && 
        (<Box sx={{ p: 3 }}>
          {
            children
          }
        </Box>)
      }
    </div>
  );
}

function AdminDashboard(){
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', height: '100vh'}}>
        <Box sx={{display: 'flex', justifyContent: 'flex-end', width: '100vw'}}>
            <Typography variant='h5' sx={{margin: '15px 0 0 5vw'}}>{constants.DASHBOARD_TITLE}</Typography>
            <Box sx={{flexGrow: 1}}/>
            <Button id="logout" variant="contained" color="primary" sx={{margin: '15px'}} >{constants.LOG_OUT}</Button>
        </Box>
        <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="Panel de Administración" sx={{margin: '0 5vw', width: '90vw', borderBottom: 1, borderColor: 'divider'}} >
            <Tab id='tab_0' aria-controls='panel_0' label={constants.PRODUCTION_CLASS} />
            <Tab id='tab_1' aria-controls='panel_1' label={constants.AUTHOR_CLASS} />
            <Tab id='tab_2' aria-controls='panel_2' label={constants.CATEGORY_CLASS} />
            <Tab id='tab_3' aria-controls='panel_3' label={constants.DESCRIPTOR_CLASS} />
            <Tab id='tab_4' aria-controls='panel_4' label={constants.LOCATION_CLASS} />
        </Tabs>
        <TabPanel value={value} index={0} >
            <ObjectCRUD objectClass={constants.PRODUCTION_CLASS} />
        </TabPanel>
        <TabPanel value={value} index={1} >
            <ObjectCRUD objectClass={constants.AUTHOR_CLASS} />
        </TabPanel>
        <TabPanel value={value} index={2} >
            <ObjectCRUD objectClass={constants.CATEGORY_CLASS} />
        </TabPanel>
        <TabPanel value={value} index={3} >
            <ObjectCRUD objectClass={constants.DESCRIPTOR_CLASS} />
        </TabPanel>
        <TabPanel value={value} index={4} >
            <ObjectCRUD objectClass={constants.LOCATION_CLASS} />
        </TabPanel>
    </Box>
  );
}

export default AdminDashboard;