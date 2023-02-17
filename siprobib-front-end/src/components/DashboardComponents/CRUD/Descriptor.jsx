import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import * as constants from '../../../constants';
import { request } from '../../Utils/Actions';
import TextField from '../../Utils/TextField';

import Typography from '@mui/material/Typography';

const Descriptor = forwardRef(({dialogState, tableState, toastState}, ref) => {
    const [descriptor, setDescriptor] = useState({
        instance: {
            id: dialogState.instanceId,
            description: '',
        },
        handleDescription: function (event){
            setDescriptor({
                ...descriptor,
                instance: {
                    ...descriptor.instance,
                    description: event.target.value
                }
            });
        },
        handleUpdate: function (data){
            setDescriptor({
                ...descriptor,
                instance: {
                    id: data.id,
                    description: data.description
                }
            });
        }
    });

    useImperativeHandle(ref, () => ({
        getInstanceData(){
            return descriptor;
        }
    }));

    useEffect(() => {
        if(dialogState.crudAction !== constants.ADD_ACTION){
            request(descriptor, dialogState.objectClass, constants.DETAIL_ACTION, tableState, toastState);
        }
    }, []);

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
                    id='description_descriptor' 
                    label={constants.DESCRIPTOR_DESCRIPTION} 
                    value={descriptor.instance.description} 
                    required={true} 
                    fullWidth={true} 
                    handleChange={descriptor.handleDescription} />
            </>
        );
    }

    function detailRendering(){
        return(
            <>
                <Typography id='id_descriptor'>
                    {constants.DESCRIPTOR_ID + descriptor.instance.id}
                </Typography>

                <Typography id='description_descriptor'>
                    {constants.DESCRIPTOR_DESCRIPTION + descriptor.instance.description}
                </Typography>
            </>    
        );
    }

    function editRendering(){
        return(
            <>
                <TextField 
                    id='description_descriptor' 
                    label={constants.DESCRIPTOR_DESCRIPTION}
                    value={descriptor.instance.description} 
                    required={true} 
                    fullWidth={true} 
                    handleChange={descriptor.handleDescription} />
            </>
        );
    }

    function removeRendering(){
        return(
            <>
                <Typography id='id_descriptor'>
                    {constants.DESCRIPTOR_ID + descriptor.instance.id}
                </Typography>
                
                <Typography id='description_descriptor'>
                    {constants.DESCRIPTOR_DESCRIPTION + descriptor.instance.description}
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

export default Descriptor;