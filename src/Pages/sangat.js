import Box from '@mui/material/Box';
import React from 'react';
import Navbar from '../Components/Navbar';
import Table from '../Components/Table'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';


function sangat() {
  return (
    <Box sx={{background: '#feffff',  height: '100vh'}}>
      <Navbar/>   
      <Box sx={{display: 'flex',  width: '90vw', alignItems:'center' ,height: '20vh', justifyContent: 'right'}}>
        <Typography variant='h2' sx={{marginRight: '20vw'}}>
            Sangat Database
        </Typography>
        <Button variant="contained" size='large' sx={{backgroundColor: '#2F2F2F'}}>Add Sangat</Button>
      </Box>
      <Box sx={{display: 'flex',  width: '100vw', alignItems: 'center', justifyContent: 'center', height: '80vh'}}>
            <Table/>
      </Box>
    </Box>
  );
}

export default sangat;
