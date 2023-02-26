import React, { forwardRef } from 'react';
import * as constants from '../../constants';

import MaterialTable from '@material-table/core';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Detail from '@mui/icons-material/Visibility';
import Edit from '@mui/icons-material/Edit';
import FilterList from '@mui/icons-material/FilterList';
import FirstPage from '@mui/icons-material/FirstPage';
import LastPage from '@mui/icons-material/LastPage';
import Remove from '@mui/icons-material/Delete';

const tableIcons = {
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  };

const IndexTable = ({data, dialogState}) => {
    const loading = data.length === 0;
    const actions = [
        { icon: () => <Edit />, tooltip: 'Editar', onClick: (event, row) => dialogState.handleDialog(constants.EDIT_ACTION, row.id) },
        { icon: () => <Detail />, tooltip: 'Detalle', onClick: (event, row) => dialogState.handleDialog(constants.DETAIL_ACTION, row.id) },
        { icon: () => <Remove />, tooltip: 'Remover', onClick: (event, row) => dialogState.handleDialog(constants.REMOVE_ACTION, row.id) }
    ]
    
    return(
        <MaterialTable
            actions={actions}
            columns={constants.COLUMN_LABELS[dialogState.objectClass]}
            icons={tableIcons}
            isLoading={loading}
            data={data}
            localization={constants.TABLE_LOCALIZATION}
            options={{
                actionsColumnIndex: -1,
                draggable: false,
                emptyRowsWhenPaging: false,
                filtering: true,
                paging: true,
                pageSize: 5,
                pageSizeOptions: [5, 10, 25, 50],
                search: false,
                selection: false,
                showTitle: false,
                toolbar:false
            }} />
    );
}

export default IndexTable;