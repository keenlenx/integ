import React from "react";

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const TableHeader = ()=>{

return<TableHead>
    <TableRow>
        <TableCell>
            Flag
        </TableCell>
        <TableCell>
            Name
        </TableCell>
        <TableCell>
            Region
        </TableCell>
        <TableCell>
            Population
        </TableCell>
        <TableCell>
            Languages
        </TableCell>
        </TableRow>

</TableHead>
}

export default TableHeader;