import React from 'react';
import * as constants from '../../constants';
import Button from './../Utils/Button';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import ObjectCRUD from './../DashboardComponents/ObjectCRUD';

const dashboard = {
  height: '80%',
  width: '100%'
}

const tabContent = {
    width: '100%',
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function TabPanel({children, index, value}) {
  const isTabConsistent = value === index
  return (
    <>
      {
        isTabConsistent && 
        <Box 
          id={'panel_' + {index}} 
          aria-labelledby={'tab_' + {index}} 
          role="tabpanel" 
          hidden={!isTabConsistent} 
          sx={tabContent} >
            { children }
        </Box>
      }
    </>
  );
}

function AdminDashboard(){
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={dashboard}>
        <Box sx={{display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
            <Typography variant='h5' sx={{margin: '15px'}}>{constants.DASHBOARD_TITLE}</Typography>
            <Box sx={{flexGrow: 1}}/>
            <Button 
              id='logout' 
              text={constants.LOG_OUT}
              color="primary" />
        </Box>
        <Tabs 
          aria-label="Panel de Administración"
          value={value} 
          onChange={handleChange} 
          textColor="secondary" 
          indicatorColor="secondary"  
          sx={{width: '100%', borderBottom: 1, borderColor: 'divider'}} >
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