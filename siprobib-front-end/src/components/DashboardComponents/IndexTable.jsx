import React, { useState } from 'react';
import * as constants from '../../constants';
import IndexTableRow from './IndexTableRow';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from "@mui/material/TablePagination";
import TableRow from '@mui/material/TableRow';

const IndexTable = ({data, dialogState}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalRowsNumber, setTotalRowsNumber] = useState(data.length);
    
    function handleChangePage(event, newPage){
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event){
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    return(
        <TableContainer>
            <Table sx={{minWidth: 650}} size='small' aria-label='Tabla de registros'>
                <TableHead>
                    <TableRow key="table_header">
                        {constants.COLUMN_LABELS[dialogState.objectClass].map((column) => (
                            <TableCell key={column}>{column}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                        <TableRow key={row.id}>
                            <IndexTableRow row={row} dialogState={dialogState} />
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
            <TablePagination
                rowsPerPageOptions={[10, 25, 50, 100]}
                component="div"
                count={totalRowsNumber}
                rowsPerPage={rowsPerPage}
                page={page}
                labelRowsPerPage={constants.TABLE_PAGINATION_LABEL
                }
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
}

export default IndexTable;