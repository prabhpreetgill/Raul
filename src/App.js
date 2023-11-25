import React from 'react';
import { Box } from '@mui/material';
import './css/raul.css'
import PaathDisplay from './Components/PaathDisplay';

function App() {
  return (
    <Box sx={{backgroundColor: '#8BC6EC', backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)', height: '100vh', display: 'flex'}}>
        <PaathDisplay/>
    </Box>
    
  );
}

export default App;
