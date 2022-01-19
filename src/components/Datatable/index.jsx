import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import './styles/index.css'


export default function TableData(props) {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));



    return (<div className='table_data'>
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left"> Id </StyledTableCell>
                        <StyledTableCell align="left">SirName</StyledTableCell>
                        <StyledTableCell align="left">Name</StyledTableCell>
                        <StyledTableCell align="left">Age</StyledTableCell>
                        <StyledTableCell align="left">Gender</StyledTableCell>
                        <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.list.map((row) => (
                        <StyledTableRow key={row.Name}>
                            <StyledTableCell align="left">{row.id}</StyledTableCell>
                            <StyledTableCell align="left">{row.Sirname}</StyledTableCell>
                            <StyledTableCell align="left">{row.Name}</StyledTableCell>
                            <StyledTableCell align="left">{row.age}</StyledTableCell>
                            <StyledTableCell align="left">{row.gender}</StyledTableCell>
                            <StyledTableCell align="right">
                                <IconButton aria-label="delete" onClick={() => props.handleDel(row.id)}>
                                    <DeleteSharpIcon />

                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    </div>)
}
