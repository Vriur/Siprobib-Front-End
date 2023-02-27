import React, { useEffect } from 'react';
import * as constants from './../../constants';
import AutocompleteField from './../Utils/AutocompleteField';
import Button from '../Utils/Button';
import RadioButton from './../Utils/RadioButton';
import SelectField from './../Utils/SelectField';
import TextField from './../Utils/TextField';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Switch from '@mui/material/Switch';

const style = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginY: '50px',
    },

    formRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    formElement: {
        width: 300,
        marginTop: '20px'
    },

    formSwitch: {
        marginLeft: '2%'
    },

    formRadioButton: {
        marginLeft: '10px'
    }
}

function SearchForm({state, buttonDisabled, handleValidation, handleSearch}){
    const binaryOperations = [
        {label: 'not', value: 'not'}, 
        {label: 'and', value: 'and'},
        {label: 'or', value: 'or'}
    ];

    useEffect(() => {
        let validation = !state.searchFields.title;

        if(state.isAdvanceSearch){
            if(state.searchFields.authors.length){
                validation = validation || !state.radioButtons.radioButtonAuthors;
            }

            if(state.searchFields.category){
                validation = validation || !state.radioButtons.radioButtonCategory;
            }

            if(state.searchFields.descriptors.length){
                validation = validation || !state.radioButtons.radioButtonDescriptors;
            }

            if(state.searchFields.location){
                validation = validation || !state.radioButtons.radioButtonLocation;
            }

            if(state.searchFields.year){
                validation = validation || !state.radioButtons.radioButtonYear;
            }
        }
        handleValidation(validation);
    }, [state]);

    function handleAuthors(event, newValue){
        state.handleUpdate({
            ...state,
            radioButtons: {
                ...state.radioButtons,
                radioButtonAuthors: newValue.length ? state.radioButtons.radioButtonAuthors : ''
            },
            searchFields: {
                ...state.searchFields,
                authors: newValue
            }
        });
    }

    function handleCategory(event, newValue){
        state.handleUpdate({
            ...state,
            radioButtons: {
                ...state.radioButtons,
                radioButtonCategory: newValue ? state.radioButtons.radioButtonCategory : ''
            },
            searchFields: {
                ...state.searchFields,
                category: newValue
            }
        });
    }

    function handleDescriptors(event, newValue){
        state.handleUpdate({
            ...state,
            radioButtons: {
                ...state.radioButtons,
                radioButtonDescriptors: newValue.length ? state.radioButtons.radioButtonDescriptors : ''
            },
            searchFields: {
                ...state.searchFields,
                descriptors: newValue
            }
        });
    }

    function handleLocation(event, newValue){
        state.handleUpdate({
            ...state,
            radioButtons: {
                ...state.radioButtons,
                radioButtonLocation: newValue ? state.radioButtons.radioButtonLocation : ''
            },
            searchFields: {
                ...state.searchFields,
                location: newValue
            }
        });
    }

    function handleTitle(event){
        state.handleUpdate({
            ...state,
            radioButtons: {...state.radioButtons},
            searchFields: {
                ...state.searchFields,
                title: event.target.value
            }
        });
    }

    function handleYear(event){
        state.handleUpdate({
            ...state,
            radioButtons: {
                ...state.radioButtons,
                radioButtonYear: event.target.value ? state.radioButtons.radioButtonYear : ''
            },
            searchFields: {
                ...state.searchFields,
                year: event.target.value
            }
        });
    }

    function handleRadioButtonAuthors(event, value){
        state.handleUpdate({
            ...state,
            searchFields: {...state.searchFields},
            radioButtons: {
                ...state.radioButtons,
                radioButtonAuthors: value
            },
        });
    }

    function handleRadioButtonCategory(event, value){
        state.handleUpdate({
            ...state,
            searchFields: {...state.searchFields},
            radioButtons: {
                ...state.radioButtons,
                radioButtonCategory: value
            },
        });
    }

    function handleRadioButtonDescriptors(event, value){
        state.handleUpdate({
            ...state,
            searchFields: {...state.searchFields},
            radioButtons: {
                ...state.radioButtons,
                radioButtonDescriptors: value
            },
        });
    }

    function handleRadioButtonLocation(event, value){
        state.handleUpdate({
            ...state,
            searchFields: {...state.searchFields},
            radioButtons: {
                ...state.radioButtons,
                radioButtonLocation: value
            },
        });
    }

    function handleRadioButtonYear(event, value){
        state.handleUpdate({
            ...state,
            searchFields: {...state.searchFields},
            radioButtons: {
                ...state.radioButtons,
                radioButtonYear: value
            },
        });
    }

    function handleAdvanceSearch(event){
        state.handleUpdate({
            ...state,
            radioButtons: {
                radioButtonAuthors: '',
                radioButtonCategory: '',
                radioButtonDescriptors: '',
                radioButtonLocation: '',
                radioButtonYear: ''
            },
            searchFields: {
                ...state.searchFields,
                authors: [],
                category: null,
                descriptors: [],
                location: null,
                year: ''
            },
            isAdvanceSearch: event.target.checked
        });
    }

    return(
        <Box sx={style.form}>
            <Box sx={style.formRow}>
                <TextField 
                    id='search_title'
                    label={constants.SEARCH_TITLE} 
                    value={state.searchFields.title}
                    required={true} 
                    fullWidth={false} 
                    handleChange={handleTitle}
                    style={style.formElement} />

                
                    <InputLabel id='advance_search_label' sx={style.formSwitch}>{constants.ADVANCE_SEARCH}</InputLabel>
                    <Switch 
                        id='advance_search'
                        checked={state.isAdvanceSearch}
                        onChange={handleAdvanceSearch} />
            </Box>

            {state.isAdvanceSearch &&
                <>
                    <Box sx={style.formRow}>
                        <AutocompleteField 
                            id='search_authors'
                            label={constants.SEARCH_AUTHORS}
                            value={state.searchFields.authors}
                            objectClass={constants.AUTHOR_CLASS}
                            multiple={true}
                            handleChange={handleAuthors}
                            style={style.formElement} />
                        
                        <RadioButton
                                id='search_authors_binary_operator'
                                value={state.radioButtons.radioButtonAuthors}
                                labelPlacement={'top'}
                                buttons={binaryOperations}
                                disabled={!state.searchFields.authors.length}
                                required={true}
                                handleChange={handleRadioButtonAuthors}
                                style={style.formRadioButton} />
                    </Box>

                    <Box sx={style.formRow}>
                        <AutocompleteField 
                            id='search_descriptors'
                            label={constants.SEARCH_DESCRIPTORS}
                            value={state.searchFields.descriptors}
                            objectClass={constants.DESCRIPTOR_CLASS}
                            multiple={true}
                            handleChange={handleDescriptors}
                            style={style.formElement} />
                        
                        <RadioButton
                            id='search_descriptors_binary_operator'
                            value={state.radioButtons.radioButtonDescriptors}
                            labelPlacement={'top'}
                            buttons={binaryOperations}
                            disabled={!state.searchFields.descriptors.length}
                            required={true}
                            handleChange={handleRadioButtonDescriptors}
                            style={style.formRadioButton} />
                    </Box>

                    <Box sx={style.formRow}>
                        <AutocompleteField 
                            id='search_category'
                            label={constants.SEARCH_CATEGORY}
                            value={state.searchFields.category}
                            objectClass={constants.CATEGORY_CLASS}
                            handleChange={handleCategory}
                            style={style.formElement} />
                        
                        <RadioButton
                            id='search_category_binary_operator'
                            value={state.radioButtons.radioButtonCategory}
                            labelPlacement={'top'}
                            buttons={binaryOperations}
                            disabled={!state.searchFields.category}
                            required={true}
                            handleChange={handleRadioButtonCategory}
                            style={style.formRadioButton} />
                    </Box>

                    <Box sx={style.formRow}>
                        <SelectField 
                            id='search_year'
                            label={constants.SEARCH_YEAR}
                            value={state.searchFields.year}
                            data={constants.PRODUCTION_YEAR_OPTIONS()}
                            handleChange={handleYear}
                            style={style.formElement} />

                                        
                        <RadioButton
                            id='search_year_binary_operator'
                            value={state.radioButtons.radioButtonYear}
                            labelPlacement={'top'}
                            buttons={binaryOperations}
                            disabled={!state.searchFields.year}
                            required={true}
                            handleChange={handleRadioButtonYear}
                            style={style.formRadioButton} />
                    </Box>

                    <Box sx={style.formRow}>
                        <AutocompleteField 
                            id='search_location'
                            label={constants.SEARCH_LOCATION}
                            value={state.searchFields.location}
                            objectClass={constants.LOCATION_CLASS}
                            handleChange={handleLocation}
                            style={style.formElement} />
                                    
                        <RadioButton
                            id='search_location_binary_operator'
                            value={state.radioButtons.radioButtonLocation}
                            labelPlacement={'top'}
                            buttons={binaryOperations}
                            disabled={!state.searchFields.location}
                            required={true}
                            handleChange={handleRadioButtonLocation}
                            style={style.formRadioButton} />
                    </Box>
                </>
            }

            <Button
                id='search_button'
                text={constants.SEARCH}
                isButtonDisabled={buttonDisabled}
                handleClick={handleSearch}
                color='primary' />
        </Box>
    );
}

export default SearchForm;