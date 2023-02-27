import React, { useEffect, useState } from 'react';
import * as constants from '../../constants';
import { request } from './../Utils/Actions';
import CardRow from '../Utils/CardRow';

import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const style = {
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%'
    },

    titleContainer:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%'
    },

    title:{
        marginBottom: '20px',
        marginLeft: '8%' 
    },

    card:{
        borderRadius: '30px',
        width: '90%'
    },

    cardRow:{
        marginRight: '10px'
    }
}

/*
 * Componente encargado de desplegar la información completa de la producción correspondiente. dicha producción es la
 * dueña del id que se envia como parámetro en el enlace.
 */
function Result(props){
    const { id } = useParams();
    const [data, setData] = useState({
        instance: {
            id: id,
            title: '',
            summary: '',
            year: '',
            clasification: '',
            webDirection: '',
            category: '',
            location: '',
            authors: '',
            descriptors: ''
        },
        handleUpdate: function(data){
            setData({
                ...data,
                id: data.id,
                title: data.title,
                summary: data.summary,
                year: data.year,
                clasification: data.clasification,
                webDirection: data.webDirection,
                category: data.category,
                location: data.location,
                authors: data.authors,
                descriptors: data.descriptors,
            })
        }
    });

    const cardRows = [
        {label: constants.RESULT_TITLE, value: data.title, paragraph: false},
        {label: constants.RESULT_AUTHORS, value: data.authors, paragraph: false},
        {label: constants.RESULT_DESCRIPTORS, value: data.descriptors, paragraph: false},
        {label: constants.RESULT_CLASIFICATION, value: data.clasification, paragraph: false},
        {label: constants.RESULT_CATEGORY, value: data.category, paragraph: false},
        {label: constants.RESULT_LOCATION, value: data.location, paragraph: false},
        {label: constants.RESULT_YEAR, value: data.year, paragraph: false},
        {label: constants.RESULT_WEB_DIRECTION, value: data.webDirection, paragraph: false},
        {label: constants.RESULT_SUMMARY, value: data.summary, paragraph: true}
    ]

    useEffect(() => {
        async function fetchData(){
            request(data, constants.PRODUCTION_CLASS, constants.DETAIL_ACTION, null, null);
        }
        fetchData();
    }, []);

    return(
        <Box sx={style.container}>
            <Box sx={style.titleContainer}>
                <Typography variant='h4' sx={style.title}>{constants.RESULT_PAGE_TITLE}</Typography>
            </Box>

            <Card raised={true} sx={style.card}>
                <CardContent>
                    {cardRows.map(row => 
                        <CardRow 
                            key={row.label}
                            label={row.label} 
                            value={row.value} 
                            variant='subtitle1' 
                            style={style.cardRow}
                            paragraph={row.paragraph} />
                    )}
                </CardContent>
            </Card>
        </Box>
    );
}

export default Result;