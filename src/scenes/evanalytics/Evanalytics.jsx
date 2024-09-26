import React, { useState }  from 'react';
import { IconButton, Badge, Button } from '@mui/material';
import BatteryCard from './BatteryCard';
import ControllerCard from './ControllerCard';
import MotorCard from './MotorCard';
import { DatePicker, Space } from 'antd';

const EvAnalytics = () => {
  const riderScoreData = [
    ["Status", "Value"],
    ["Braking", 28],
    ["Cornering", 12],
    ["Acceleration", 6],
    ["Speeding", 6],
    ["B-Current Discharge", 6]
  ];

  const mostUsedVehiclesData = [
    ["Vehicle", "Usage"],
    ["Veh 1", 2000],
    ["Veh 2", 1500],
    ["Veh 3", 1200]
  ];

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
      backgroundColor: '#ffff',
      // backgroundColor: '#e6f4ec',
      padding: '4px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      // marginTop: '-32px',
      height:'100px',
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
      fontFamily: 'inter' // Increased font size for icons
    },
    mainContent: {
      padding: '24px',
      fontFamily: 'inter'
    },
    generalSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)', // Two columns layout
      gap: '16px', // Space between the grid items
      marginBottom: '24px',
      fontFamily: 'inter'
    },
    statCard: {
      backgroundColor: '#fff',
      padding: '0px',
      borderRadius: '25px',
      textAlign: 'center',
      fontSize: '18px',
      fontFamily: 'inter' // Increased font size for text inside stat cards
    },
    actionSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
      fontFamily: 'inter'
    },
    actionCard: {
      backgroundColor: '#fff',
      padding: '16px',
      borderRadius: '25px',
      textAlign: 'center',
      fontSize: '18px',
      fontFamily: 'inter' // Increased font size for text inside action cards
    },
    title: {
      fontSize: '24px',
      fontFamily: 'inter' // Increased font size for titles
    },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'inter'
    },
    subtitle: {
      fontSize: '20px',
      fontFamily: 'inter' // Increased font size for subtitles
    },
    statValue: {
      margin: '0px',
      padding: '0px',
      fontFamily: 'inter' // Increased font size for stat values
    },
    iconStyle: {
      width: '40px', // Adjust the icon width
      height: '40px', // Adjust the icon height
      marginRight: '40px',
      fontFamily: 'inter'
    }
  };
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div style={styles.dashboard}>
      {/* header section start here  */}
      <header style={{ ...styles.header,borderLeft:'2px solid #f5f3f3', position: 'fixed', width: 'calc(100% - 280px)', zIndex: '999' }}>
        <div style={{width:'50%'}}>
          <h1 style={{ ...styles.title, padding: '0px 10px', color:'#343C6A', fontFamily:'Inter' }}>EV Analytics</h1>
        </div>
        <div style={{ ...styles.headerIcons, width: '50%', justifyContent:'end',margin:'0px',padding:'6px 0px' }}>
          <IconButton color="inherit" style={{  background:'#F5F7FA' }}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/settings.svg`}
              alt="Electric Scooter"
              style={{...styles.iconStyle,borderRadius:'10px', width:'30px', height:'30px', margin:'0px', padding:'0px'}}
            />          
          </IconButton>
          <IconButton color="inherit" style={{  background:'#F5F7FA' }}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/notification.svg`}
              alt="Electric Scooter"
              style={{...styles.iconStyle,borderRadius:'10px', width:'30px', height:'30px', margin:'0px', padding:'0px'}}
            />
          </IconButton>
          <IconButton color="inherit" style={{  background:'#F5F7FA' }}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Rectangle230.svg`}
              alt="Electric Scooter"
              style={{...styles.iconStyle, borderRadius:'10px',width:'30px', height:'30px', margin:'0px', padding:'0px'}}
            />
          </IconButton>
        </div>
      </header>
      {/* header section end here  */}

      <div style={{ ...styles.mainContent, position: 'relative', top: '85px', background: '#f5f7fa' }}>
          {/* all- graph-content section start here  */}
        <div style={{width:'100%', display:'flex', float:'left', justifyContent:'end', gap:'20px'}}>
            <div  style={{...buttonStyle, background:'#C5FFCD' }}>7 Days</div>
            <div  style={buttonStyle}>15 Days</div>
            <div  style={buttonStyle}>30 Days</div>
            <DatePicker style={{ ...buttonStyle, width:'250px', display: 'flex', float: 'left', padding:"0px 10px" }} onChange={onChange}  placeholder="Custom Date Range" />
        </div>
        {/* battery section start here  */}
        <div className='battery-content'>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <h2 style={{ color: '#343C6A', padding:'0px 30px'}}>Batteries</h2>
          </div>
          <BatteryCard/>
        </div>
        {/* battery section end here  */}
        {/* motor section start here  */}
        <div className='controller-content'>
          <div>
              <h2 style={{color:'#343C6A', padding:'0px 30px'}}>Motor </h2>
          </div>
          <MotorCard/>
        </div>
        {/* motor section end here  */}
        {/* controller section start here */}
        <div className='controller-content'>
          <div>
              <h2 style={{color:'#343C6A', padding:'0px 30px'}}>Controller </h2>
          </div>
          <ControllerCard/>
        </div>
        {/* controller section end here */}
        
      </div>
    </div>
  );
};
const buttonStyle = {
    padding: '10px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '15px',
    cursor: 'pointer',
    color: '#676767',
    fontFamily: 'Inter',
  };

export default EvAnalytics;
