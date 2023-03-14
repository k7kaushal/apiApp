import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal1 from './Modal1';
import SearchIcon from '@mui/icons-material/Search';
import user from '../features/user';


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const Data = ({id, users, Delete}) => {
  
  console.log(users.map((user) => user.id));
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const themeColor = useSelector((state) => state.theme.value);
  const [searchQuery, setSearchQuery] = useState("");

  // var users1 = useSelector((state) => state.user.value);
  // users = users.concat(users1);

return (
  <>
  <Form style={{width: 300}}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Button style={{color : "white"}} startIcon={<SearchIcon />} ></Button>
    <Form.Control type="text" placeholder="Search for..." name="name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
    </Form.Group>
  </Form>
  <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
      <TableHead style={{backgroundColor : "black", color:"White "}}>
          <TableRow>
            <TableCell style={{color:"White "}}>Id</TableCell>
            <TableCell style={{color:"White "}} align="center">Name</TableCell>
            <TableCell style={{color:"White "}} align="center">Username</TableCell>
            <TableCell style={{color:"White "}} align="center">Email</TableCell>
            <TableCell style={{color:"White "}} align="center">Details</TableCell>
            <TableCell style={{color:"White "}} align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {(rowsPerPage > 0 ? users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.username.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.includes(searchQuery) || user.address.street.toLowerCase().includes(searchQuery.toLowerCase()) || user.address.city.toLowerCase().includes(searchQuery.toLowerCase())  || user.address.zipcode.toLowerCase().includes(searchQuery.toLowerCase())).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage): users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.username.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.includes(searchQuery) || user.address.street.toLowerCase().includes(searchQuery.toLowerCase()) || user.address.city.toLowerCase().includes(searchQuery.toLowerCase())  || user.address.zipcode.toLowerCase().includes(searchQuery.toLowerCase())) ).map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
              {user.id}
              </TableCell>
              <TableCell  align="center">
              {user.name}
              </TableCell>
              <TableCell align="center">
              {user.username}
              </TableCell>
              <TableCell align="center">
              {user.email}
              </TableCell>
              <TableCell  align="center">
              <Modal1 user = {user}/>
              </TableCell>
              <TableCell align="center">
              <Button variant="contained" color= 'success' startIcon={<DeleteIcon />} onClick={() => Delete(user.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter >
          <TableRow >
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  </>
);
};
export default Data