import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
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
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

export default function Committees() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <>
            <div>
                <h2>Types of Committees</h2>
                <h1>Want to gain new experiences? Come join!</h1>
            </div>
            <div>
            <Box sx={{ width: '75%', margin: 'auto' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile >
                        <Tab label="Fundraising" {...a11yProps(0)} />
                        <Tab label="Marketing" {...a11yProps(1)} />
                        <Tab label="Professional" {...a11yProps(2)} />
                        <Tab label="Social" {...a11yProps(3)} />
                        <Tab label="Technology" {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Fundraising
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Marketing
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Professional
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Social
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Technology
                </TabPanel>
            </Box>
            </div>

        </>
    )
}