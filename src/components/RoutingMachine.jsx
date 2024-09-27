// import { useEffect } from "react";
// import L from "leaflet";
// import "leaflet-routing-machine";
// import { useMap } from "react-leaflet";

// const RoutingMachine = ({ start, end }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (!map) return;

//     const routingControl = L.Routing.control({
//       waypoints: [
//         L.latLng(start[0], start[1]),
//         L.latLng(end[0], end[1]),
//       ],
//       lineOptions: {
//         styles: [{ color: "#6FA1EC", weight: 4 }],
//       },
//       show: false,
//       addWaypoints: false,
//       routeWhileDragging: false,
//       draggableWaypoints: false,
//       fitSelectedRoutes: true,
//       showAlternatives: false,
//     }).addTo(map);

//     return () => map.removeControl(routingControl);
//   }, [map, start, end]);

//   return null;
// };

// export default RoutingMachine;


import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

const RoutingMachine = ({ start, end }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(start[0], start[1]),
        L.latLng(end[0], end[1]),
      ],
      lineOptions: {
        styles: [{ color: "#6FA1EC", weight: 4 }], // Customize line appearance
      },
      show: false,
      addWaypoints: false,
      routeWhileDragging: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
    }).addTo(map);

    return () => map.removeControl(routingControl); // Cleanup on unmount
  }, [map, start, end]);

  return null;
};

export default RoutingMachine;





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
//     const [vehicleId, setVehicleId] = useState(vehicles[0].id);
//     const [dateRange, setDateRange] = useState('7 Days');
//     const [expandedCharging, setExpandedCharging] = useState(false);
//     const [expandedDischarging, setExpandedDischarging] = useState(false);
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

//     const handleVehicleChange = (id) => {
//         setVehicleId(id);
//         // Optionally, reset accordion states if needed
//         setExpandedCharging(false);
//         setExpandedDischarging(false);
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
//             display: vehicleId ? 'block' : 'none',
//         },
//         vehicleList: {
//             padding: '10px',
//             cursor: 'pointer',
//             background: '#B9FAD2',
//         },
//         activeVehicle: {
//             backgroundColor: '#d3f7d3',
//             padding: '10px',
//             cursor: 'pointer',
//         },
//         buttonbox: {
//             padding: '10px',
//             background: 'rgb(255, 255, 255)',
//             border: '1px solid rgb(221, 221, 221)',
//             borderRadius: '15px',
//             cursor: 'pointer',
//             color: 'rgb(103, 103, 103)',
//             fontFamily: 'Inter',
//             width: '130px',
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
//                                     ...(dateRange === range ? { backgroundColor: '#d3f7d3', borderColor: '#d3f7d3' } : {}),
//                                 }}
//                                 onClick={() => handleDateRangeChange(range)}
//                             >
//                                 {range}
//                             </Button>
//                         ))}
//                     </div>

//                     <h4 style={{ color: '#818181', margin: '0px', fontFamily: 'Inter', padding: '10px', fontWeight: '400', background: '#F5F7FA' }}>
//                         Select Vehicle ID for detailed status
//                     </h4>
//                     {vehicles.map((vehicle) => (
//                         <div
//                             key={vehicle.id}
//                             onClick={() => handleVehicleChange(vehicle.id)}
//                             style={{ ...vehicleId === vehicle.id ? styles.activeVehicle : styles.vehicleList, padding: '20px 10px' }}
//                         >
//                             {vehicle.id}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Main Content Section */}
//                 <div className='rightside' style={styles.mainContent}>
//                     <h3 style={{ color: '#818181', margin: '0px', fontFamily: 'Inter', padding: '0px' }}>Vehicle Id:</h3>
//                     <h3 style={{ margin: '0px', fontSize: '21px', fontWeight: '500', fontFamily: 'Inter', padding: '5px 0px' }}>{vehicleId}</h3>

