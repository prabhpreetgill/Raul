import Box from '@mui/material/Box';
import React from 'react';
import { Typography } from '@mui/material';
import '../css/raul.css'
import { useNavigate } from "react-router-dom";
import Btn from '../Components/Btn'

function Aps() {
    const rows = ['Guru Nanak Dev Ji', 'Guru Gobind Singh Ji', 'Sahabzadey']

    let navigate = useNavigate();


  const next = () => {
    let path = '/aps/gndj';
    navigate(path)
  }

  return (
    <Box sx={{backgroundColor: '#8BC6EC', backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',  height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant='h2' sx={{fontWeight: 'bold', marginBottom: '50px'}}>
            Akhand Paaths
        </Typography>
        <Box sx={{display: 'flex', flexDirection: 'column', width: '50vw', height: '60vh'}}>
            <Typography variant='h3' sx={{marginBottom: '20px', textDecoration: 'underline'}}>
                Current
            </Typography>
            {rows.map((row) => ( 
                    <Typography variant='h4' sx={{marginBottom: '50px', cursor: 'pointer', width: 'max-content'}} onClick={next}>
                        {row}
                    </Typography>
            ))}
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'left', width: '80vw'}}>
            {Btn('/', 'Back')}
        </Box>
    </Box>
  );
}

export default Aps;
