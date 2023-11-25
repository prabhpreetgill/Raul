import Box from '@mui/material/Box';
import React from 'react';
import { Typography } from '@mui/material';
import '../css/raul.css'
import Btn from '../Components/Btn'


function APManager() {
  return (
    <Box sx={{backgroundColor: '#8BC6EC', backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',  height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant='h2' sx={{fontWeight: 'bold', marginBottom: '50px'}}>
            Akhand Paath Manager™
        </Typography>
        <Box sx={{width: '40vw', display: 'flex', justifyContent: 'space-evenly'}}>
            {Btn('aps' ,'Akhand Paaths')}
            {Btn('pts' ,'Paathis')}
        </Box>
        
    </Box>
  );
}

export default APManager;
