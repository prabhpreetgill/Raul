
import React, { useState } from 'react';
import { Box} from '@mui/material';
import '../css/raul.css'
import AkhandPath from '../Class/ap'
import Actions from './Actions';


const ap = new AkhandPath('Guru Nanak Dev Ji', 'December 1 2023', 15); 

function PaathDisplay() {
  let time;
  const [hoveredBoxId, setHoveredBoxId] = useState(null); // New state to track hovered button
  const numOfPaath = 26; // Set this to your desired number
  const boxes = [];
  let leftSideBoxes = [];
  let topBoxes = [];
  let rightSideBoxes = [];

 


  const emptySlots = () => {
    for (let i = 1; i <= numOfPaath; i++) {
      boxes.push({ id: i, label: `Paathi ${i}` });
    }
    leftSideBoxes = boxes.filter(box => box.id <= 7);  // Adjust numbers as needed
    leftSideBoxes.reverse();
    topBoxes = boxes.filter(box => box.id <= 19 && box.id > 7);      // Adjust numbers as needed
    rightSideBoxes = boxes.filter(box => box.id <= 26 && box.id > 19);  // Adjust numbers as needed
  };


  const isLessThanAnHour = () => {
    if (!time) return false;
    const now = new Date();
    const oneHour = 60 * 60 * 1000 * 2; // milliseconds in an hour
    return now - time < oneHour;
  };

  // Determine the sections for the upside-down U shape
  
  const getBoxStyle = (boxId) => ({
    ...boxStyle,
    backgroundColor: isLessThanAnHour() ? 'rgba(193, 255, 193, 0.2)' : 'rgba(255, 140, 156, 0.4)',
    boxShadow: hoveredBoxId === boxId ? '0px 0px 20px rgba(0, 0, 0, 0.5)' : 'none', 
  });

  const boxStyle = {
    width: '85px',
    height: '85px',
    border: '2px solid',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    margin: '5px',
    borderRadius: '20px',
    transitionDuration: '0.3s'
  };

  return (
    <Box sx={{display: 'flex', width: '100vw', justifyContent: 'center', marginTop: '30px'}}>
          {emptySlots()}
          {/* <button onClick={emptySlots} style={{height: "50px", width: '50px'}}>Generate Boxes</button> */}
         {/* Left Side */}
         <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            {leftSideBoxes.map(box => (
              <button key={box.id}
                      onMouseEnter={() => setHoveredBoxId(box.id)}
                      onMouseLeave={() => setHoveredBoxId(null)}
                      style= {getBoxStyle(box.id)}>
                <span style={{fontSize: '1.5rem', textAlign: 'center'}}>{box.id}</span> {box.label}
              </button>
            ))}
         </Box>

          {/* Top Side */}
          <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                {topBoxes.map(box => (
                  <button key={box.id}
                      onMouseEnter={() => setHoveredBoxId(box.id)}
                      onMouseLeave={() => setHoveredBoxId(null)}
                      style= {getBoxStyle(box.id)}>
                    <span style={{fontSize: '1.5rem', textAlign: 'center'}}>{box.id}</span> {box.label}
                  </button>
                ))}
            </Box>
                <Actions/>
          </Box>

          {/* Right Side */}
          <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            {rightSideBoxes.map(box => (
              <button key={box.id}
                      onMouseEnter={() => setHoveredBoxId(box.id)}
                      onMouseLeave={() => setHoveredBoxId(null)}
                      style= {getBoxStyle(box.id)}>
                <span style={{fontSize: '1.5rem', textAlign: 'center'}}>{box.id}</span> Hardeep Singh
              </button>
            ))}
          </Box>
        </Box>
  );
}

export default PaathDisplay;
export { ap };
