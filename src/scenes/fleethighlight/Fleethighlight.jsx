import React, { useState } from 'react';
import { IconButton, Badge } from '@mui/material';
import TotalDistanceTravelled from './TotalDistanceTravelled';
import MostUsedVehicle from './MostUsedVehicle';
import RiderScoreCard from './RiderScore';
import BatteryCard from './BatteryCard';
import ControllerCard from './ControllerCard';
import Notification from '../notification/Notification';
const Fleethighlight = () => {
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const handleNotificationClick = () => {
    console.log('Notification button clicked');
    setNotificationOpen(!isNotificationOpen);
    console.log('isNotificationOpen:', !isNotificationOpen);
  };
  const handleCloseNotification = () => {
    setNotificationOpen(false);
  };

  const notifications = [
    { message: "Vehicle 1 requires maintenance" },
    { message: "Battery low on Vehicle 3" },
    { message: "Vehicle 2 is due for a checkup" }
  ];

  const riderScoreData = [
    ["Status", "Value"],
    ["Braking", 28],
    ["Cornering", 12],
    ["Acceleration", 6],
    ["Speeding", 6],
    ["B-Current Discharge", 6]
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
      backgroundColor: '#e6f4ec',
      padding: '4px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      // marginTop: '-32px',
      height: '100px',
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
      // marginRight: '40px',
      fontFamily: 'inter'
    }
  };

  return (
    <div style={styles.dashboard}>
      {/* header section start here  */}
      <header style={{ ...styles.header, position: 'fixed', width: 'calc(100% - 280px)', zIndex: '999' }}>
        <div style={{ width: '50%' }}>
          <h1 style={{ ...styles.title, padding: '0px 10px' }}>Fleet Highlights</h1>
        </div>
        <div style={{ ...styles.headerIcons, width: '50%', justifyContent: 'end', margin: '0px', padding: '6px 0px' }}>
          <IconButton color="inherit" style={{ background: '#F5F7FA' }}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/settings.svg`}
              alt="Electric Scooter"
              style={{ ...styles.iconStyle, borderRadius: '10px', width: '30px', height: '30px', margin: '0px', padding: '0px' }}
            />
          </IconButton>
          <IconButton onClick={handleNotificationClick} color="inherit">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/notification.svg`}
              alt="Notification"
              style={styles.iconStyle}
            />
          </IconButton>

          <IconButton color="inherit" style={{ background: '#F5F7FA' }}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Rectangle230.svg`}
              alt="Electric Scooter"
              style={{ ...styles.iconStyle, borderRadius: '10px', width: '30px', height: '30px', margin: '0px', padding: '0px' }}
            />
          </IconButton>
        </div>
      </header>
      {isNotificationOpen && (
        <div style={{ zIndex: 2000, position: 'absolute', right: '80px', top: '80px', }}>
          <Notification
            notifications={notifications}
            onClose={handleCloseNotification}
          />
        </div>
      )}


      {/* header section end here  */}

      <div style={{ ...styles.mainContent, position: 'relative', top: '85px', background: '#f5f7fa' }}>
        <h4 className="text-lg font-semibold mb-4" style={{ color: 'gray', fontSize: '20px', margin: '0px', marginBottom: '5px', padding: '0px', borderBottom: '1px solid #cfcbcb' }}>General</h4>
        {/* all- graph-content section start here  */}
        <div style={{ ...styles.generalSection, padding: '20px 5px' }}>
          {/* left section start here  */}
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '16px', height: '600px' }}>
            <div style={{ display: 'flex', float: 'left', gap: '10px', width: '100%' }}>

              {/* bar graph section start here  */}
              <div className='second' style={{ ...styles.statCard, width: '50%', height: '250px' }}>
                <MostUsedVehicle />
              </div>
              {/* bar graph end here  */}
              {/* leaf and bike icon section start here */}
              <div className='first' style={{ ...styles.statCard, width: '50%', height: '250px' }}>
                <div style={{ padding: '20px 15px' }}>
                  <div className="scootericon" style={{ ...styles.iconContainer, padding: '20px' }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/MopedFront.svg`}
                      alt="Electric Scooter"
                      style={{ ...styles.iconStyle, background: 'oldlace', padding: '5px', borderRadius: '10px' }}
                    />
                    <span>
                      <p style={{ ...styles.statValue, textAlign: 'start', fontWeight: 'bold' }}>10/go</p>
                      <p style={{ ...styles.subtitle, margin: '0px', padding: '0px' }}>Ignition On/Off Count</p>
                    </span>
                  </div>
                  <div className="leaficon" style={{ ...styles.iconContainer, padding: '20px' }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/Leaf.svg`}
                      alt="Leaf"
                      style={{ ...styles.iconStyle, background: '#d4f5d4', borderRadius: '10px', padding: '5px' }}
                    />
                    <span>
                      <p style={{ ...styles.statValue, textAlign: 'start', fontWeight: 'bold' }}>2kg Savings</p>
                      <p style={{ ...styles.subtitle, margin: '0px' }}> (Carbon Savings)</p>
                    </span>
                  </div>
                </div>
              </div>
              {/* leaf and bike icon section end here */}
            </div>
            {/* rider score section start here  */}
            <div className='second-row' style={{ ...styles.statCard, width: '', height: '350px' }}>
              <RiderScoreCard />
            </div>
            {/* rider score section end here  */}
          </div>
          {/* left section end here  */}
          {/* right section start here  */}
          <div className='third' style={{ ...styles.statCard, height: '630px' }}>
            <TotalDistanceTravelled />
          </div>
          {/* right section end here  */}
        </div>
        {/* battery section start here  */}
        <div className='battery-content'>
          <h3 style={{ color: 'gray', fontSize: '20px', margin: '0px', marginBottom: '10px', borderBottom: '1px solid #cfcbcb', padding: '0px' }}>Immediate Action Required</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <h2 style={{ color: '#343C6A' }}>Battery</h2>
            <button style={{ borderRadius: '20px', fontSize: '20px', padding: '12px', border: 'none', background: '#C5FFCD', width: '120px', textAlign: 'center' }}>
              View All
            </button>
          </div>
          <BatteryCard />
        </div>
        {/* battery section end here  */}
        {/* controller section start here */}
        <div className='controller-content'>
          <div>
            <h2 style={{ color: '#343C6A' }}>Controller </h2>
          </div>
          <ControllerCard />
        </div>
        {/* controller section end here */}
      </div>
    </div>
  );
};

export default Fleethighlight;
