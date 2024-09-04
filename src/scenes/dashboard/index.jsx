import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { fetchDashboardKPIs } from '../../api';

const Dashboard = () => {
  const [data, setData] = useState({});
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchDashboardKPIs();
        console.log('Fetched data:', result); // Log data for debugging
        setData(result); // Set the fetched data to state
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    getData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Extract the relevant part of the data
  const kpis = data?.data?.LDV_EC200U_ || {}; // Adjust based on your data structure

  return (
    <Box m="20px" display="flex" flexDirection="column" height="100vh">
      {/* SEARCH & DATE PICKERS */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mt="20px">
        <Box 
          display="flex" 
          alignItems="center" 
          borderBottom="1px solid #d3d3d3" 
          px={1} 
          py={0.5} 
          sx={{ backgroundColor: 'white' }}
        >
          <SearchIcon sx={{ color: "#707070", mr: 1 }} />
          <TextField 
            variant="standard" 
            placeholder="Search Devices" 
            InputProps={{ disableUnderline: true }} 
            sx={{ width: '200px', fontSize: '14px', color: '#707070' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>
        <Box display="flex" alignItems="center" gap="10px">
          <TextField
            variant="standard"
            label="Start Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            InputProps={{ endAdornment: <CalendarTodayIcon sx={{ color: "#707070" }} /> }}
            sx={{ width: '150px', fontSize: '14px' }}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <TextField
            variant="standard"
            label="End Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            InputProps={{ endAdornment: <CalendarTodayIcon sx={{ color: "#707070" }} /> }}
            sx={{ width: '150px', fontSize: '14px' }}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Box>
      </Box>

      {/* GRID & STAT BOXES */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="20px"
        mt="20px"
        flexGrow={1}
      >
        {/* STAT BOXES */}
        <Box gridColumn="span 4" backgroundColor="#00A86B" p="20px" borderRadius="8px" textAlign="center">
          <Typography variant="h1" color="textPrimary">
            {kpis.totalDistance ?? 'N/A'}
          </Typography>
          <Typography variant="h2" color="textSecondary">
            Total Distance (Km)
          </Typography>
        </Box>
        <Box gridColumn="span 4" backgroundColor="#00A86B" p="20px" borderRadius="8px" textAlign="center">
          <Typography variant="h1" color="textPrimary">
            {kpis.carbonSaving ?? 'N/A'}
          </Typography>
          <Typography variant="h2" color="textSecondary">
            Carbon Saving (Kg)
          </Typography>
        </Box>
        <Box gridColumn="span 4" backgroundColor="#00A86B" p="20px" borderRadius="8px" textAlign="center">
          <Typography variant="h1" color="textPrimary">
            {kpis.costSaving ?? 'N/A'}
          </Typography>
          <Typography variant="h2" color="textSecondary">
            Cost Saving (₹)
          </Typography>
        </Box>
        <Box gridColumn="span 4" backgroundColor="#00A86B" p="20px" borderRadius="8px" textAlign="center">
          <Typography variant="h1" color="textPrimary">
            {kpis.purchaseSavings ?? 'N/A'}
          </Typography>
          <Typography variant="h2" color="textSecondary">
            Purchase Saving (₹)
          </Typography>
        </Box>
        <Box gridColumn="span 4" backgroundColor="#00A86B" p="20px" borderRadius="8px" textAlign="center">
          <Typography variant="h1" color="textPrimary">
            {kpis.tbc1 ?? 'N/A'}
          </Typography>
          <Typography variant="h2" color="textSecondary">
            TBC
          </Typography>
        </Box>
        <Box gridColumn="span 4" backgroundColor="#00A86B" p="20px" borderRadius="8px" textAlign="center">
          <Typography variant="h1" color="textPrimary">
            {kpis.tbc2 ?? 'N/A'}
          </Typography>
          <Typography variant="h2" color="textSecondary">
            TBC
          </Typography>
        </Box>

        {/* BUTTONS */}
        <Box gridColumn="span 4">
          <Button 
            fullWidth 
            sx={{ 
              backgroundColor: "#00A86B", 
              color: "#ffffff", 
              fontSize: "16px",
              borderRadius: "8px",
              padding: "10px",
              textTransform: "none"
            }}
            onClick={() => setActiveSection('vehicle')}
          >
            Vehicle Details
          </Button>
        </Box>
        <Box gridColumn="span 4">
          <Button 
            fullWidth 
            sx={{ 
              backgroundColor: "#ffffff", 
              color: "#00A86B", 
              fontSize: "16px",
              border: "2px solid #00A86B",
              borderRadius: "8px",
              padding: "10px",
              textTransform: "none"
            }}
            onClick={() => setActiveSection('bms')}
          >
            BMS Details
          </Button>
        </Box>
        <Box gridColumn="span 4">
          <Button 
            fullWidth 
            sx={{ 
              backgroundColor: "#ffffff", 
              color: "#00A86B", 
              fontSize: "16px",
              border: "2px solid #00A86B",
              borderRadius: "8px",
              padding: "10px",
              textTransform: "none"
            }}
            onClick={() => setActiveSection('vcu')}
          >
            VCU Details
          </Button>
        </Box>

        {/* SECTION DISPLAY */}
        <Box
          gridColumn="span 12"
          mt="20px"
          p="20px"
          borderRadius="8px"
          backgroundColor={
            activeSection === 'bms' ? '#e0f7fa' : 
            activeSection === 'vcu' ? '#ffffe0' :
            'transparent'
          }
        >
          {activeSection === 'vehicle' && (
            <Typography variant="h4" color="textPrimary">
              Vehicle Details Content
            </Typography>
          )}
          {activeSection === 'bms' && (
            <Typography variant="h4" color="textPrimary">
              BMS Details Content
            </Typography>
          )}
          {activeSection === 'vcu' && (
            <Typography variant="h4" color="textPrimary">
              VCU Details Content
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
