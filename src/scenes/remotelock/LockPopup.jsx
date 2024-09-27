import React from 'react';
import { Button, Paper, IconButton } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock'; // You can replace this with your image import

const LockPopup = ({ onClose }) => {
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    popupContainer: {
      position: 'relative', // This allows the close button to be positioned relative to the popup
      width: '80%',
      maxWidth: '400px',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    },
    lockIcon: {
      fontSize: '48px',
      color: 'red',
    },
    title: {
      color: 'red',
      margin: '20px 0',
      fontWeight: 'bold',
    },
    content: {
      margin: '10px 0',
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    confirmButton: {
      backgroundColor: 'green',
      color: '#fff',
      width: '45%',
    },
    cancelButton: {
      backgroundColor: 'lightgray',
      color: '#000',
      width: '45%',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.overlay}>
      <Paper style={styles.popupContainer}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/cross.svg`}
          alt="Close"
          style={{ ...styles.closeButton, width: '20px', height: '20px' }}
          onClick={onClose} // This will close the popup when clicked
        />
        <LockIcon style={styles.lockIcon} />
        <h2 style={styles.title}>Lock Confirmation!</h2>
        <p style={{...styles.content, fontFamily:'Inter', fontWeight:'500', fontSize:'15px'}}>
          You are about to lock the <br />device id #1234567890 remotely.
        </p>
        <p style={{fontFamily:'Inter', fontWeight:'500', fontSize:'15px'}}> Are you sure you wish to proceed to lock?</p>
        <div style={styles.buttonsContainer}>
          <Button style={styles.confirmButton} onClick={onClose}>
            Confirm
          </Button>
          <Button style={styles.cancelButton} onClick={onClose}>
            Cancel
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default LockPopup;
