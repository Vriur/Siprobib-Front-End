import React from 'react';
import * as constants from '../../constants';

import DetailIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Delete';
import TableCell from '@mui/material/TableCell';

const IndexTableRow = ({row, dialogState}) => {
    return(
        <>
            {
                Object.keys(row).map((value) => (
                    value !== 'id' && <TableCell key={value + "_" + row.id}>{row[value]}</TableCell>
                ))
            }
            <TableCell key={"actions_" + row.id}>
                <IconButton 
                    id={"edit_" + row.id} 
                    onClick={() => dialogState.handleDialog(constants.EDIT_ACTION, row.id)} 
                    sx={{margin: '0 0 10px 10px'}}><EditIcon /></IconButton>

                <IconButton 
                    id={"detail_" + row.id} 
                    onClick={() => dialogState.handleDialog(constants.DETAIL_ACTION, row.id)} 
                    sx={{margin: '0 0 10px 10px'}}><DetailIcon /></IconButton>

                <IconButton 
                    id={"remove_" + row.id} 
                    onClick={() => dialogState.handleDialog(constants.REMOVE_ACTION, row.id)} 
                    sx={{margin: '0 0 10px 10px'}}><RemoveIcon /></IconButton>
            </TableCell>
        </>
    );
}

export default IndexTableRow;