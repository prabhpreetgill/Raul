import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import '../css/raul.css'
import table from '../Components/Table';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Paathi from '../Class/paathi';
import Btn from '../Components/Btn'


function PViewer(){

    const rows = [{fname: 'Prabh', lname: 'Gill', phone: '6477710322'}, 
                {fname: 'Ravneet', lname: 'Gill', phone: '6477710322'}]

    const [open, setOpen] = React.useState(false);
    const [fname, setFname] = React.useState('');
    const [lname, setLname] = React.useState('');
    const [number, setNumber] = React.useState('');
    const [rowies, setRowiers] = React.useState(rows);

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

    const handleClose = () => {
      setOpen(false);
    }
  
    const handleSubmit = () => {
      setOpen(false);
      const newPaathi = new Paathi(fname, lname, number);
      setRowiers([
        ...rowies,
        newPaathi
      ])
    };

    

  return (
    <Box sx={{backgroundColor: '#8BC6EC', backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',  height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant='h2' sx={{fontWeight: 'bold', marginBottom: '50px'}}>
            Paathi List
        </Typography>
        <Box sx={{width: '50vw', height: '50vh'}}>
            {table(rowies)}
        </Box>
        <Box sx={{width: '80vw', display: 'flex', justifyContent: 'space-between'}}>
            {Btn('/', 'Back')}
            <button className='check-in' onClick={handleClickOpen}>
                Add Paathi
            </button>
        </Box>
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" sx={{textAlign: 'center', fontSize: '3rem', fontWeight: 'bold'}}>
          Add Paathi
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="fname"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleFname}
          />
          <TextField
            autoFocus
            margin="dense"
            id="lname"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleLname}
          />
          <TextField
            autoFocus
            margin="dense"
            id="number"
            label="Phone Number"
            type="tel"
            fullWidth
            variant="standard"
            onChange={handleNumber}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default PViewer;