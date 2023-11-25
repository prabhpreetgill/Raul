import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="1AM - 3AM"/>
        <Tab label="3AM - 5AM"/>
        <Tab label="5AM - 7AM"/>
        <Tab label="7AM - 9AM"/>
        <Tab label="9AM - 11AM"/>
        <Tab label="11AM - 1PM"/>
        <Tab label="1PM - 3PM"/>
        <Tab label="3PM - 5PM"/>
        <Tab label="5PM - 7PM"/>
        <Tab label="7PM - 9PM"/>
        <Tab label="9PM - 11PM"/>
      </Tabs>
    </Box>
  );
}