import { Box } from '@mui/material';
import Clock from './Clock';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Paathi from '../Class/paathi';
import { ap } from './PaathDisplay';
import table from './Table';
import Btn from './Btn';



function Actions() {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [fname, setFname] = React.useState('');
    const [lname, setLname] = React.useState('');
    const [number, setNumber] = React.useState('');

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));

    const handleFname = e => {
        setFname(e.target.value)
    }

    const handleLname = e => {
        setLname(e.target.value)
    }

    const handleNumber = e => {
        setNumber(e.target.value)
    }
  
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClickOpen1 = () => {
        setOpen1(true);
      };

      const handleClose1 = () => {
        setOpen1(false);;
      };
  
    const handleClose = () => {
      setOpen(false);
      const newPaathi = new Paathi(fname, lname, number);
      ap.addPaathi(newPaathi);
    };
    
  return (
    <Box sx={{display: 'flex', height: '60vh',justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column'}}>
        <Clock/>
        <button className='check-in' onClick={handleClickOpen1}>
            Check In
        </button>
        {Btn('/aps/gndj', 'Back')}
        

      <Dialog
        fullScreen={fullScreen}
        open={open1}
        onClose={handleClose1}
        aria-labelledby="responsive-dialog-title"
        sx={{ height: '100vh'}}
      >
        <DialogTitle id="responsive-dialog-title" sx={{textAlign: 'center', fontSize: '3rem', fontWeight: 'bold'}}>
          All Paathi's
        </DialogTitle>
        <DialogContent>
          {table(ap.paathis)}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose1}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Actions;
