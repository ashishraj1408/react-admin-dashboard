import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Input } from 'antd';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DatePicker } from 'antd';
import { DatePickerProps } from 'antd';
import Notification from '../notification/Notification';

const vehicles = [
    { id: '#1234567890' },
    { id: '#1234567891' },
    { id: '#1234567892' },
    { id: '#1234567893' },
    { id: '#1234567894' },
];

const Battery = () => {
    const [vehicleId, setVehicleId] = useState(vehicles[0].id);
    const [dateRange, setDateRange] = useState('7 Days');
    const [expandedCharging, setExpandedCharging] = useState(false);
    const [expandedDischarging, setExpandedDischarging] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isNotificationOpen, setNotificationOpen]= useState(false);

    const handleNotificationClick = ()=>{
        setNotificationOpen(!isNotificationOpen);
    }
    const handleCloseNotification = ()=>{
        setNotificationOpen(false);
    }

    useEffect(() => {
        // Fetch data when vehicleId or dateRange changes
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://api.example.com/battery-status', {
                    params: {
                        vehicleId: vehicleId,
                        dateRange: dateRange,
                    },
                    headers: {
                        Authorization: `Bearer your-token-here`,
                    },
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [vehicleId, dateRange]);

    const handleToggleDropdown = (index) => {
        setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    };

    const handleChargingChange = (isExpanded) => {
        setExpandedCharging(isExpanded);
    };

    const handleDischargingChange = (isExpanded) => {
        setExpandedDischarging(isExpanded);
    };

    const handleVehicleChange = (id) => {
        setVehicleId(id);
        setExpandedCharging(false);
        setExpandedDischarging(false);
    };

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
        setDateRange(dateString);
    };

    const handleDateRangeChange = (range) => {
        setDateRange(range);
    };
    const mockData = [
        {
          date: '2024-09-22',
          chargingCount: 5,
          dischargingCount: 3,
          totalChargingTime: '4 hours',
          totalDischargingTime: '6 hours',
          vehicleId: '#1234567890',
        },
        {
            date: '2024-09-22',
            chargingCount: 5,
            dischargingCount: 3,
            totalChargingTime: '4 hours',
            totalDischargingTime: '6 hours',
            vehicleId: '#1234567890',
          },
          {
            date: '2024-09-22',
            chargingCount: '5',
            dischargingCount: 3,
            totalChargingTime: '4 hours',
            totalDischargingTime: '6 hours',
            vehicleId: '#1234567890',
          },
        // Add more mock data entries as needed
      ];
      

    const styles = {
        dashboard: {
            fontFamily: 'Inter, sans-serif',
            color: '#333',
        },
        header: {
            backgroundColor: '#fff',
            padding: '12px 19px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0px',
            position: 'fixed',
            width: 'calc(100% - 280px)',
            zIndex: '9999',
        },
        headerIcons: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
        },
        sidebar: {
            width: '30%',
            background: '#fff',
            height: '100vh',
        },
        buttonStyle: {
            padding: '10px',
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '15px',
            cursor: 'pointer',
            color: '#676767',
            fontFamily: 'Inter',
        },
        mainContent: {
            padding: '20px',
            background: '#f5f7fa',
            minHeight: '100vh',
            width: '70%',
            display: vehicleId ? 'block' : 'none',
        },
        vehicleList: {
            padding: '10px',
            cursor: 'pointer',
        },
        activeVehicle: {
            backgroundColor: '#DFEAF2',
            padding: '10px',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.dashboard}>
            {/* Header Section */}
            <header style={{...styles.header, borderLeft:'2px solid #f5f3f3',}}>
                <h1 style={{ padding: '0px 10px', color: '#343C6A' }}>Battery Charging/Discharging</h1>
                <div style={styles.headerIcons}>
                    <IconButton color="inherit">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/settings.svg`}
                            alt="Settings"
                            style={{ borderRadius: '10px', width: '30px', height: '30px' }}
                        />
                    </IconButton>
                    <IconButton onClick={handleNotificationClick} color="inherit">
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
            {
                isNotificationOpen && (
                    <div style={{ zIndex: 2000, position: 'absolute', right: '80px', top: '80px', }}>
                        <Notification onClose={handleCloseNotification} />
                    </div>
                )
            }

            <div style={{ ...styles.dashboard, width: '100%', top: '101px', position: 'relative', display: 'flex' }}>
                {/* Sidebar Section */}
                <div style={styles.sidebar}>
                    <div style={{ background: '#DFEAF2', padding: '10px' }}>
                        <Input
                            placeholder="Search for something"
                            prefix={<SearchIcon />}
                            style={{ width: '100%', borderRadius: '20px', padding: '12px' }}
                        />
                    </div>

                    <div style={{ width: '450px', marginBottom: '10px', marginTop: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '0px 10px' }}>
                        <div style={{ width: '450px', display: 'flex', float: 'left', flexWrap: 'wrap', gap: '20px' }}>
                            <div style={{ ...styles.buttonStyle, width: '125px', background: '#C5FFCD' }} onClick={() => handleDateRangeChange('7 Days')}>7 Days</div>
                            <div style={{ ...styles.buttonStyle, width: '125px' }} onClick={() => handleDateRangeChange('15 Days')}>15 Days</div>
                            <div style={{ ...styles.buttonStyle, width: '125px' }} onClick={() => handleDateRangeChange('30 Days')}>30 Days</div>
                            <DatePicker style={{ ...styles.buttonStyle, width: '250px', display: 'flex', float: 'left' }} onChange={onChange} placeholder="Custom Date Range" />
                        </div>
                    </div>

                    <h4 style={{ color: '#818181', margin: '0px', fontFamily: 'Inter', padding: '10px', fontWeight: '400', background: '#F5F7FA' }}>
                        Select Vehicle ID for detailed status
                    </h4>
                    {vehicles.map((vehicle) => (
                        <div
                            key={vehicle.id}
                            onClick={() => handleVehicleChange(vehicle.id)}
                            style={{
                                ...vehicleId === vehicle.id ? styles.activeVehicle : styles.vehicleList,
                                padding: '20px 20px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <span>{vehicle.id}</span>
                            <ArrowForwardIosIcon style={{ fontSize: '16px', color: '#818181' }} />
                        </div>
                    ))}
                </div>

                {/* Main Content Section */}
                <div className='rightside' style={styles.mainContent}>
                    <h3 style={{ color: '#818181', margin: '0px', fontFamily: 'Inter', padding: '0px' }}>Vehicle Id:</h3>
                    <h3 style={{ margin: '0px', fontSize: '21px', fontWeight: '500', fontFamily: 'Inter', padding: '5px 0px' }}>{vehicleId}</h3>

                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead style={{background:'#EAEAEA'}}>
                                <TableRow>
                                    <TableCell style={{fontFamily:'Inter', fontWeight:'500', fontSize:'16px',color:"#070707"}}>Date</TableCell>
                                    <TableCell style={{fontFamily:'Inter', fontWeight:'500', fontSize:'16px',color:"#070707"}} align="right">Charging Events</TableCell>
                                    <TableCell style={{fontFamily:'Inter', fontWeight:'500', fontSize:'16px',color:"#070707"}} align="right">Discharging Events</TableCell>
                                    <TableCell style={{fontFamily:'Inter', fontWeight:'500', fontSize:'16px',color:"#070707"}} align="right">Total Charging Time</TableCell>
                                    <TableCell style={{fontFamily:'Inter', fontWeight:'500', fontSize:'16px',color:"#070707"}} align="right">Total Discharging Time</TableCell>
                                    <TableCell style={{fontFamily:'Inter        ', fontWeight:'500', fontSize:'16px',color:"#070707"}} align="right">Details</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {mockData.map((row, index) => (
                                    <React.Fragment key={index}>
                                        <TableRow>
                                            <TableCell component="th" scope="row">{row.date}</TableCell>
                                            <TableCell align="right">{row.chargingEventCount}</TableCell>
                                            <TableCell align="right">{row.dischargingEventCount}</TableCell>
                                            <TableCell align="right">{row.totalChargingTime}</TableCell>
                                            <TableCell align="right">{row.totalDischargingTime}</TableCell>
                                            <TableCell align="right">
                                                <IconButton onClick={() => handleToggleDropdown(index)}>
                                                    <ArrowDropDownIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                        {openDropdownIndex === index && (
                                            <TableRow>
                                                <TableCell colSpan={6}>
                                                    <Accordion expanded={expandedCharging} onChange={() => handleChargingChange(!expandedCharging)}>
                                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                            <Typography>Charging Details</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
                                                                Charging details for vehicle {row.vehicleId}.
                                                            </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                    <Accordion expanded={expandedDischarging} onChange={() => handleDischargingChange(!expandedDischarging)}>
                                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                            <Typography>Discharging Details</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
                                                                Discharging details for vehicle {row.vehicleId}.
                                                            </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </React.Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <div style={{ padding: '5px 0px' }}>
                        <Accordion
                            style={{ background: '#EFEFEF' }}
                            expanded={expandedCharging}
                            onChange={() => handleChargingChange(!expandedCharging)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant="h4" style={{ marginTop: '0px', fontFamily: 'Inter', color: '#232323', fontSize: '16px', fontWeight: '400' }}>
                                    Charging Events
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{ background: '#f5f7fa' }}>
                                {/* Row 1: Session Started and Session Ended */}
                                <div style={{ width: '100%', justifyContent: 'space-between', display:'flex', borderBottom: '1px solid #E6E7EA', padding: '0px 20px' }}>
                                    <p style={{margin:'0px', padding:'22px 0px', fontSize:'22px'}}>⚡</p>
                                    <div style={{width:'100%', margin:'0px', padding:'10px 12px'}}>
                                        <div style={{ width: '100%', display: 'flex' }}>
                                            <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '0px' }}> Session Started: </p>
                                            <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                                        </div>
                                        <div style={{ width: '100%', display: 'flex' }}>
                                            <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: ' 0px' }}> Session Ended: </p>
                                            <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Row 2: Session Started and Session Ended */}
                                <div style={{ width: '100%', justifyContent: 'space-between', display:'flex', borderBottom: '1px solid #E6E7EA', padding: '0px 20px' }}>
                                    <p style={{margin:'0px', padding:'22px 0px', fontSize:'22px'}}>⚡</p>
                                    <div style={{width:'100%', margin:'0px', padding:'10px 12px'}}>
                                        <div style={{ width: '100%', display: 'flex' }}>
                                            <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '0px' }}> Session Started: </p>
                                            <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                                        </div>
                                        <div style={{ width: '100%', display: 'flex' }}>
                                            <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: ' 0px' }}> Session Ended: </p>
                                            <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Row 3: Session Started and Session Ended */}
                                <div style={{ width: '100%', justifyContent: 'space-between', display:'flex', borderBottom: '1px solid #E6E7EA', padding: '0px 20px' }}>
                                    <p style={{margin:'0px', padding:'22px 0px', fontSize:'22px'}}>⚡</p>
                                    <div style={{width:'100%', margin:'0px', padding:'10px 12px'}}>
                                        <div style={{ width: '100%', display: 'flex' }}>
                                            <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '0px' }}> Session Started: </p>
                                            <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                                        </div>
                                        <div style={{ width: '100%', display: 'flex' }}>
                                            <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: ' 0px' }}> Session Ended: </p>
                                            <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Add more event rows as needed */}
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            style={{ background: '#EFEFEF' }}
                            expanded={expandedDischarging}
                            onChange={() => handleDischargingChange(!expandedDischarging)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1b-content"
                                id="panel1b-header"
                            >
                                <Typography variant="h4" style={{ marginTop: '0px', fontFamily: 'Inter', color: '#232323', fontSize: '16px', fontWeight: '400' }}>
                                    Discharging Events
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{ background: '#f5f7fa' }}>
                                {/* Row 1: Session Started and Session Ended */}

                                <div style={{ width: '100%', justifyContent: 'space-between', display:'flex', borderBottom: '1px solid #E6E7EA', padding: '0px 20px' }}>
                                    <p style={{margin:'0px', padding:'22px 0px', fontSize:'22px'}}>❌</p>
                                    <div style={{width:'100%', margin:'0px', padding:'10px 12px'}}>
                                        <div style={{ width: '100%', display: 'flex' }}>
                                            <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '0px' }}> Session Started: </p>
                                            <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                                        </div>
                                        <div style={{ width: '100%', display: 'flex' }}>
                                            <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: ' 0px' }}> Session Ended: </p>
                                            <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div style={{ width: '100%', justifyContent: 'space-between', borderBottom: '1px solid #E6E7EA', padding: '0px 40px' }}>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '0px' }}>  Session Started: </p>
                                        <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: ' 0px' }}> ❌ Session Ended: </p>
                                        <p style={{ width: '50%', color: '#000000', fontFamily: "Inter", fontSize: '16px', fontWeight: '400', margin: '0px', padding: '5px 0px' }}>11:48:28</p>
                                    </div>
                                </div> */}

                                {/* Add more event rows as needed */}
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Battery;



