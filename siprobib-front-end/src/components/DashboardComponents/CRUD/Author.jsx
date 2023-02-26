import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import * as constants from '../../../constants';
import { request } from './../../Utils/Actions';
import RadioButton from '../../Utils/RadioButton';
import TextField from './../../Utils/TextField';

import Typography from '@mui/material/Typography';

const Author = forwardRef(({dialogState, tableState, toastState, validForm}, ref) => {
    const [author, setAuthor] = useState({
        instance: {
            id: dialogState.instanceId,
            name: '',
            lastName: '',
            institutionalName: '',
            type: false // Cuando es false representa a una persona, cuando es true representa a una institución.
        },
        handleName: function (event){
            setAuthor(author => ({
                ...author,
                instance: {
                    ...author.instance,
                    name: event.target.value
                }
            }));
        },
        handleLastName: function (event){
            setAuthor(author => ({
                ...author,
                instance: {
                    ...author.instance,
                    lastName: event.target.value
                }
            }));
        },
        handleInstitutionalName: function (event){
            setAuthor(author => ({
                ...author,
                instance: {
                    ...author.instance,
                    institutionalName: event.target.value
                }
            }));
        },
        handleTypeChange: function (event, value){
            let typeChange = false;

            if(value === 'true'){
                typeChange = true;
            }

            setAuthor(author => (
                {
                    ...author,
                    instance: {
                        ...author.instance,
                        type: typeChange,
                        name: '',
                        lastName: '',
                        institutionalName: ''
                    }
            }));
        },
        handleUpdate: function (data){
            setAuthor({
                ...author,
                instance: {
                    id: data.id,
                    name: data.name,
                    type: data.type
                }
            });
        },
        handleLoad: function (data){
            setAuthor({
                ...author,
                instance: {
                    id: data.id,
                    name: data.name,
                    lastName: data.lastName,
                    institutionalName: data.institutionalName,
                    type: data.type
                }
            });
        }
    });

    useImperativeHandle(ref, () => ({
        getInstanceData(){
            return author;
        }
    }));

    useEffect(() => {
        switch(dialogState.crudAction){
            case constants.ADD_ACTION:
                break;
            case constants.EDIT_ACTION:
                request(author, dialogState.objectClass, constants.LOAD_ACTION, tableState, toastState);
                break;
            default:
                request(author, dialogState.objectClass, constants.DETAIL_ACTION, tableState, toastState);
                break;
        }
    }, []);

    useEffect(() => {
        if(dialogState.crudAction === constants.ADD_ACTION || dialogState.crudAction === constants.EDIT_ACTION){
            let authorNameElement = document.getElementById('name_author');
            let authorLastnameElement = document.getElementById('last_name_author');
            let institutionalNameElement = document.getElementById('institutional_name_author');
            
            if(author.instance.type){
                authorNameElement.style.display = 'none';
                authorLastnameElement.style.display = 'none';
                institutionalNameElement.style.display = '';
            }
            else{
                authorNameElement.style.display = '';
                authorLastnameElement.style.display = '';
                institutionalNameElement.style.display = 'none';
            }
        }
    }, [author.instance.type]);

    useEffect(() => {
        let validation = false;
        
        // Recordemos que el false de author.instance.type representa a una persona, mientras que el true es una
        // institución.
        if(!author.instance.type){
            validation = author.instance.name && author.instance.lastName;
        }
        else{
            validation = author.instance.institutionalName;
        }
    
        validForm(!!validation);
    }, [author.instance])

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
                <RadioButton
                    id='type_author'
                    label={constants.AUTHOR_TYPE}
                    value={author.instance.type}
                    buttons={[
                        {label: 'Persona', value: false}, 
                        {label: 'Institución', value: true}
                    ]}
                    handleChange={author.handleTypeChange}
                />

                <TextField 
                    id='name_author' 
                    label={constants.AUTHOR_NAME} 
                    value={author.instance.name} 
                    required={!author.instance.type} 
                    fullWidth={true} 
                    handleChange={author.handleName} />

                <TextField 
                    id='last_name_author' 
                    label={constants.AUTHOR_LASTNAME} 
                    value={author.instance.lastName} 
                    required={!author.instance.type} 
                    fullWidth={true} 
                    handleChange={author.handleLastName} />

                <TextField 
                    id='institutional_name_author' 
                    label={constants.AUTHOR_INSTITUTIONAL_NAME} 
                    value={author.instance.institutionalName} 
                    required={author.instance.type} 
                    fullWidth={true} 
                    handleChange={author.handleInstitutionalName} />
            </>
        );
    }

    function detailRendering(){
        return(
            <>
                <Typography id='id_author'>
                    {constants.AUTHOR_ID + author.instance.id}
                </Typography>

                <Typography id='name_author'>
                    {constants.AUTHOR_NAME + author.instance.name}
                </Typography>

                <Typography id='type_author'>
                    {constants.AUTHOR_TYPE + author.instance.type}
                </Typography>
            </>    
        );
    }

    function editRendering(){
        return(
            <>
                <RadioButton
                    id='type_author'
                    label={constants.AUTHOR_TYPE}
                    value={author.instance.type}
                    buttons={[
                        {label: 'Persona', value: false}, 
                        {label: 'Institución', value: true}
                    ]}
                    handleChange={author.handleTypeChange}
                />

                <TextField 
                    id='name_author' 
                    label={constants.AUTHOR_NAME} 
                    value={author.instance.name} 
                    required={!author.instance.type}
                    fullWidth={true} 
                    handleChange={author.handleName} />

                <TextField 
                    id='last_name_author' 
                    label={constants.AUTHOR_LASTNAME} 
                    value={author.instance.lastName} 
                    required={!author.instance.type} 
                    fullWidth={true} 
                    handleChange={author.handleLastName} />

                <TextField 
                    id='institutional_name_author' 
                    label={constants.AUTHOR_INSTITUTIONAL_NAME} 
                    value={author.instance.institutionalName} 
                    required={author.instance.type} 
                    fullWidth={true} 
                    handleChange={author.handleInstitutionalName} />
            </>
        );
    }

    function removeRendering(){
        return(
            <>
                <Typography id='id_author'>
                    {constants.AUTHOR_ID + author.instance.id}
                </Typography>

                <Typography id='name_author'>
                    {constants.AUTHOR_NAME + author.instance.name}
                </Typography>

                <Typography id='type_author'>
                    {constants.AUTHOR_TYPE + author.instance.type}
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

export default Author;