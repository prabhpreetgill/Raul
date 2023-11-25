import { Box} from '@mui/material';
import Btn from '../Components/Btn';
import Tabs from '../Components/Tabs'
import '../css/raul.css'
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
import Checkboxes from '../Components/CheckBoxes';
import Dropdown from '../Components/Dropdown'




function PBetween() {
    const [open, setOpen] = React.useState(false);
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
  
    const handleClose = () => {
      setOpen(false);
      const newPaathi = new Paathi(fname, lname, number);
    };

  return (
    <Box sx={{backgroundColor: '#8BC6EC', backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',  height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{width: '80vw', display: 'flex', justifyContent: 'space-evenly', height: '80vh', alignItems: 'center'}}>
            <Tabs/>
         </Box>
         <Box sx={{display: 'flex', justifyContent: 'space-between', width: '80vw', height: '20vh'}}>
            {Btn('/aps', 'Back')}        
            <button className='check-in' onClick={handleClickOpen}>Add</button>
        </Box>
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >        <DialogTitle id="responsive-dialog-title" sx={{textAlign: 'center', fontSize: '3rem', fontWeight: 'bold'}}>
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
          <Checkboxes/>
          <Dropdown/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default PBetween;
