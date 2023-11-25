import React from 'react';
import { Box} from '@mui/material';
import Btn from '../Components/Btn';


function PBetween() {


  return (
    <Box sx={{backgroundColor: '#8BC6EC', backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',  height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{width: '80vw', display: 'flex', justifyContent: 'space-evenly', height: '80vh', alignItems: 'center'}}>
            {Btn('/aps/gndj/schedule', 'Schedule')}
            {Btn('/aps/gndj/gnp', 'Organize')}
         </Box>
         <Box sx={{display: 'flex', justifyContent: 'left', width: '80vw', height: '20vh'}}>
            {Btn('/aps', 'Back')}        
        </Box>
    </Box>
  );
}

export default PBetween;
