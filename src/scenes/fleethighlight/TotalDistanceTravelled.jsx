// import React, { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import axios from 'axios';
// import { Typography, Link, Dialog, DialogContent, CircularProgress } from '@mui/material';
// import PopupTable from './PopupTable';

// const TotalDistanceTravelled = () => {
//   const [totalDistanceData, setTotalDistanceData] = useState([]);
//   const [totalDistance, setTotalDistance] = useState(0);
//   const [startDate, setStartDate] = useState("2024-08-28");
//   const [endDate, setEndDate] = useState("2024-09-11");
  
//   const [openModal, setOpenModal] = useState(false);
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   const handleOpenModal = () => setOpenModal(true);
//   const handleCloseModal = () => setOpenModal(false);

//   useEffect(() => {
//     const fetchDistanceData = async () => {
//       try {
//         setLoading(true); // Set loading to true before fetching
//         const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFRva2VuIjoiN2E5YjBlN2ZiMWY0M2MxMDhiZDMxMzI5ZjMwYzljN2JmZmUwZmZiMTMwNDkxNTgyNjRkYzlkMTdjZGIwMTRlYSIsImNsaWVudElkIjozMSwiaWF0IjoxNzI2MjkwOTA5LCJleHAiOjE3MjY4OTU3MDl9.stDXLKhVoAmFOKLV2mTWdFeloKVo7JXcwR76x0pAY8OkNCwbLVl9RWQMgu97eMt7acWYqF3CFCEgCnoeaH9kDwLQB59Py0Q1V4kkS9HRJs8N-Hnccs_C9-oSE-Snu5IWUKW6lAIGcj8_D8mR4G5TfU4fYUfcuw-VKnUvMWxEIjPc2CD3tsr_xpvPa8cm3zVvoJY3qOQNo7d2A0Biw8R-ppOHl6OoFM8uoRauIdIfr6eDrhL0QqLsG4qngUk_49nLiMdTTn-Yh8QKVxQ_TzmKW9MPheC-okicb4dXtsEPkLgxb-pS_mZpi9Sr_oY7U8tnT-Nss0_Skugl5oDIkOsTAg';  // Use your actual token here
//         const response = await axios.post(
//           'https://staging.api.greentiger.in/api/v1/dashboard_kpis',
//           {
//             startDate,
//             endDate,
//             cumulative: 1,
//             history: true,
//             historyRange: "7d",
//             clientId: 31,
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         const historyData = response.data.data.history;
//         const formattedData = historyData.map((item) => ({
//           day: item.day,
//           distance: parseFloat(item.distanceTravelled.toFixed(2)),
//         }));

//         const total = formattedData.reduce((sum, item) => sum + item.distance, 0);
//         setTotalDistance(total);
//         setTotalDistanceData(formattedData);
//       } catch (error) {
//         setError("Error fetching distance data.");
//         console.error("Error fetching distance data:", error);
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     fetchDistanceData();
//   }, [startDate, endDate]);

//   return (
//     <div
//       className="check1"
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         backgroundColor: '#fff',
//         borderRadius: '25px',
//         padding: '20px',
//         height: '100%',
//       }}
//     >
//       {/* Header with total distance */}
//       <div
//         style={{
//           textAlign: 'start',
//           marginBottom: '20px',
//           width: '100%',
//           display: 'flex',
//         }}
//       >
//         <div style={{ width: '50%' }}>
//           <p
//             style={{
//               fontSize: '20px',
//               fontWeight: '500',
//               fontFamily: 'inter',
//               color: '#343C6A',
//             }}
//           >
//             Total Distance Travelled
//           </p>
//           <h2
//             style={{
//               fontSize: '24px',
//               color: '#343C6A',
//               fontFamily: 'inter',
//               textAlign: 'start',
//               padding: '10px 0',
//             }}
//           >
//             {loading ? <CircularProgress /> : `${totalDistance.toFixed(2)} km`}
//           </h2>
//         </div>
//         <div style={{ width: '50%' }}>
//           <Typography
//             variant="body1"
//             align="right"
//             style={{ padding: '0 10px 20px 10px' }}
//           >
//             <Link
//               href="#"
//               underline="always"
//               color={'#3B82F6'}
//               style={{ fontSize: '20px', textDecoration: 'none' }}
//               onClick={handleOpenModal}
//             >
//               View Details
//             </Link>
//             <span
//               style={{
//                 width: '30px',
//                 height: '30px',
//                 display: 'flex',
//                 float: 'right',
//               }}
//             >
//               <img
//                 src={`${process.env.PUBLIC_URL}/assets/images/Icon.svg`}
//                 alt="View Icon"
//               />
//             </span>
//           </Typography>
//         </div>
//       </div>

