import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Dashboard = ({ data }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState({});

  useEffect(() => {
    if (startDate || endDate) {
      const filtered = [data?.data?.LDV_EC200U_].filter(item => {
        const itemDate = new Date(item?.totalDistanceDate); // Assuming filtering is done on totalDistanceDate
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;

        if (start && end) {
          return itemDate >= start && itemDate <= end;
        } else if (start) {
          return itemDate >= start;
        } else if (end) {
          return itemDate <= end;
        }
        return true;
      });

      if (filtered.length === 0) {
        // If no data is found, set all fields to 0 and date to 'N/A'
        setFilteredData({
          totalDistance: 0,
          carbonSaving: 0,
          costSaving: 0,
          purchaseSavings: 0,
          tbc1: 0,
          tbc2: 0,
          totalDistanceDate: 'N/A',
          carbonSavingDate: 'N/A',
          costSavingDate: 'N/A',
          purchaseSavingsDate: 'N/A',
          tbc1Date: 'N/A',
          tbc2Date: 'N/A',
        });
      } else {
        setFilteredData(filtered[0] || {});
      }
    } else {
      setFilteredData(data?.data?.LDV_EC200U_ || {});
    }
  }, [startDate, endDate, data]);

  const kpis = filteredData || {};  // Ensure it is an object

  const formatDate = (date) => date !== 'N/A' ? new Date(date).toLocaleDateString('en-US') : 'N/A';

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
            sx={{ width: '150px' }}
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
            {kpis.totalDistance ?? 0}
          </Typography>
          <Typography variant="h2" color="textSecondary">
            Total Distance (Km)
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
            {formatDate(kpis.totalDistanceDate)}
          </Typography>
        </Box>
        <Box gridColumn="span 4" backgroundColor="#00A86B" p="20px" borderRadius="8px" textAlign="center">
          <Typography variant="h1" color="textPrimary">
            {kpis.carbonSaving ?? 0}
          </Typography>
          <Typography variant="h2" color="textSecondary">
            Carbon Saving (Kg)
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
            {formatDate(kpis.carbonSavingDate)}
          </Typography>
        </Box>
        <Box gridColumn="span 4" backgroundColor="#00A86B" p="20px" borderRadius="8px" textAlign="center">
          <Typography variant="h1" color="textPrimary">
            {kpis.costSaving ?? 0}
          </Typography>
          <Typography variant="h2" color="textSecondary">
            Cost Saving (₹)
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
            {formatDate(kpis.costSavingDate)}
          </Typography>
        </Box>
        <Box gridColumn="span 4" backgroundColor="#00A86B" p="20px" borderRadius="8px" textAlign="center">
          <Typography variant="h1" color="textPrimary">
            {kpis.purchaseSavings ?? 0}
          </Typography>
          <Typography variant="h2" color="textSecondary">
            Purchase Saving (₹)
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
            {formatDate(kpis.purchaseSavingsDate)}
          </Typography>
        </Box>
        <Box gridColumn="span 4" backgroundColor="#00A86B" p="20px" borderRadius="8px" textAlign="center">
          <Typography variant="h1" color="textPrimary">
            {kpis.tbc1 ?? 0}
          </Typography>
          <Typography variant="h2" color="textSecondary">
            TBC Purchase
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
            {formatDate(kpis.tbc1Date)}
          </Typography>
        </Box>
        <Box gridColumn="span 4" backgroundColor="#00A86B" p="20px" borderRadius="8px" textAlign="center">
          <Typography variant="h1" color="textPrimary">
            {kpis.tbc2 ?? 0}
          </Typography>
          <Typography variant="h2" color="textSecondary">
            TBCd
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
            {formatDate(kpis.tbc2Date)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
