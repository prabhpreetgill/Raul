import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function table(rows) {
  return (
    <TableContainer component={Paper} sx={{borderRadius: '20px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#2F2F2F', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}>
            <TableCell sx={{color: 'white'}}>First Name</TableCell>
            <TableCell sx={{color: 'white'}}>Last Name</TableCell>
            <TableCell sx={{color: 'white'}}>Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:nth-of-type(odd)': { backgroundColor: 'white' }, '&:nth-of-type(even)': { backgroundColor: '#ECEBEB' } }}
            >
              <TableCell component="th" scope="row">
                {row.fname}
              </TableCell>
              <TableCell>{row.lname}</TableCell>
              <TableCell>{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default table;