//       {/* Line Chart */}
//       <div style={{ display: 'flex', flexGrow: 1 }}>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <p
//             style={{
//               writingMode: 'vertical-rl',
//               transform: 'rotate(180deg)',
//               fontWeight: '400',
//               fontFamily: 'inter',
//               color: '#696969',
//             }}
//           >
//             Distance Travelled (KM)
//           </p>
//         </div>
//         <div style={{ width: '100%' }}>
//           {loading ? (
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 height: '400px',
//               }}
//             >
//               <CircularProgress />
//             </div>
//           ) : error ? (
//             <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
//           ) : (
//             <ResponsiveContainer width="100%" height={400}>
//               <LineChart data={totalDistanceData}>
//                 <defs>
//                   <linearGradient id="colorDistance" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#4CAF50" stopOpacity={0.8} />
//                     <stop offset="100%" stopColor="#4CAF50" stopOpacity={0.1} />
//                   </linearGradient>
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="day" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line
//                   type="monotone"
//                   dataKey="distance"
//                   stroke="#4CAF50"
//                   strokeWidth={2}
//                   fill="url(#colorDistance)"
//                   dot={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           )}
//           <div style={{ marginTop: '20px', textAlign: 'start' }}>
//             <p
//               style={{
//                 fontSize: '16px',
//                 fontFamily: 'inter',
//                 margin: '0',
//                 textAlign: 'center',
//                 fontWeight: '500',
//               }}
//             >
//               {`${startDate} - ${endDate}`}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Modal for Table */}
//       <Dialog
//         open={openModal}
//         onClose={handleCloseModal}
//         maxWidth="xl"
//         fullWidth
//         style={{ margin: '0px', padding: '0px' }}
//       >
//         <DialogContent>
//           <PopupTable handleCloseModal={handleCloseModal} />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default TotalDistanceTravelled;

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { Typography, Link, Dialog, DialogContent, CircularProgress } from '@mui/material';
import PopupTable from './PopupTable';

