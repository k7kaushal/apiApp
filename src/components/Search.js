import React from 'react'
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal1 from './Modal1';


const Search = ({users , Delete}) => {
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

    const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>Search
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Search</Form.Label>
        <Form.Control type="text" placeholder="Search for..." name="name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/><br></br>
        </Form.Group>
    </Form>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Username</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Details</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.username.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.includes(searchQuery) || user.address.street.toLowerCase().includes(searchQuery.toLowerCase()) || user.address.city.toLowerCase().includes(searchQuery.toLowerCase())  || user.address.zipcode.toLowerCase().includes(searchQuery.toLowerCase()) ).map((user) => (
          <StyledTableRow key={user.id}>
          <StyledTableCell component="th" scope="row">{user.id}</StyledTableCell>
          <StyledTableCell align="center">{user.name}</StyledTableCell>
          <StyledTableCell align="center">{user.username}</StyledTableCell>
          <StyledTableCell align="center">{user.email}</StyledTableCell>
          
          <StyledTableCell align="center"> <Modal1 user = {user}/> </StyledTableCell>
          <StyledTableCell align="center"><Button variant="contained" color= 'success' startIcon={<DeleteIcon />} onClick={() => Delete(user.id)}>Delete</Button></StyledTableCell>
          </StyledTableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Search