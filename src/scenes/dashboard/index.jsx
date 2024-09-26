import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, TextField, Typography, Grid, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const VehicleDetails = () => (
  <Box bgcolor="#e0f7fa" p="20px" borderRadius="8px" display="none">
    <Typography variant="h5">Vehicle Details</Typography>
    {/* Add vehicle details content here */}
  </Box>
);

const BMSDetails = () => (
  <Box bgcolor="#ffe0b2" p="20px" borderRadius="8px" display="none">
    <Typography variant="h5">BMS Details</Typography>
    {/* Add BMS details content here */}
  </Box>
);

const VCUDetails = () => (
  <Box bgcolor="#d1c4e9" p="20px" borderRadius="8px" display="none">
    <Typography variant="h5">VCU Details</Typography>
    {/* Add VCU details content here */}
  </Box>
);

const Dashboard = () => {
  const [vehicleData, setVehicleData] = useState({});
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState({});
  const [activeDetail, setActiveDetail] = useState(""); // State for active detail

  useEffect(() => {
    const token = localStorage.getItem('token');
    const clientId = parseInt(localStorage.getItem('clientId'));

    if (!token || !clientId) {
      console.error('Token or Client ID is missing');
      return;
    }

    const url = 'https://staging.api.greentiger.in/api/v1/dashboard_kpis';

    setTimeout(() => {
      let requestBody = {};

      if (startDate !== '' && endDate !== '') {
        requestBody = {
          startDate: startDate,
          endDate: endDate,
          cumulative: 1,
          clientId: clientId,
        };
      } else {
        requestBody = {
          cumulative: 1,
          clientId: clientId,
          type: "LOGIN"
        };
      }

      axios.post(url, requestBody, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        const kpiData = response.data.data.LDV_EC200U_;
        setFilteredData({
          totalDistance: kpiData.distanceTravelled || 0,
          carbonSaving: kpiData.co2Savings || 0,
          costSaving: kpiData.costSavings || 0,
          riderScore: kpiData.riderScoreParameters.riderScore || 0,
          tbc1: kpiData.cycles || 0,
          tripDistance: kpiData.totalPacketCount || 0,
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }, 1000);
  }, [startDate, endDate, vehicleData]);

  // Load active detail from localStorage when component mounts
  useEffect(() => {
    const storedDetail = localStorage.getItem('activeDetail');
    if (storedDetail) {
      setActiveDetail(storedDetail);
    }
  }, []);

  const handleDetailClick = (detail) => {
    setActiveDetail(detail);
    localStorage.setItem('activeDetail', detail); // Save active detail to localStorage
  };

  const kpis = filteredData || {};

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
          sx={{ backgroundColor: "white" }}
        >
          <SearchIcon sx={{ color: "#707070", mr: 1 }} />
          <TextField
            variant="standard"
            placeholder="Search Devices"
            InputProps={{ disableUnderline: true }}
            sx={{ width: "200px", fontSize: "14px", color: "#707070" }}
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
            InputProps={{ endAdornment: <CalendarTodayIcon sx={{ color: "#707070" , display:'none'}} /> }}
            sx={{ width: "150px", fontSize: "14px" }}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <TextField
            variant="standard"
            label="End Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            InputProps={{ endAdornment: <CalendarTodayIcon sx={{ color: "#707070" , display:'none' }} /> }}
            sx={{ width: "150px", fontSize: "14px" }}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Box>
      </Box>

      {/* BUTTONS */}
      

      {/* DETAILS SECTION */}
      <Box mt="20px">
        {activeDetail === 'vehicle' && <VehicleDetails />}
        {activeDetail === 'bms' && <BMSDetails />}
        {activeDetail === 'vcu' && <VCUDetails />}
      </Box>

      {/* GRID & STAT BOXES */}
        {/* here start all display box code */}
      {activeDetail === 'vehicle' && (
        <Box mt="20px">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Box bgcolor="#008080" p="20px" borderRadius="8px" textAlign="center" height="200px">
                <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                  {kpis.totalDistance ? kpis.totalDistance.toFixed(2) : 0}
                </Typography>
                <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                  Total Distance (Km)
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box bgcolor="#008080" p="20px" borderRadius="8px" textAlign="center" height="200px">
                <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                  {kpis.carbonSaving ? kpis.carbonSaving.toFixed(2) : 0}
                </Typography>
                <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                  Carbon Saving (Kg)
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box bgcolor="#008080" p="20px" borderRadius="8px" textAlign="center" height="200px">
                <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                  {kpis.costSaving ? kpis.costSaving.toFixed(2) : 0}
                </Typography>
                <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                  Cost Saving (₹)
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box bgcolor="#008080" p="20px" borderRadius="8px" textAlign="center" height="200px">
                <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                  {kpis.riderScore ? kpis.riderScore.toFixed(2) : 0}
                </Typography>
                <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                  Rider Score
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box bgcolor="#008080" p="20px" borderRadius="8px" textAlign="center" height="200px">
                <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                  {kpis.tbc1 ?? 0}
                </Typography>
                <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                  TBC1 (Cycles)
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box bgcolor="#008080" p="20px" borderRadius="8px" textAlign="center" height="200px">
                <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                  {kpis.tbc1s ?? 0}{/* {kpis.tbc1s ?? 0} here i added extra s for showing data as null */}
                </Typography>
                <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                  TBC
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
      {activeDetail === 'bms' &&(
        <Box mt="20px">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Box bgcolor="#ffe0b2" p="20px" borderRadius="8px" textAlign="center" height="200px">
              <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                {kpis.totalDistances ? kpis.totalDistances.toFixed(2) : 0}
              </Typography>
              <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                Avg Cell Temp (°C)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box bgcolor="#ffe0b2" p="20px" borderRadius="8px" textAlign="center" height="200px">
              <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                {kpis.carbonSavings ? kpis.carbonSavings.toFixed(2) : 0}
              </Typography>
              <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                Avg BMS Temp (°C)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box bgcolor="#ffe0b2" p="20px" borderRadius="8px" textAlign="center" height="200px">
              <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                {kpis.costSavings ? kpis.costSavings.toFixed(2) : 0}
              </Typography>
              <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                Avg Current Discharge (A)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box bgcolor="#ffe0b2" p="20px" borderRadius="8px" textAlign="center" height="200px">
              <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                {kpis.riderScores ? kpis.riderScores.toFixed(2) : 0}
              </Typography>
              <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                Temperature and Voltage Faults
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box bgcolor="#ffe0b2" p="20px" borderRadius="8px" textAlign="center" height="200px">
              <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                {kpis.tbc1s ?? 0}
              </Typography>
              <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                Cycles
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box bgcolor="#ffe0b2" p="20px" borderRadius="8px" textAlign="center" height="200px">
              <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                {kpis.tbc1s ?? 0}
              </Typography>
              <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                TBC
              </Typography>
            </Box>
          </Grid>
        </Grid>
        </Box>
      )}
      {activeDetail === 'vcu' &&(
        <Box mt="20px">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Box bgcolor="#d1c4e9" p="20px" borderRadius="8px" textAlign="center" height="200px">
              <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                {kpis.totalDistances ? kpis.totalDistances.toFixed(2) : 0}
              </Typography>
              <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                Avg Motor Temperature (°C)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box bgcolor="#d1c4e9" p="20px" borderRadius="8px" textAlign="center" height="200px">
              <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                {kpis.carbonSavings ? kpis.carbonSavings.toFixed(2) : 0}
              </Typography>
              <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                Avg Controller Temperature (°C)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box bgcolor="#d1c4e9" p="20px" borderRadius="8px" textAlign="center" height="200px">
              <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                {kpis.costSavings ? kpis.costSavings.toFixed(2) : 0}
              </Typography>
              <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                Motor/Cotroller Faults 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box bgcolor="#d1c4e9" p="20px" borderRadius="8px" textAlign="center" height="200px">
              <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                {kpis.riderScores ? kpis.riderScores.toFixed(2) : 0}
              </Typography>
              <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                IOT Devices
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box bgcolor="#d1c4e9" p="20px" borderRadius="8px" textAlign="center" height="200px">
              <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                {kpis.tbc1s ?? 0}
              </Typography>
              <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                Valid Data Packets (%)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box bgcolor="#d1c4e9" p="20px" borderRadius="8px" textAlign="center" height="200px">
              <Typography variant="h4" color="textPrimary" sx={{ fontSize: "2.75rem" }}>
                {kpis.tbc1s ?? 0}
              </Typography>
              <Typography variant="h6" color="textSecondary" sx={{ fontSize: "1.75rem" }}>
                TBC 
              </Typography>
            </Box>
          </Grid>
        </Grid>
        </Box>
      )}
        {/* here end all display box code  */}

      {/* here is start bottom button code */}
      <Box display="flex" justifyContent="center" mt="100px" gap="100px" sx={{ width: '100%' }}>
        <Button 
          variant={activeDetail === 'vehicle' ? "contained" : "outlined"}
          sx={{ backgroundColor: activeDetail === 'vehicle' ? "#008080" : "transparent", color: activeDetail === 'vehicle' ? "white" : "#008080", fontSize: '20px', width: "400px", height: '50px' }}
          onClick={() => handleDetailClick('vehicle')}
        >
          Vehicle Details
        </Button>
        <Button 
          variant={activeDetail === 'bms' ? "contained" : "outlined"}
          sx={{ backgroundColor: activeDetail === 'bms' ? "#ffe0b2" : "transparent", color: activeDetail === 'bms' ? "white" : "#ff5722", fontSize: '20px', width: "400px" }}
          onClick={() => handleDetailClick('bms')}
        >
          BMS Details
        </Button>
        <Button 
          variant={activeDetail === 'vcu' ? "contained" : "outlined"}
          sx={{ backgroundColor: activeDetail === 'vcu' ? "#d1c4e9" : "transparent", color: activeDetail === 'vcu' ? "white" : "#9c27b0", fontSize: '20px', width: "400px" }}
          onClick={() => handleDetailClick('vcu')}
        >
          VCU Details
        </Button>
      </Box>
      {/* here is end bottom button code */}
    </Box>
  );
};

export default Dashboard;

