import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import * as constants from '../../../constants';
import { request, autocompleteOptions } from './../../Utils/Actions';
import AutocompleteField from '../../Utils/AutocompleteField';
import SelectField from '../../Utils/SelectField';
import TextField from './../../Utils/TextField';

import Typography from '@mui/material/Typography';

const Production = forwardRef(({dialogState, tableState, toastState, checkFormValidity}, ref) => {
    const [production, setProduction] = useState({
        instance: {
            id: dialogState.instanceId,
            title: '',
            summary: '',
            year: new Date().getFullYear(),
            clasification: '',
            webDirection: '',
            category: null,
            location: null,
            authors: [],
            descriptors: []
        },
        handleTitle: function (event){
            setProduction(production => ({
                ...production,
                instance: {
                    ...production.instance,
                    title: event.target.value
                }
            }));
        },
        handleSummary: function (event){
            setProduction(production => ({
                ...production,
                instance: {
                    ...production.instance,
                    summary: event.target.value
                }
            }));
        },
        handleYear: function (event){
            setProduction(production => ({
                ...production,
                instance: {
                    ...production.instance,
                    year: event.target.value
                }
            }));
        },
        handleClasification: function (event){
            setProduction(production => ({
                ...production,
                instance: {
                    ...production.instance,
                    clasification: event.target.value
                }
            }));
        },
        handleWebDirection: function (event){
            setProduction(production => ({
                ...production,
                instance: {
                    ...production.instance,
                    webDirection: event.target.value
                }
            }));
        },
        handleCategory: function (event, newValue){
            setProduction(production => ({
                ...production,
                instance: {
                    ...production.instance,
                    category: newValue
                }
            }));
        },
        handleLocation: function (event, newValue){
            setProduction(production => ({
                ...production,
                instance: {
                    ...production.instance,
                    location: newValue
                }
            }));
        },
        handleAuthors: function (event, newValue){
            setProduction(production => ({
                ...production,
                instance: {
                    ...production.instance,
                    authors: newValue
                }
            }));
        },
        handleDescriptors: function (event, newValue){
            setProduction(production => ({
                ...production,
                instance: {
                    ...production.instance,
                    descriptors: newValue
                }
            }));
        },
        handleUpdate: function (data){
            setProduction({
                ...production,
                instance: {
                    id: data.id,
                    title: data.title,
                    summary: data.summary,
                    year: data.year,
                    clasification: data.clasification,
                    webDirection: data.webDirection,
                    category: data.category,
                    location: data.location,
                    authors: data.authors,
                    descriptors: data.descriptors
                }
            });
        },
        handleLoad: function (data){
            if(data.category){
                data.category.label = data.category.description;
                delete data.category.description;
            }
            
            if(data.location){
                data.location.label = data.location.detail;
                delete data.location.detail;
            }

            setProduction({
                ...production,
                instance: {
                    id: data.id,
                    title: data.title,
                    summary: data.summary,
                    year: data.year,
                    clasification: data.clasification,
                    webDirection: data.webDirection,
                    category: data.category,
                    location: data.location,
                    authors: autocompleteOptions(constants.AUTHOR_CLASS, data.authors),
                    descriptors: autocompleteOptions(constants.DESCRIPTOR_CLASS, data.descriptors)
                }
            });
        }
    });

    useImperativeHandle(ref, () => ({
        getInstanceData(){
            return production;
        }
    }));

    useEffect(() => {
        switch(dialogState.crudAction){
            case constants.ADD_ACTION:
                break;
            case constants.EDIT_ACTION:
                request(production, dialogState.objectClass, constants.LOAD_ACTION, tableState, toastState);
                break;
            default:
                request(production, dialogState.objectClass, constants.DETAIL_ACTION, tableState, toastState);
                break;
        }
    }, []);

    useEffect(() => {
        checkFormValidity();
    }, [production])

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
                    id='title_production' 
                    label={constants.PRODUCTION_TITLE} 
                    value={production.instance.title} 
                    required={true} 
                    fullWidth={true} 
                    handleChange={production.handleTitle} />

                <AutocompleteField 
                    id='authors_production'
                    label={constants.PRODUCTION_AUTHORS}
                    value={production.instance.authors}
                    objectClass={constants.AUTHOR_CLASS}
                    multiple={true}
                    handleChange={production.handleAuthors} />

                <AutocompleteField 
                    id='descriptors_production'
                    label={constants.PRODUCTION_DESCRIPTORS}
                    value={production.instance.descriptors}
                    objectClass={constants.DESCRIPTOR_CLASS}
                    multiple={true}
                    handleChange={production.handleDescriptors} />

                <AutocompleteField 
                    id='category_production'
                    label={constants.PRODUCTION_CATEGORY}
                    value={production.instance.category}
                    objectClass={constants.CATEGORY_CLASS}
                    required={true}
                    handleChange={production.handleCategory} />

                <SelectField 
                    id='year_production'
                    label={constants.PRODUCTION_YEAR}
                    value={production.instance.year}
                    data={constants.PRODUCTION_YEAR_OPTIONS()}
                    handleChange={production.handleYear} />

                <AutocompleteField 
                    id='location_production'
                    label={constants.PRODUCTION_LOCATION}
                    value={production.instance.location}
                    objectClass={constants.LOCATION_CLASS}
                    required={true}
                    handleChange={production.handleLocation} />

                <TextField 
                    id='clasification_production' 
                    label={constants.PRODUCTION_CLASIFICATION} 
                    value={production.instance.clasification} 
                    required={true} 
                    fullWidth={true} 
                    handleChange={production.handleClasification} />

                <TextField 
                    id='web_direction_production' 
                    label={constants.PRODUCTION_WEB_DIRECTION} 
                    value={production.instance.webDirection} 
                    required={true} 
                    fullWidth={true} 
                    handleChange={production.handleWebDirection} />

                <TextField 
                    id='summary_production' 
                    label={constants.PRODUCTION_SUMMARY} 
                    value={production.instance.summary} 
                    required={true} 
                    fullWidth={true} 
                    multiline={true}
                    handleChange={production.handleSummary} />
            </>
        );
    }

    function detailRendering(){
        return(
            <>
                <Typography id='id_production'>
                    {constants.PRODUCTION_ID + production.instance.id}
                </Typography>

                <Typography id='title_production'>
                    {constants.PRODUCTION_TITLE + production.instance.title}
                </Typography>

                <Typography id='authors_production'>
                    {constants.PRODUCTION_AUTHORS + production.instance.authors}
                </Typography>

                <Typography id='descriptors_production'>
                    {constants.PRODUCTION_DESCRIPTORS + production.instance.descriptors}
                </Typography>

                <Typography id='category_production'>
                    {constants.PRODUCTION_CATEGORY + production.instance.category}
                </Typography>

                <Typography id='year_production'>
                    {constants.PRODUCTION_YEAR + production.instance.year}
                </Typography>

                <Typography id='location_production'>
                    {constants.PRODUCTION_LOCATION + production.instance.location}
                </Typography>

                <Typography id='clasification_production'>
                    {constants.PRODUCTION_CLASIFICATION + production.instance.clasification}
                </Typography>

                <Typography id='web_direction_production'>
                    {constants.PRODUCTION_WEB_DIRECTION + production.instance.webDirection}
                </Typography>

                <Typography id='summary_production'>
                    {constants.PRODUCTION_SUMMARY + production.instance.summary}
                </Typography>
            </>    
        );
    }

    function editRendering(){
        return(
            <>
                <TextField 
                    id='title_production' 
                    label={constants.PRODUCTION_TITLE} 
                    value={production.instance.title} 
                    required={true} 
                    fullWidth={true} 
                    handleChange={production.handleTitle} />

                <AutocompleteField 
                    id='authors_production'
                    label={constants.PRODUCTION_AUTHORS}
                    value={production.instance.authors}
                    objectClass={constants.AUTHOR_CLASS}
                    multiple={true}
                    handleChange={production.handleAuthors} />

                <AutocompleteField 
                    id='descriptors_production'
                    label={constants.PRODUCTION_DESCRIPTORS}
                    value={production.instance.descriptors}
                    objectClass={constants.DESCRIPTOR_CLASS}
                    multiple={true}
                    handleChange={production.handleDescriptors} />

                <AutocompleteField 
                    id='category_production'
                    label={constants.PRODUCTION_CATEGORY}
                    value={production.instance.category}
                    objectClass={constants.CATEGORY_CLASS}
                    required={true}
                    handleChange={production.handleCategory} />

                <SelectField 
                    id='year_production'
                    label={constants.PRODUCTION_YEAR}
                    value={production.instance.year}
                    data={constants.PRODUCTION_YEAR_OPTIONS()}
                    handleChange={production.handleYear} />

                <AutocompleteField 
                    id='location_production'
                    label={constants.PRODUCTION_LOCATION}
                    value={production.instance.location}
                    objectClass={constants.LOCATION_CLASS}
                    required={true}
                    handleChange={production.handleLocation} />

                <TextField 
                    id='clasification_production' 
                    label={constants.PRODUCTION_CLASIFICATION} 
                    value={production.instance.clasification} 
                    required={true} 
                    fullWidth={true} 
                    handleChange={production.handleClasification} />

                <TextField 
                    id='web_direction_production' 
                    label={constants.PRODUCTION_WEB_DIRECTION} 
                    value={production.instance.webDirection} 
                    required={true} 
                    fullWidth={true} 
                    handleChange={production.handleWebDirection} />

                <TextField 
                    id='summary_production' 
                    label={constants.PRODUCTION_SUMMARY} 
                    value={production.instance.summary} 
                    required={true} 
                    fullWidth={true} 
                    multiline={true}
                    handleChange={production.handleSummary} />
            </>
        );
    }

    function removeRendering(){
        return(
            <>
                <Typography id='id_production'>
                    {constants.PRODUCTION_ID + production.instance.id}
                </Typography>

                <Typography id='title_production'>
                    {constants.PRODUCTION_TITLE + production.instance.title}
                </Typography>

                <Typography id='authors_production'>
                    {constants.PRODUCTION_AUTHORS + production.instance.authors}
                </Typography>

                <Typography id='descriptors_production'>
                    {constants.PRODUCTION_DESCRIPTORS + production.instance.descriptors}
                </Typography>

                <Typography id='category_production'>
                    {constants.PRODUCTION_CATEGORY + production.instance.category}
                </Typography>

                <Typography id='year_production'>
                    {constants.PRODUCTION_YEAR + production.instance.year}
                </Typography>

                <Typography id='location_production'>
                    {constants.PRODUCTION_LOCATION + production.instance.location}
                </Typography>

                <Typography id='clasification_production'>
                    {constants.PRODUCTION_CLASIFICATION + production.instance.clasification}
                </Typography>

                <Typography id='web_direction_production'>
                    {constants.PRODUCTION_WEB_DIRECTION + production.instance.webDirection}
                </Typography>

                <Typography id='summary_production'>
                    {constants.PRODUCTION_SUMMARY + production.instance.summary}
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

export default Production;