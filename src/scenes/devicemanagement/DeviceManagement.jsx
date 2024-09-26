import React, { useState }  from 'react';
import { IconButton, Badge, Button,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const DeviceManagements = () => {
    const data = [
        { id: '#1234567890', wheelLock: 'Not Available', bmsLock: 'Not Available', ignitionLock: 'Not Available', remoteLock: 'Lock', antiTheftLock: 'Not Available' },
        { id: '#1234567890', wheelLock: 'Not Available', bmsLock: 'Not Available', ignitionLock: 'Not Available', remoteLock: 'Lock', antiTheftLock: 'Not Available' },
        { id: '#1234567890', wheelLock: 'Not Available', bmsLock: 'Not Available', ignitionLock: 'Not Available', remoteLock: 'Lock', antiTheftLock: 'Not Available' },
        { id: '#1234567890', wheelLock: 'Not Available', bmsLock: 'Not Available', ignitionLock: 'Not Available', remoteLock: 'Lock', antiTheftLock: 'Not Available' },
        { id: '#1234567890', wheelLock: 'Not Available', bmsLock: 'Not Available', ignitionLock: 'Not Available', remoteLock: 'Lock', antiTheftLock: 'Not Available' },
       
        // Add more data here
      ];

  const mostUsedVehiclesData = [
    ["Vehicle", "Usage"],
    ["Veh 1", 2000],
    ["Veh 2", 1500],
    ["Veh 3", 1200]
  ];
  const renderTableRows = () => {
    return data.map((device, index) => (
      <TableRow key={index}>
        <TableCell>{device.id}</TableCell>
        <TableCell>{device.wheelLock}</TableCell>
        <TableCell>{device.bmsLock}</TableCell>
        <TableCell>{device.ignitionLock}</TableCell>
        <TableCell>
          <Button variant="outlined" style={styles.buttonStyle}>Lock</Button>
          <Button variant="outlined" style={styles.buttonStyle}>Unlock</Button>
        </TableCell>
        <TableCell>{device.antiTheftLock}</TableCell>
      </TableRow>
    ));
  };

  const mostUsedVehiclesOptions = {
    legend: 'none',
    colors: ['#4285F4'], // Blue color for the bars
    vAxis: {
      viewWindow: { min: 0, max: 2500 }, // Adjust the vertical axis range
    },
    chartArea: { width: '70%', height: '60%' }, // Adjust the chart area size
  };

  const styles = {
    dashboard: {
      fontFamily: 'inter',
      color: '#333',
    },
    header: {
      backgroundColor: '#fff',
      padding: '12px 19px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0px',
      fontFamily: 'inter'
    },
    headerIcons: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      fontFamily: 'inter'
    },
    iconButton: {
      fontSize: '30px',
      fontFamily: 'inter'
    },
    mainContent: {
      padding: '0px',
      fontFamily: 'inter',
      width: '100%',
      height: '100vh',
  
    },
    formSection: {
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      margin: '16px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    },
    formTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '12px',
    },
    formControl: {
      marginBottom: '12px',
      width: '100%',  
    },
    datePickerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    datePicker: {
      width: '48%',
    },
    select: {
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '10px',
    },
    resultsSection: {
      width: '100%',
      background: '#f5f7fa',
      padding: '16px',
    },
    tripPanel: {
      marginBottom: '10px',
      backgroundColor: '#fff',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
    },
    tripDetails: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 20px',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
    },
    
    
  };

  return (
    <div style={styles.dashboard}>
      {/* header section start here  */}
      <header style={{ ...styles.header, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)', position: 'fixed', width: 'calc(100% - 280px)', zIndex: '999' }}>
        <h1 style={{ padding: '0px 10px', color: '#343C6A', fontFamily: 'Inter' }}>Remote Lock</h1>
        <div style={styles.headerIcons}>
          <IconButton color="inherit">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/settings.svg`}
              alt="Settings"
              style={{ borderRadius: '10px', width: '30px', height: '30px' }}
            />
          </IconButton>
          <IconButton color="inherit">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/notification.svg`}
              alt="Notifications"
              style={{ borderRadius: '10px', width: '30px', height: '30px' }}
            />
          </IconButton>
          <IconButton color="inherit">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Rectangle230s.svg`}
              alt="User"
              style={{ borderRadius: '10px', width: '30px', height: '30px' }}
            />
          </IconButton>
        </div>
      </header>
      {/* header section end here  */}

      <div style={{ ...styles.mainContent, position: 'relative', top: '101px', background: '#f5f7fa' }}>
          {/* all- graph-content section start here  */}
        {/* Filter Section */}
        <div style={{...styles.filterSection, width:'100%', margin:'0px', padding:'20px 30px',justifyContent:'space-between'}}>
            <Button variant="outlined" style={{ fontFamily: 'Inter' }}>
            Filter
            </Button>
            <input
            type="text"
            placeholder="Search for something"
            style={{
                padding: '8px 12px',
                borderRadius: '15px',
                border: '1px solid #ddd',
                width: '300px',
                fontFamily: 'Inter',
            }}
            />
        </div>
        {/* battery section start here  */}
        {/* Table Section */}
        <TableContainer component={Paper}>
            <Table style={styles.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Device Id</TableCell>
                <TableCell>Wheel Lock</TableCell>
                <TableCell>BMS Lock</TableCell>
                <TableCell>Ignition Lock</TableCell>
                <TableCell>Remote Lock</TableCell>
                <TableCell>Anti Theft Lock</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {renderTableRows()}
            </TableBody>
            </Table>
        </TableContainer>
        {/* controller section end here */}
        
        <div style={styles.pagination}>
            <Button style={{ fontFamily: 'Inter' }}>Previous</Button>
            <Button style={{ fontFamily: 'Inter' }}>1</Button>
            <Button style={{ fontFamily: 'Inter' }}>2</Button>
            <Button style={{ fontFamily: 'Inter' }}>Next</Button>
        </div>
      </div>
    </div>
  );
};
const 
styles= {
    buttonStyle :{
        padding: '10px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '15px',
        cursor: 'pointer',
        color: '#676767',
        fontFamily: 'Inter',
      },
      pagination: {
        display: 'flex',
        justifyContent: 'center',
        padding: '16px 0',
      },

} 

export default DeviceManagements;