const TotalDistanceTravelled = () => {
  const [totalDistanceData, setTotalDistanceData] = useState([]);
  const [totalDistance, setTotalDistance] = useState(0);
  const [startDate, setStartDate] = useState("2024-08-28");
  const [endDate, setEndDate] = useState("2024-09-11");
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    const fetchDistanceData = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const token = localStorage.getItem('token'); // Fetch the token from localStorage or your preferred method
        if (!token) {
          throw new Error("No token available");
        }

        const response = await axios.post(
          'https://staging.api.greentiger.in/api/v1/dashboard_kpis',
          {
            startDate,
            endDate,
            cumulative: 1,
            history: true,
            historyRange: "7d",
            clientId: 31,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const historyData = response.data.data.history;
        const formattedData = historyData.map((item) => ({
          day: item.day,
          distance: parseFloat(item.distanceTravelled.toFixed(2)),
        }));

        const total = formattedData.reduce((sum, item) => sum + item.distance, 0);
        setTotalDistance(total);
        setTotalDistanceData(formattedData);
      } catch (error) {
        setError("Error fetching distance data.");
        console.error("Error fetching distance data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchDistanceData();
  }, [startDate, endDate]);

  return (
    <div
      className="check1"
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: '25px',
        padding: '20px',
        height: '100%',
      }}
    >
      {/* Header with total distance */}
      <div
        style={{
          textAlign: 'start',
          marginBottom: '20px',
          width: '100%',
          display: 'flex',
        }}
      >
        <div style={{ width: '50%' }}>
          <p
            style={{
              fontSize: '20px',
              fontWeight: '500',
              fontFamily: 'inter',
              color: '#343C6A',
            }}
          >
            Total Distance Travelled
          </p>
          <h2
            style={{
              fontSize: '24px',
              color: '#343C6A',
              fontFamily: 'inter',
              textAlign: 'start',
              padding: '10px 0',
            }}
          >
            {loading ? <CircularProgress /> : `${totalDistance.toFixed(2)} km`}
          </h2>
        </div>
        <div style={{ width: '50%' }}>
          <Typography
            variant="body1"
            align="right"
            style={{ padding: '0 10px 20px 10px' }}
          >
            <Link
              href="#"
              underline="always"
              color={'#3B82F6'}
              style={{ fontSize: '20px', textDecoration: 'none' }}
              onClick={handleOpenModal}
            >
              View Details
            </Link>
            <span
              style={{
                width: '30px',
                height: '30px',
                display: 'flex',
                float: 'right',
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Icon.svg`}
                alt="View Icon"
              />
            </span>
          </Typography>
        </div>
      </div>

      {/* Line Chart */}
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              fontWeight: '400',
              fontFamily: 'inter',
              color: '#696969',
            }}
          >
            Distance Travelled (KM)
          </p>
        </div>
        <div style={{ width: '100%' }}>
          {loading ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '400px',
              }}
            >
              <CircularProgress />
            </div>
          ) : error ? (
            <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
          ) : (
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={totalDistanceData}>
                <defs>
                  <linearGradient id="colorDistance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4CAF50" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#4CAF50" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="distance"
                  stroke="#4CAF50"
                  strokeWidth={2}
                  fill="url(#colorDistance)"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
          <div style={{ marginTop: '20px', textAlign: 'start' }}>
            <p
              style={{
                fontSize: '16px',
                fontFamily: 'inter',
                margin: '0',
                textAlign: 'center',
                fontWeight: '500',
              }}
            >
              {`${startDate} - ${endDate}`}
            </p>
          </div>
        </div>
      </div>

      {/* Modal for Table */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="xl"
        fullWidth
        style={{ margin: '0px', padding: '0px' }}
      >
        <DialogContent>
          <PopupTable handleCloseModal={handleCloseModal} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TotalDistanceTravelled;

// import React, { useState } from 'react';
// import {
//     IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { Input } from 'antd';

// const vehicles = [
//     { id: '#1234567890' },
//     { id: '#1234567891' },
//     { id: '#1234567892' },
//     { id: '#1234567893' },
//     { id: '#1234567894' },
// ];

// const Battery = () => {
//     const [vehicleId, setVehicleId] = useState(null); // Initially, no vehicle is selected
//     const [dateRange, setDateRange] = useState('7 Days');
//     const [expandedCharging, setExpandedCharging] = useState(false);
//     const [expandedDischarging, setExpandedDischarging] = useState(false);
//     const [expanded, setExpanded] = useState(false);
//     const [openDropdown, setOpenDropdown] = useState(false);

//     const handleToggleDropdown = () => {
//         setOpenDropdown(!openDropdown);
//     };

//     const handleChargingChange = (isExpanded) => {
//         setExpandedCharging(isExpanded);
//     };

//     const handleDischargingChange = (isExpanded) => {
//         setExpandedDischarging(isExpanded);
//     };

//     const handleChange = (isExpanded) => {
//         setExpanded(isExpanded);
//     };

//     const handleVehicleChange = (id) => {
//         setVehicleId(id);  // Set the selected vehicle ID, which triggers the display of the right section
//     };

//     const handleDateRangeChange = (range) => {
//         setDateRange(range);
//     };

//     const styles = {
//         dashboard: {
//             fontFamily: 'Inter, sans-serif',
//             color: '#333',
//         },
//         header: {
//             backgroundColor: '#fff',
//             padding: '12px 19px',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             margin: '0px',
//             position: 'fixed',
//             width: 'calc(100% - 280px)',
//             zIndex: '9999',
//         },
//         headerIcons: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '15px',
//         },
//         sidebar: {
//             width: '30%',
//             background: '#fff',
//             height: '100vh',
//         },
//         mainContent: {
//             padding: '20px',
//             background: '#f5f7fa',
//             minHeight: '100vh',
//             width: '70%',
//             display: vehicleId ? 'block' : 'none', // Hide or show based on vehicleId
//         },
//         vehicleList: {
//             padding: '10px',
//             cursor: 'pointer',
//             background: '#B9FAD2'
//         },
//         activeVehicle: {
//             backgroundColor: '#d3f7d3',
//             padding: '10px',
//             cursor: 'pointer',
//             background: '#B9FAD2'
//         },
//         activeButton: {
//             backgroundColor: '#d3f7d3',
//             borderColor: '#d3f7d3',
//         },
//         buttonbox: {
//             padding: '10px',
//             background: 'rgb(255, 255, 255)',
//             border: '1px solid rgb(221, 221, 221)',
//             borderRadius: '15px',
//             cursor: 'pointer',
//             color: 'rgb(103, 103, 103)',
//             fontFamily: 'Inter',
//             width: '130px'
//         },
//     };

//     return (
//         <div style={styles.dashboard}>
//             {/* Header Section */}
//             <header style={styles.header}>
//                 <h1 style={{ padding: '0px 10px', color: '#343C6A' }}>Battery Charging/Discharging</h1>
//                 <div style={styles.headerIcons}>
//                     <IconButton color="inherit">
//                         <img
//                             src={`${process.env.PUBLIC_URL}/assets/images/settings.svg`}
//                             alt="Settings"
//                             style={{ borderRadius: '10px', width: '30px', height: '30px' }}
//                         />
//                     </IconButton>
//                     <IconButton color="inherit">
//                         <img
//                             src={`${process.env.PUBLIC_URL}/assets/images/notification.svg`}
//                             alt="Notifications"
//                             style={{ borderRadius: '10px', width: '30px', height: '30px' }}
//                         />
//                     </IconButton>
//                     <IconButton color="inherit">
//                         <img
//                             src={`${process.env.PUBLIC_URL}/assets/images/Rectangle230s.svg`}
//                             alt="User"
//                             style={{ borderRadius: '10px', width: '30px', height: '30px' }}
//                         />
//                     </IconButton>
//                 </div>
//             </header>

//             <div style={{ ...styles.dashboard, width: '100%', top: '101px', position: 'relative', display: 'flex' }}>
//                 {/* Sidebar Section */}
//                 <div style={styles.sidebar}>
//                     <div style={{ background: '#DFEAF2', padding: '10px' }}>
//                         <Input
//                             placeholder="Search for something"
//                             prefix={<SearchIcon />}
//                             style={{ width: '100%', borderRadius: '20px', padding: '12px' }}
//                         />
//                     </div>

//                     <div style={{ width: '450px', marginBottom: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '0px 10px' }}>
//                         {['7 Days', '15 Days', '30 Days', 'Custom Date Range'].map((range) => (
//                             <Button
//                                 key={range}
//                                 variant="outlined"
//                                 style={{
//                                     ...styles.buttonbox,
//                                     marginTop: '10px',
//                                     ...(range === 'Custom Date Range' ? { width: '250px' } : {}),
//                                     ...(dateRange === range ? styles.activeButton : {}),
//                                 }}
//                                 onClick={() => handleDateRangeChange(range)}
//                             >
//                                 {range}
//                             </Button>
//                         ))}
//                     </div>

//                     <h4 style={{ color: '#818181', margin: '0px', fontFamily: 'Inter', padding: '10px', fontWeight: '400', background: '#F5F7FA' }}>Select Vehicle ID for detailed status</h4>
//                     {vehicles.map((vehicle) => (
//                         <div
//                             key={vehicle.id}
//                             onClick={() => handleVehicleChange(vehicle.id)}
//                             style={vehicleId === vehicle.id ? styles.activeVehicle : styles.vehicleList}
//                         >
//                             {vehicle.id}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Main Content Section */}
//                 <div className='rightside' style={styles.mainContent}>
//                     <h3 style={{ color: '#818181', margin: '0px', fontFamily: 'Inter', padding: '0px' }}>Vehicle Id: </h3>
//                     <h3 style={{ margin: '0px', fontSize: '21px', fontWeight: '500', fontFamily: 'Inter', padding: '5px 0px' }}>{vehicleId}</h3>

//                     <TableContainer component={Paper}>
//                         <Table aria-label="vehicle data">
//                             <TableHead style={{ background: '#EAEAEA' }}>
//                                 <TableRow>
//                                     <TableCell
//                                         style={{
//                                             fontFamily: 'Inter',
//                                             fontWeight: '600',
//                                             fontSize: '15px',
//                                             padding: '8px 16px', // Adjust padding as needed
//                                         }}
//                                     >
//                                         Date
//                                     </TableCell>
//                                     <TableCell
//                                         style={{
//                                             fontFamily: 'Inter',
//                                             fontWeight: '600',
//                                             fontSize: '15px',
//                                             padding: '8px 16px', // Adjust padding as needed
//                                         }}
//                                         align="right"
//                                     >
//                                         Charging Event Count
//                                     </TableCell>
//                                     <TableCell
//                                         style={{
//                                             fontFamily: 'Inter',
//                                             fontWeight: '600',
//                                             fontSize: '15px',
//                                             padding: '8px 16px', // Adjust padding as needed
//                                         }}
//                                         align="right"
//                                     >
//                                         Discharging Event Count
//                                     </TableCell>
//                                     <TableCell
//                                         style={{
//                                             fontFamily: 'Inter',
//                                             fontWeight: '600',
//                                             fontSize: '15px',
//                                             padding: '8px 16px', // Adjust padding as needed
//                                         }}
//                                         align="right"
//                                     >
//                                         Total Charging Time
//                                     </TableCell>
//                                     <TableCell
//                                         style={{
//                                             fontFamily: 'Inter',
//                                             fontWeight: '600',
//                                             fontSize: '15px',
//                                             padding: '8px 16px', // Adjust padding as needed
//                                         }}
//                                         align="right"
//                                     >
//                                         Total Discharging Time
//                                     </TableCell>
//                                     <Table
