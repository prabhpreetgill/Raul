import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TimeTabs from './TimeTabs';
import FriTimetabs from './FriTimeTabs'
import SunTimeTabs from './SunTimeTab'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', height: 224, backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '30px'}}
    >
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider'}}
        >
          <Tab label="Friday" {...a11yProps(0)} />
          <Tab label="Saturday" {...a11yProps(1)} />
          <Tab label="Sunday" {...a11yProps(2)} />
        </Tabs>
      </Box>
      
      <TabPanel value={value} index={0}>
        <FriTimetabs/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TimeTabs/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SunTimeTabs/>
      </TabPanel>
    </Box>
  );
}