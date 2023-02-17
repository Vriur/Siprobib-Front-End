import React, { useEffect, useState } from 'react';
import * as constants from '../../constants';
import { request } from './../Utils/Actions';
import Button from './../Utils/Button';
import Dialog from './Dialog';
import Toast from './../Utils/Toast';

import Box from '@mui/material/Box';
import IndexTable from './IndexTable';
import TableContainer from '@mui/material/TableContainer';

function ObjectCRUD({objectClass}){
    const [dialogState, setDialogState] = useState({
        open: false,
        objectClass: objectClass,
        crudAction: null,
        instanceId: null,
        handleDialog: function (crudAction = null, instanceId = null){
            let openChange = !this.open;
            setDialogState({
                ...dialogState,
                open: openChange,
                crudAction: crudAction,
                instanceId: instanceId
            });  
        }
    });

    const [tableState, setTableState] = useState({
        tableContent: [],
        contentFetch: false,
        fetch: function () {
            this.contentFetch=false;
            request(null, dialogState.objectClass, null, tableState, null);
        },
        handleUpdate: function(data){
            setTableState({
                ...tableState,
                tableContent: data,
                contentFetch: true
            });
        }
    });

    const [toastState, setToastState] = useState({
        open: false,
        message: "",
        severity: constants.SUCCESS,
        handleToast: function (message = null, severity = null){
            let openChange = !this.open;
            setToastState({
                ...toastState,
                open: openChange,
                message: message,
                severity: severity
            });
        },
        handleClose: function (event, reason){
            if (reason === 'clickaway') {
              return;
            }
            setToastState({
                ...toastState,
                open: false,
            });
        }
    });

    useEffect(() => {
        async function fetchData(){
            await tableState.fetch();
        }
        fetchData();
    }, []);

    function handleClick(){
        dialogState.handleDialog(constants.ADD_ACTION);
    }

    return(
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}} >
            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', marginBottom: '10px'}}>
                <Button 
                    id='add' 
                    text={constants.ADD_ACTION + ' ' + objectClass}
                    isButtonDisabled={false}
                    handleClick={handleClick}
                    color='primary' />
            </Box>

            {
                tableState.contentFetch &&
                <TableContainer>
                    <IndexTable 
                        data={tableState.tableContent} 
                        dialogState={dialogState} />
                </TableContainer>
            }
            
            <Dialog 
                state={dialogState} 
                tableState={tableState} 
                toastState={toastState} />
                
            <Toast state={toastState} />
        </Box>
    );
}

export default ObjectCRUD;