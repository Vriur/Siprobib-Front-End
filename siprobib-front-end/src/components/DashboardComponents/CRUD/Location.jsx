import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import * as constants from '../../../constants';
import { request } from './../../Utils/Actions';
import TextField from './../../Utils/TextField';

import Typography from '@mui/material/Typography';

const Location = forwardRef(({dialogState, tableState, toastState, validForm}, ref) => {
    const [location, setLocation] = useState({
        instance: {
            id: dialogState.instanceId,
            detail: '',
        },
        handleDetail: function (event){
            setLocation({
                ...location,
                instance: {
                    ...location.instance,
                    detail: event.target.value
                }
            });
        },
        handleUpdate: function (data){
            setLocation({
                ...location,
                instance: {
                    id: data.id,
                    detail: data.detail
                }
            });
        }
    });

    useImperativeHandle(ref, () => ({
        getInstanceData(){
            return location;
        }
    }));

    useEffect(() => {
        if(dialogState.crudAction !== constants.ADD_ACTION){
            request(location, dialogState.objectClass, constants.DETAIL_ACTION, tableState, toastState);
        }
    }, []);

    useEffect(() => {
        let validation = location.instance.detail.length;
        validForm(!!validation);
    }, [location.instance])

    function renderAction(){
        switch(dialogState.crudAction){
            case constants.ADD_ACTION:
                return addRendering();
            case constants.EDIT_ACTION:
                return editRendering();
            case constants.DETAIL_ACTION:
                return detailRendering();
            default:
                return removeRendering();
        }
    }

    function addRendering(){
        return(
            <>
                <TextField 
                    id='detail_location' 
                    label={constants.LOCATION_DETAIL} 
                    value={location.instance.detail} 
                    required={true} 
                    fullWidth={true} 
                    handleChange={location.handleDetail} />
            </>
        );
    }

    function detailRendering(){
        return(
            <>
                <Typography id='id_location'>
                    {constants.LOCATION_ID + location.instance.id}
                </Typography>

                <Typography id='detail_location'>
                    {constants.LOCATION_DETAIL + location.instance.detail}
                </Typography>
            </>    
        );
    }

    function editRendering(){
        return(
            <>
                <TextField 
                    id='detail_location' 
                    label={constants.LOCATION_DETAIL}
                    value={location.instance.detail} 
                    required={true} 
                    fullWidth={true} 
                    handleChange={location.handleDetail} />
            </>
        );
    }

    function removeRendering(){
        return(
            <>
                <Typography id='id_location'>
                    {constants.LOCATION_ID + location.instance.id}
                </Typography>
                
                <Typography id='detail_location'>
                    {constants.LOCATION_DETAIL + location.instance.detail}
                </Typography>
            </>    
        );
    }

    return(
        <>
            { renderAction() }
        </>
    );
})

export default Location;