import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import * as constants from '../../../constants';
import { request } from '../../Utils/Actions';
import TextField from '../../Utils/TextField';

import Typography from '@mui/material/Typography';

const Category = forwardRef(({dialogState, tableState, toastState}, ref) => {
    const [category, setCategory] = useState({
        instance: {
            id: dialogState.instanceId,
            description: '',
        },
        handleDescription: function (event){
            setCategory({
                ...category,
                instance: {
                    ...category.instance,
                    description: event.target.value
                }
            });
        },
        handleUpdate: function (data){
            setCategory({
                ...category,
                instance: {
                    id: data.id,
                    description: data.description
                }
            });
        }
    });

    useImperativeHandle(ref, () => ({
        getInstanceData(){
            return category;
        }
    }));

    useEffect(() => {
        if(dialogState.crudAction !== constants.ADD_ACTION){
            request(category, dialogState.objectClass, constants.DETAIL_ACTION, tableState, toastState);
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
                    id='description_category' 
                    label={constants.CATEGORY_DESCRIPTION} 
                    value={category.instance.description} 
                    required={true} 
                    fullWidth={true} 
                    handleChange={category.handleDescription} />
            </>
        );
    }

    function detailRendering(){
        return(
            <>
                <Typography id='id_category'>
                    {constants.CATEGORY_ID + category.instance.id}
                </Typography>

                <Typography id='description_category'>
                    {constants.CATEGORY_DESCRIPTION + category.instance.description}
                </Typography>
            </>    
        );
    }

    function editRendering(){
        return(
            <>
                <TextField 
                    id='description_category' 
                    label={constants.CATEGORY_DESCRIPTION}
                    value={category.instance.description} 
                    required={true} 
                    fullWidth={true} 
                    handleChange={category.handleDescription} />
            </>
        );
    }

    function removeRendering(){
        return(
            <>
                <Typography id='id_category'>
                    {constants.CATEGORY_ID + category.instance.id}
                </Typography>
                
                <Typography id='description_category'>
                    {constants.CATEGORY_DESCRIPTION + category.instance.description}
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

export default Category;