//                     <TableContainer component={Paper}>
//                         <Table aria-label="vehicle data">
//                             <TableHead style={{ background: '#EAEAEA' }}>
//                                 <TableRow>
//                                     <TableCell style={{ fontFamily: 'Inter', fontWeight: '600', fontSize: '15px', padding: '8px 16px' }}>
//                                         Date
//                                     </TableCell>
//                                     <TableCell align="right" style={{ fontFamily: 'Inter', fontWeight: '600', fontSize: '15px', padding: '8px 16px' }}>
//                                         Charging Event Count
//                                     </TableCell>
//                                     <TableCell align="right" style={{ fontFamily: 'Inter', fontWeight: '600', fontSize: '15px', padding: '8px 16px' }}>
//                                         Discharging Event Count
//                                     </TableCell>
//                                     <TableCell align="right" style={{ fontFamily: 'Inter', fontWeight: '600', fontSize: '15px', padding: '8px 16px' }}>
//                                         Total Charging Time
//                                     </TableCell>
//                                     <TableCell align="right" style={{ fontFamily: 'Inter', fontWeight: '600', fontSize: '15px', padding: '8px 16px' }}>
//                                         Total Discharging Time
//                                     </TableCell>
//                                     <TableCell align="right" style={{ fontFamily: 'Inter', fontWeight: '600', fontSize: '15px', padding: '8px 16px' }}></TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {/** Replace this with dynamic data based on vehicleId */}
//                                 <TableRow>
//                                     <TableCell component="th" scope="row">2024-09-11</TableCell>
//                                     <TableCell align="right">1</TableCell>
//                                     <TableCell align="right">1</TableCell>
//                                     <TableCell align="right">10:34:45</TableCell>
//                                     <TableCell align="right">12:34:45</TableCell>
//                                     <TableCell align="right">
//                                         <IconButton>
//                                             <ArrowDropDownIcon onClick={handleToggleDropdown} />
//                                         </IconButton>
//                                     </TableCell>
//                                 </TableRow>
//                                 <TableRow style={{ display: openDropdown ? 'table-row' : 'none' }}>
//                                     <TableCell colSpan={6}>
//                                         <Accordion expanded={expandedCharging} onChange={() => handleChargingChange(!expandedCharging)}>
//                                             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                                                 <Typography>Charging Details</Typography>
//                                             </AccordionSummary>
//                                             <AccordionDetails>
//                                                 <Typography>
//                                                     {/* Replace this with actual charging details */}
//                                                     Charging details for vehicle {vehicleId}.
//                                                 </Typography>
//                                             </AccordionDetails>
//                                         </Accordion>
//                                         <Accordion expanded={expandedDischarging} onChange={() => handleDischargingChange(!expandedDischarging)}>
//                                             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                                                 <Typography>Discharging Details</Typography>
//                                             </AccordionSummary>
//                                             <AccordionDetails>
//                                                 <Typography>
//                                                     {/* Replace this with actual discharging details */}
//                                                     Discharging details for vehicle {vehicleId}.
//                                                 </Typography>
//                                             </AccordionDetails>
//                                         </Accordion>
//                                     </TableCell>
//                                 </TableRow>
//                             </TableBody>
//                         </Table>
//                     </TableContainer>

                    //   <div style={{ padding: '5px 0px' }}>
                    //     <Accordion
                    //         style={{ background: '#EFEFEF' }}
                    //         expanded={expandedCharging}
                    //         onChange={() => handleChargingChange(!expandedCharging)}
                    //     >
                    //         <AccordionSummary
                    //             expandIcon={<ExpandMoreIcon />}
                    //             aria-controls="panel1a-content"
                    //             id="panel1a-header"
                    //         >
                    //             <Typography variant="h4" style={{ marginTop: '0px', fontFamily: 'Inter', color: '#232323', fontSize: '16px', fontWeight: '400' }}>
                    //                 Charging Events
                    //             </Typography>
                    //         </AccordionSummary>
                    //         <AccordionDetails style={{ background: '#f5f7fa' }}>
                    //             {/* Row 1: Session Started and Session Ended */}
                    //             <div style={{ width: '100%', justifyContent: 'space-between', borderBottom: '1px solid #E6E7EA', padding: '0px 40px' }}>
                    //                 <div style={{ width: '100%', display: 'flex' }}>
                    //                     <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '0px' }}> ⚡Session Started: </p>
                    //                     <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                    //                 </div>
                    //                 <div style={{ width: '100%', display: 'flex' }}>
                    //                     <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: ' 0px' }}> ⚡ Session Ended: </p>
                    //                     <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                    //                 </div>
                    //             </div>

                    //             {/* Row 2: Session Started and Session Ended */}
                    //             <div style={{ width: '100%', justifyContent: 'space-between', borderBottom: '1px solid #E6E7EA', padding: '0px 40px' }}>
                    //                 <div style={{ width: '100%', display: 'flex' }}>
                    //                     <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '0px' }}> ⚡Session Started: </p>
                    //                     <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                    //                 </div>
                    //                 <div style={{ width: '100%', display: 'flex' }}>
                    //                     <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: ' 0px' }}> ⚡ Session Ended: </p>
                    //                     <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                    //                 </div>
                    //             </div>

                    //             {/* Row 3: Session Started and Session Ended */}
                    //             <div style={{ width: '100%', justifyContent: 'space-between', borderBottom: '1px solid #E6E7EA', padding: '0px 40px' }}>
                    //                 <div style={{ width: '100%', display: 'flex' }}>
                    //                     <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '0px' }}> ⚡Session Started: </p>
                    //                     <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                    //                 </div>
                    //                 <div style={{ width: '100%', display: 'flex' }}>
                    //                     <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: ' 0px' }}> ⚡ Session Ended: </p>
                    //                     <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                    //                 </div>
                    //             </div>

                    //             {/* Add more event rows as needed */}
                    //         </AccordionDetails>
                    //     </Accordion>

                    //     <Accordion
                    //         style={{ background: '#EFEFEF' }}
                    //         expanded={expandedDischarging}
                    //         onChange={() => handleDischargingChange(!expandedDischarging)}
                    //     >
                    //         <AccordionSummary
                    //             expandIcon={<ExpandMoreIcon />}
                    //             aria-controls="panel1b-content"
                    //             id="panel1b-header"
                    //         >
                    //             <Typography variant="h4" style={{ marginTop: '0px', fontFamily: 'Inter', color: '#232323', fontSize: '16px', fontWeight: '400' }}>
                    //                 Discharging Events
                    //             </Typography>
                    //         </AccordionSummary>
                    //         <AccordionDetails style={{ background: '#f5f7fa' }}>
                    //             {/* Row 1: Session Started and Session Ended */}
                    //             <div style={{ width: '100%', justifyContent: 'space-between', borderBottom: '1px solid #E6E7EA', padding: '0px 40px' }}>
                    //                 <div style={{ width: '100%', display: 'flex' }}>
                    //                     <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '0px' }}> ❌ Session Started: </p>
                    //                     <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                    //                 </div>
                    //                 <div style={{ width: '100%', display: 'flex' }}>
                    //                     <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: ' 0px' }}> ❌ Session Ended: </p>
                    //                     <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                    //                 </div>
                    //             </div>

                    //             {/* Add more event rows as needed */}
                    //         </AccordionDetails>
                    //     </Accordion>
                    // </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Battery;

