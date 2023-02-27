import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React, { ReactNode } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link} from "react-router-dom";
import { NavLink } from "react-router-dom";
const ContentArea =({data}:any):any=>{
   
    return(
        <TableBody>
{data?.map((results:any)=><TableRow key={results.name.common}>
    <TableCell><img src={results.flags.png} width="30px" height="30px"/></TableCell>
    <TableCell>{results.name.common}</TableCell> 
    <TableCell>{results.region}</TableCell>
    <TableCell>{results.population}</TableCell>
    <TableCell></TableCell>
    <TableCell><NavLink to={`country/${results.name.common}`}><ArrowForwardIosIcon/></NavLink></TableCell>
    
    </TableRow>)}  
   </TableBody>
    )
        
  
}
export default ContentArea;