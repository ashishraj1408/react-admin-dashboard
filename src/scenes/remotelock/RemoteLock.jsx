import React, { useState } from 'react';
import LockPopup from './LockPopup';
import UnlockPopup from './UnlockPopup'; // Import the UnlockPopup component
import { IconButton, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from 'antd';
import Notification from '../notification/Notification';

const RemoteLock = () => {
  const [isNotificationOpen, setNotificationOpen]= useState(false);

  const handleNotificationClick = ()=>{
    setNotificationOpen(!isNotificationOpen);
  }
  const handleCloseNotification = () => {
    setNotificationOpen(false);
  }
  const data = [
    { id: '#1234567890', wheelLock: 'Not Available', bmsLock: 'Not Available', ignitionLock: 'Not Available', remoteLock: 'Lock', antiTheftLock: 'Not Available' },
    { id: '#1234567891', wheelLock: 'Not Available', bmsLock: 'Not Available', ignitionLock: 'Not Available', remoteLock: 'Lock', antiTheftLock: 'Not Available' },
    { id: '#1234567892', wheelLock: 'Not Available', bmsLock: 'Not Available', ignitionLock: 'Not Available', remoteLock: 'Lock', antiTheftLock: 'Not Available' },
    { id: '#1234567893', wheelLock: 'Not Available', bmsLock: 'Not Available', ignitionLock: 'Not Available', remoteLock: 'Lock', antiTheftLock: 'Not Available' },
    { id: '#1234567894', wheelLock: 'Not Available', bmsLock: 'Not Available', ignitionLock: 'Not Available', remoteLock: 'Lock', antiTheftLock: 'Not Available' },
    { id: '#1234567892', wheelLock: 'Not Available', bmsLock: 'Not Available', ignitionLock: 'Not Available', remoteLock: 'Lock', antiTheftLock: 'Not Available' },
    { id: '#1234567893', wheelLock: 'Not Available', bmsLock: 'Not Available', ignitionLock: 'Not Available', remoteLock: 'Lock', antiTheftLock: 'Not Available' },
  ];

  const [popupType, setPopupType] = useState(null);

  const handleLockClick = () => {
    setPopupType('lock');
  };

  const handleUnlockClick = () => {
    setPopupType('unlock');
  };

  const handleClosePopup = () => {
    setPopupType(null);
  };

  const notAvailableImg = `${process.env.PUBLIC_URL}/assets/images/WarningOctagon.svg`;

  const renderTableRows = () => {
    return data.map((device, index) => (
      <TableRow key={index}>
        <TableCell style={{ fontWeight: '600', fontFamily: 'Inter', fontSize: '14px' }}>{device.id}</TableCell>
        <TableCell style={{ fontFamily: "Inter" }}>
          {device.wheelLock === 'Not Available' ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img
                src={notAvailableImg}
                alt="Not Available"
                style={{ width: '30px', height: '30px' }}
              />
              <span>Not Available</span>
            </div>
          ) : (
            device.wheelLock
          )}
        </TableCell>
        <TableCell style={{ fontFamily: "Inter" }}>
          {device.bmsLock === 'Not Available' ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img
                src={notAvailableImg}
                alt="Not Available"
                style={{ width: '30px', height: '30px' }}
              />
              <span>Not Available</span>
            </div>
          ) : (
            device.bmsLock
          )}
        </TableCell>
        <TableCell style={{ fontFamily: "Inter" }}>
          {device.ignitionLock === 'Not Available' ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img
                src={notAvailableImg}
                alt="Not Available"
                style={{ width: '30px', height: '30px' }}
              />
              <span>Not Available</span>
            </div>
          ) : (
            device.ignitionLock
          )}
        </TableCell>
        <TableCell style={{ fontFamily: "Inter" }}>
          <Button variant="outlined" onClick={handleLockClick} style={{ ...styles.buttonStyle, borderRadius: '15px 0px 0px 15px' }}>Lock</Button>
          <Button variant="outlined" onClick={handleUnlockClick} style={{ ...styles.buttonStyle, borderRadius: '0px 15px 15px 0px' }}>Unlock</Button>
        </TableCell>
        <TableCell style={{ fontFamily: "Inter" }}>
          {device.antiTheftLock === 'Not Available' ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img
                src={notAvailableImg}
                alt="Not Available"
                style={{ width: '30px', height: '30px' }}
              />
              <span>Not Available</span>
            </div>
          ) : (
            device.antiTheftLock
          )}
        </TableCell>
        {/* Popups */}
        {popupType === 'lock' && (
          <LockPopup onClose={handleClosePopup} />
        )}
        {popupType === 'unlock' && (
          <UnlockPopup onClose={handleClosePopup} />
        )}
      </TableRow>
    ));
  };

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
      fontFamily: 'Inter',
    },
    headerIcons: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      fontFamily: 'Inter',
    },
    mainContent: {
      padding: '0px',
      fontFamily: 'Inter',
      width: '100%',
      height: '100vh',
    },
    tableContainer: {
      maxHeight: '500px',
      overflowY: 'auto',
    },
    tableHeadCell: {
      background: '#EAEAEA',
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: '16px',
      position: 'sticky',
      top: 0,
      zIndex: 1,
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
    pagination: {
      display: 'flex',
      justifyContent: 'end',
      padding: '16px 20px',
    },
  };

  return (
    <div style={styles.dashboard}>
      <header style={{ ...styles.header, borderLeft:'2px solid #f5f3f3', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)', position: 'fixed', width: 'calc(100% - 280px)', zIndex: '999' }}>
        <h1 style={{ padding: '0px 10px', color: '#343C6A', fontFamily: 'Inter' }}>Remote Lock</h1>
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
          <div style={{zIndex:2000, position:'absolute', right:'80px', top:'80px'}}>
            <Notification onClose={handleCloseNotification}/>
          </div>
        )
      }

      <div className='check' style={{ ...styles.filterSection, width: 'calc(100% - 280px)', background: 'rgb(245, 247, 250)', zIndex: '999', position: 'fixed', top: '100px', display: 'flex', margin: '0px', padding: '20px 30px', justifyContent: 'space-between' }}>
        <Button variant="outlined" style={{ fontFamily: 'Inter', background: '#fff', border: '#fff', borderRadius: '15px' }}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Funnel.svg`}
            alt="User"
            style={{ borderRadius: '10px', width: '30px', height: '30px' }}
          /> Filter
        </Button>
        <div>
          <Input
            placeholder="Search for something"
            prefix={<SearchIcon />}
            style={{ width: '100%', borderRadius: '20px', padding: '12px' }}
          />
        </div>
      </div>

      <div style={{ ...styles.mainContent, position: 'relative', top: '181px', background: '#f5f7fa' }}>
        <TableContainer component={Paper} style={styles.tableContainer}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={styles.tableHeadCell}>Device Id</TableCell>
                <TableCell style={styles.tableHeadCell}>Wheel Lock</TableCell>
                <TableCell style={styles.tableHeadCell}>BMS Lock</TableCell>
                <TableCell style={styles.tableHeadCell}>Ignition Lock</TableCell>
                <TableCell style={styles.tableHeadCell}>Remote Lock</TableCell>
                <TableCell style={styles.tableHeadCell}>Anti Theft Lock</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {renderTableRows()}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ ...styles.pagination, gap: '10px' }}>
          <Button sx={{
            fontFamily: 'Inter',
            color: '#038C38',
            fontSize: '15px',
            fontWeight: '500',
            '&:hover': {
              background: '#038C38',
              color: '#fff'
            }
          }}>Previous</Button>
          <Button sx={{
            fontFamily: 'Inter',
            color: '#038C38',
            fontSize: '15px',
            fontWeight: '500',
            '&:hover': {
              background: '#038C38',
              color: '#fff'
            }
          }}>1</Button>
          <Button sx={{
            fontFamily: 'Inter',
            color: '#038C38',
            fontSize: '15px',
            fontWeight: '500',
            '&:hover': {
              background: '#038C38',
              color: '#fff'
            }
          }}>2</Button>
          <Button sx={{
            fontFamily: 'Inter',
            color: '#038C38',
            fontSize: '15px',
            fontWeight: '500',
            '&:hover': {
              background: '#038C38',
              color: '#fff'
            }
          }}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default RemoteLock;
