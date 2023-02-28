import React from 'react';
import * as constants from '../../constants';
import CardRow from '../Utils/CardRow';

import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

const style = {
    card:{
        marginBottom: '10px',
        borderRadius: '30px',
        width: '100%',
    },

    cardTitle:{
        color: 'black',
        marginBottom: 0,
        marginRight: '10px'
    },

    cardContent:{
        color: 'black'
    },

    cardRow:{
        marginRight: '10px'
    },

    link: {
        textDecoration: 'none'
    }
}

/*
 * Este componente es el encargado de representar a cada carta en la grilla de resultados, en este se despliega la 
 * información de cada uno de los resultados de la búsqueda, además se establece un evento cliqueable que consiste en
 * abrir en una nueva pestaña el componente "Result" con el id respectivo, esto con el fin de desplegar toda la 
 * información de dicha producción.
 */
function SearchResult({data}){
    const cardRows = [
        {label: constants.RESULT_DESCRIPTORS, value: data.descriptors, paragraph: false},
        {label: constants.RESULT_CATEGORY, value: data.category, paragraph: false},
        {label: constants.RESULT_LOCATION, value: data.location, paragraph: false},
        {label: constants.RESULT_YEAR, value: data.year, paragraph: false},
        {label: constants.RESULT_SUMMARY, value: data.summary, paragraph: true}
    ]

    return(
        <Card raised={true} style={style.card}>
            <CardActionArea>
                <Link to={'/resultado/' + data.id} target="_blank" rel="noopener noreferrer" style={style.link} >
                    <CardHeader 
                        title={
                            <CardRow 
                                label={constants.RESULT_TITLE} 
                                value={data.title} 
                                variant='h5' 
                                style={style.cardTitle} />
                        }
                        subheader={
                            <CardRow 
                                label={constants.RESULT_AUTHORS} 
                                value={data.authors} 
                                variant='subtitle1'
                                style={style.cardRow} />
                        } />
                    <CardContent sx={style.cardContent}>
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
                </Link>
            </CardActionArea>
        </Card>
    );
}

export default SearchResult;