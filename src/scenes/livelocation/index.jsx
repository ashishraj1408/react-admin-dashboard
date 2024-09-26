import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from 'antd';

// import Content from './Content';
import { TextField, MenuItem, IconButton, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import Contents from './Contents'

const LiveLocation = () => {
  const styles = {
    dashboard: {
      fontFamily: 'Inter',
      color: '#333',
    },
    header: {
      backgroundColor: '#fff',
      padding: '12px 19px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0px',
      fontFamily: 'Inter'
    },
    headerIcons: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      fontFamily: 'Inter'
    },
    iconButton: {
      fontSize: '30px',
      fontFamily: 'Inter'
    },
    mainContent: {
      padding: '0px',
      fontFamily: 'Inter',
      width: '100%',
      height: '100vh',
      fontFamily: 'Inter',
    },
    formSection: {
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      // margin: '16px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
      fontFamily: 'Inter',
      borderLeft: '2px solid #f5f3f3'
    },
    formTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '12px',
      fontFamily: 'Inter',
    },
    formControl: {
      marginBottom: '12px',
      width: '100%',
      fontFamily: 'Inter',
    },
    datePickerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'Inter',
    },
    datePicker: {
      width: '48%',
      fontFamily: 'Inter',
    },
    select: {
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '10px',
      fontFamily: 'Inter',
    },
    resultsSection: {
      width: '100%',
      background: '#f5f7fa',
      padding: '16px',
      fontFamily: 'Inter',
    },
    tripPanel: {
      marginBottom: '10px',
      backgroundColor: '#fff',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      fontFamily: 'Inter'
    },
    tripDetails: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 20px',
      // backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      fontFamily: 'Inter'
    },


  };

  return (
    <div style={styles.dashboard}>
      <header style={{ ...styles.header, borderLeft: '2px solid #f5f3f3', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)', position: 'fixed', width: 'calc(100% - 280px)', zIndex: '999' }}>
        <h1 style={{ padding: '0px 10px', color: '#343C6A', fontFamily: 'Inter' }}>Trips</h1>
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

      <div style={{ ...styles.mainContent, position: 'relative', display: 'flex', top: '101px', background: '#f5f7fa' }}>
        <div className="leftside" style={{ ...styles.formSection, width: '30%', height:'1100px', background: '#fff' }}>
          {/* <div style={styles.formSection}> */}

          <div style={{ fontSize: '15px', fontFamily: 'Inter', borderRadius: '8px', padding: '4px 10px', border: '1px solid #D0CACA', display: 'flex', justifyContent: 'space-between' }}>
            <p style={{}}>All</p>
            <p style={{ background: '#F8F5F5', padding: '15px', margin: '0px', borderRadius: '8px' }}>50</p>
          </div>
          <div style={{ display: 'grid', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
              <p style={{ color: '#676767', fontFamily: 'Inter' }}>Ignition</p>
              <div>
                <button style={{ width: '100px', padding: '15px', color: '#5A5A5A', fontWeight: '500', border: '1px solid #fff', borderRadius: '10px 0px 0px 10px', fontFamily: 'Inter' }}>ON</button>
                <button style={{ width: '100px', padding: '15px', color: '#5A5A5A', fontWeight: '500', border: '1px solid #fff', borderRadius: '0px 10px 10px 0px', fontFamily: 'Inter' }}>OFF</button>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
              <p style={{ color: '#676767', fontFamily: 'Inter' }}>SOC</p>
              <div>
                <button style={{ width: '100px', padding: '15px', color: '#5A5A5A', fontWeight: '500', border: '1px solid #fff', borderRadius: '10px 0px 0px 10px', fontFamily: 'Inter' }}>0 %</button>
                <button style={{ width: '100px', padding: '15px', color: '#5A5A5A', fontWeight: '500', border: '1px solid #fff', fontFamily: 'Inter' }}> 20%</button>
                <button style={{ width: '100px', padding: '15px', color: '#5A5A5A', fontWeight: '500', border: '1px solid #fff', borderRadius: '0px 10px 10px 0px', fontFamily: 'Inter' }}>Normal </button>

              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
              <p style={{ color: '#676767', fontFamily: 'Inter' }}>Battery Status</p>
              <div>
                <button style={{ width: '100px', padding: '15px', color: '#5A5A5A', fontWeight: '500', border: '1px solid #fff', borderRadius: '10px 0px 0px 10px', fontFamily: 'Inter' }}>Charging</button>
                <button style={{ width: '100px', padding: '15px', color: '#5A5A5A', fontWeight: '500', border: '1px solid #fff', fontFamily: 'Inter' }}> Discharging</button>
                <button style={{ width: '100px', padding: '15px', color: '#5A5A5A', fontWeight: '500', border: '1px solid #fff', borderRadius: '0px 10px 10px 0px', fontFamily: 'Inter' }}>Off </button>

              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
              <p style={{ color: '#676767', fontFamily: 'Inter' }}>Immediate Action</p>
              <div>
                <button style={{ width: '100px', padding: '15px', color: '#5A5A5A', fontWeight: '500', border: '1px solid #fff', borderRadius: '10px 0px 0px 10px', fontFamily: 'Inter' }}>ATS</button>
                <button style={{ width: '100px', padding: '15px', color: '#5A5A5A', fontWeight: '500', border: '1px solid #fff', borderRadius: '0px 10px 10px 0px', fontFamily: 'Inter' }}> Fail Alert</button>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
              <p style={{ color: '#676767', fontFamily: 'Inter' }}>High Temp</p>
              <div>
                <button style={{ width: '100px', padding: '15px', color: '#5A5A5A', fontWeight: '500', border: '1px solid #fff', borderRadius: '10px 0px 0px 10px', fontFamily: 'Inter' }}>Battery</button>
                <button style={{ width: '100px', padding: '15px', color: '#5A5A5A', fontWeight: '500', border: '1px solid #fff', fontFamily: 'Inter' }}> Motor</button>
                <button style={{ width: '100px', padding: '15px', color: '#5A5A5A', fontWeight: '500', border: '1px solid #fff', borderRadius: '0px 10px 10px 0px', fontFamily: 'Inter' }}>Controller </button>

              </div>
            </div>
          </div>
          <div style={{ marginTop: '10px' }}>
            <Input
              placeholder="Search for something"
              prefix={<SearchIcon />}
              style={{ width: '100%', borderRadius: '20px', padding: '12px' }}
            />
          </div>
          <div className='dropdownlist' style={{ marginTop: '20px', }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #ECECEC' }}>
              <p style={{ fontFamily: 'Inter', fontWeight: '500', fontSize: '12px', color: '#676767', margin: '0px', padding: '0px' }}>General Details</p>
              <p style={{ fontFamily: 'Inter', fontWeight: '600', fontSize: '18px', color: '#343C6A', margin: '0px', padding: '0px' }}>012345678</p>
            </div>
            <div>
              <p style={{ fontFamily: 'Inter', fontWeight: '500', fontSize: '12px', color: '#676767' }}>Last Packet Received | <span>28 Jan, 18:30:40</span></p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex' }}> <img
                  src={`${process.env.PUBLIC_URL}/assets/images/Speedometer.svg`}
                  alt="Settings"
                  style={{ borderRadius: '10px', width: '30px', }}
                />
                  <p style={{ padding: "0px 10px", color: '#676767', fontFamily: 'Inter', fontSize: '12px' }}>Speed : 50Km/hr</p>
                </div>
                <div style={{ display: 'flex' }}> <img
                  src={`${process.env.PUBLIC_URL}/assets/images/paths.svg`}
                  alt="Settings"
                  style={{ borderRadius: '10px', width: '30px', }}
                />
                  <p style={{ padding: "0px 10px", color: '#038C38', fontWeight: '600', fontFamily: 'Inter', fontSize: '12px' }}>Trip Details Link</p>
                </div>
              </div>
              <div>
                <p style={{ border: '1px solid #FFC1C1', width: '110px', padding: '11px', margin: '15px 0px', borderRadius: '26px', background: '#FFC1C1', color: '#BB0707', fontFamily: 'Inter', fontWeight: '500', textAlign: 'center', fontSize: '12px' }}>Over Speed</p>
              </div>
            </div>
            <div style={{ display: 'flex', position: 'absolute', justifyContent: 'space-between', gap: '20px' }}>
              <button style={{ width: '125px', height: '90px', padding: '10px', borderRadius: '10px', border: '1px solid #C2BDBD', background: '#ffff' }}>
                <p style={{ color: '#818181', fontFamily: 'Inter', fontWeight: '400', fontSize: '12px' }}>Ignition On/Off</p>
                <p style={{ color: '#038C38', textAlign: 'start', padding: '0px 10px', fontFamily: 'Inter', fontWeight: '600', fontSize: '12px' }}>10</p>
              </button>
              <button style={{ width: '125px', height: '90px', padding: '10px', borderRadius: '10px', border: '1px solid #C2BDBD', background: '#ffff' }}>
                <p style={{ color: '#818181', fontFamily: 'Inter', fontWeight: '400', fontSize: '12px' }}>Battery Status</p>

                <p style={{ display: 'flex', padding: '0px 10px' }}><span style={{ margin: '0px', padding: '0px', alignItems: 'center', color: '#038C38', display: 'grid', fontFamily: 'Inter', fontWeight: '600' }}>Charging</span> <span><img
                  src={`${process.env.PUBLIC_URL}/assets/images/BatteryChargingVerticals.svg`}
                  alt="Settings"
                  style={{ borderRadius: '10px', width: '30px', }}
                /></span> </p>
              </button>
              <button style={{ width: '125px', height: '90px', padding: '10px', borderRadius: '10px', border: '1px solid #C2BDBD', background: '#ffff' }}>
                <p style={{ color: '#818181', fontFamily: 'Inter', fontWeight: '400', fontSize: '12px' }}>SOC/ Voltage</p>
                <p style={{ fontFamily: 'Inter', fontWeight: '600', color: '#FF0000', fontSize: '12px', textAlign: 'start', padding: '0px 10px' }}>10 %</p>
              </button>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:'100px',
                backgroundColor: '#f3f4f6',
                // margin: 0
              }}>
                <div style={{
                  backgroundColor: 'white',
                  padding: '16px',
                  border: '1px solid #d1d5db',
                  fontFamily: 'Arial, sans-serif',
                  width:'100%'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{color:'#404040', fontFamily:'Inter', fontSize:'12px', fontWeight:'400'}}>Vehicle Id :</span>
                    <span style={{color:'#343C6A', fontFamily:'Inter', fontSize:'14px',fontWeight:'600'}}>#1234567890</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{color:'#404040', fontFamily:'Inter', fontSize:'12px', fontWeight:'400'}}>Location services :</span>
                    <span style={{color:'#038C38', fontFamily:'Inter', fontSize:'14px',fontWeight:'600'}}>On</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{color:'#404040', fontFamily:'Inter', fontSize:'12px', fontWeight:'400'}}>ATS(Anti-Theft System) :</span>
                    <span style={{color:'#343C6A', fontFamily:'Inter', fontSize:'14px',fontWeight:'600'}} >Null</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{color:'#404040', fontFamily:'Inter', fontSize:'12px', fontWeight:'400'}}>Battery Percentage :</span>
                    <span style={{color:'#343C6A', fontFamily:'Inter', fontSize:'14px',fontWeight:'600'}}>45%</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{color:'#404040', fontFamily:'Inter', fontSize:'12px', fontWeight:'400'}}>Controller faults :</span>
                    <span style={{color:'#343C6A', fontFamily:'Inter', fontSize:'14px',fontWeight:'600'}}>Null</span>
                  </div>
                  <div style={{
                   
                    margin: '8px 0'
                  }}></div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{color:'#404040', fontFamily:'Inter', fontSize:'12px', fontWeight:'400'}}>SOC/Voltage :</span>
                    <span style={{color:'#343C6A', fontFamily:'Inter', fontSize:'14px',fontWeight:'600'}}>35º C</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{color:'#404040', fontFamily:'Inter', fontSize:'12px', fontWeight:'400'}}>Faults :</span>
                    <span style={{color:'#BB0707', fontFamily:'Inter', fontSize:'14px',fontWeight:'600'}}>Critical level</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{color:'#404040', fontFamily:'Inter', fontSize:'12px', fontWeight:'400'}}>Temperature :</span>
                    <span style={{color:'#343C6A', fontFamily:'Inter', fontSize:'14px',fontWeight:'600'}}>40º C</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{color:'#404040', fontFamily:'Inter', fontSize:'12px', fontWeight:'400'}}>Motor :</span>
                    <span style={{color:'#343C6A', fontFamily:'Inter', fontSize:'14px',fontWeight:'600'}}>Value goes here</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{color:'#404040', fontFamily:'Inter', fontSize:'12px', fontWeight:'400'}}>Controller :</span>
                    <span style={{color:'#343C6A', fontFamily:'Inter', fontSize:'14px',fontWeight:'600'}}>Value goes here</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{color:'#404040', fontFamily:'Inter', fontSize:'12px', fontWeight:'400'}}>Motor temperature :</span>
                    <span style={{color:'#BB0707', fontFamily:'Inter', fontSize:'14px',fontWeight:'600'}}>High</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{color:'#404040', fontFamily:'Inter', fontSize:'12px', fontWeight:'400'}}>Motor faults :</span>
                    <span style={{color:'#343C6A', fontFamily:'Inter', fontSize:'14px',fontWeight:'600'}}>Null</span>
                  </div>
                </div>
              </div>
          </div>






          {/* </div> */}
        </div>
        <div className="rightside" style={{ width: '70%',height:'1100px', background: '#f5f7fa' }}>
          <div style={{ background: '#FFFFFF', margin: '0px', padding: '1px' }}>
            <ul style={{ display: 'flex', justifyContent: 'space-evenly', gap: '100px' }}>
              <li style={{ listStyle: 'none', display: 'flex', margin: '0px', padding: '0px' }}>
                <span style={{ width: '10px', height: '10px', background: '#FF0000', borderRadius: '50px' }}></span><span style={{ margin: '-4px 0px 0px 6px', fontFamily: 'Inter', fontWeight: '400', fontSize: '12px' }}>High Temp</span>
              </li>
              <li style={{ listStyle: 'none', display: 'flex', margin: '0px', padding: '0px' }}>
                <span style={{ width: '10px', height: '10px', background: '#F59E0B', borderRadius: '50px' }}></span><span style={{ margin: '-4px 0px 0px 6px', fontFamily: 'Inter', fontWeight: '400', fontSize: '12px' }}>Fault</span>
              </li>
              <li style={{ listStyle: 'none', display: 'flex', margin: '0px', padding: '0px' }}>
                <span style={{ width: '10px', height: '10px', background: '#1814F3', borderRadius: '50px' }}></span><span style={{ margin: '-4px 0px 0px 6px', fontFamily: 'Inter', fontWeight: '400', fontSize: '12px' }}>ATS/Fall Alert</span>
              </li>
              <li style={{ listStyle: 'none', display: 'flex', margin: '0px', padding: '0px' }}>
                <span style={{ width: '10px', height: '10px', background: '#17A11E', borderRadius: '50px' }}></span><span style={{ margin: '-4px 0px 0px 6px', fontFamily: 'Inter', fontWeight: '400', fontSize: '12px' }}>Ignition On</span>
              </li>
              <li style={{ listStyle: 'none', display: 'flex', margin: '0px', padding: '0px' }}>
                <span style={{ width: '10px', height: '10px', background: '#9C9B96', borderRadius: '50px' }}></span><span style={{ margin: '-4px 0px 0px 6px', fontFamily: 'Inter', fontWeight: '400', fontSize: '12px' }}>Ignition Off</span>
              </li>

            </ul>
          </div>
          <Contents />
        </div>
      </div>
    </div>
  );
};

export default LiveLocation;
