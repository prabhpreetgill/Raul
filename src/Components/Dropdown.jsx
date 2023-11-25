import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { CheckboxContext } from './CheckboxContent';
import { useContext } from 'react';
import CancelIcon from '@mui/icons-material/Cancel'; // Import the cancel icon



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  '1AM - 3AM',
  '3AM - 5AM',
  '5AM - 7AM',
  '7AM - 9AM',
  '9AM - 11AM',
  '11AM - 1PM',
  '1PM - 3PM',
  '3PM - 5PM',
  '5PM - 7PM',
  '7PM - 9PM',
  '9PM - 11PM',
  '11PM - 1AM',
];

function getStyles(name, personName, theme) {
    
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip() {
    const { isCheckedFriday, isCheckedSaturday, isCheckedSunday } = useContext(CheckboxContext);
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        
        // Convert the value to an array if it's a string, or use the value directly if it's already an array
        let selected = typeof value === 'string' ? value.split(',') : value;
      
        // Create a new array to hold the updated selections with day labels
        let updatedSelections = [];
        
        // Remove any previous day labels from the current selections
        selected = selected.map(time => time.replace(/(Friday - |Saturday - |Sunday - )/g, ''));
      
        // Add the current day labels to the selections
        selected.forEach(time => {
          if (isCheckedFriday) updatedSelections.push(`Friday - ${time}`);
          if (isCheckedSaturday) updatedSelections.push(`Saturday - ${time}`);
          if (isCheckedSunday) updatedSelections.push(`Sunday - ${time}`);
          if (!isCheckedFriday && !isCheckedSaturday && !isCheckedSunday) updatedSelections.push(time);
        });
      
        setPersonName(updatedSelections);
      };

      const handleDelete = (chipToDelete) => () => {
        setPersonName((chips) => chips.filter((chip) => chip !== chipToDelete));
      };
      
      
      
  
    // Render function for selected values
    const renderSelectedValues = (selected) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, zIndex: '1'}}>
          {selected.map((value) => (
            <Chip
              key={value}
              label={value}
              onDelete={handleDelete(value)}
              deleteIcon={<CancelIcon />}
            />
          ))}
        </Box>
      );
  
      return (
        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">Time</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Time" />}
              renderValue={renderSelectedValues}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      );
    }