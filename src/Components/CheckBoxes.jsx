import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { CheckboxContext } from './CheckboxContent';
import { useContext } from 'react';


export default function FormControlLabelPosition() {
    const { isCheckedFriday, setCheckedFriday, isCheckedSaturday, setCheckedSaturday, isCheckedSunday, setCheckedSunday } = useContext(CheckboxContext);

    const handleFridayChange = (event) => {
      setCheckedFriday(event.target.checked);
    };
  
    const handleSaturdayChange = (event) => {
      setCheckedSaturday(event.target.checked);
    };
  
    const handleSundayChange = (event) => {
      setCheckedSunday(event.target.checked);
    };

    console.log(isCheckedFriday + ' ' + isCheckedSaturday + ' ' + isCheckedSunday);

  return (
    <FormControl component="fieldset" sx={{marginTop: '20px'}}>
      <FormLabel component="legend">Days</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="Friday"
          control={<Checkbox checked={isCheckedFriday} onChange={handleFridayChange} />}
          label="Friday"
          labelPlacement="top"
        />
        <FormControlLabel
          value="Saturday"
          control={<Checkbox checked={isCheckedSaturday} onChange={handleSaturdayChange} />}
          label="Saturday"
          labelPlacement="top"
        />
        <FormControlLabel
          value="Sunday"
          control={<Checkbox checked={isCheckedSunday} onChange={handleSundayChange} />}
          label="Sunday"
          labelPlacement="top"
        />
      </FormGroup>
    </FormControl>
  );
}

