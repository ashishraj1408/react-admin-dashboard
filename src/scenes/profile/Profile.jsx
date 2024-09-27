import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
// import { FaTimes } from 'react-icons/fa';
// import UnlockPopup from './UnlockPopup'; 
import { IconButton, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Notification from '../notification/Notification';
import { color } from "highcharts";

const EditProfile = () => {
    const [profile, setProfile] = useState({
        yourName: "John",
        userName: "Doe",
        email: "example@xyz.com",
        password: "**********",
        dob: "25 January 1990",
        presentAddress: "Bommanahalli",
        permanentAddress: "Bommanahalli, BLR, KA",
        city: "Bengaluru",
        postalCode: "560068",
        country: "India",
    });
    const [isNotificationOpen, setNotificationOpen] = useState(false);

    const handleNotificationClick = () => {
        setNotificationOpen(!isNotificationOpen);
    }
    const handleCloseNotification = () => {
        setNotificationOpen(false);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSave = () => {
        console.log("Profile saved:", profile);
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
        container: {
            backgroundColor: "#f7fafc",
            // minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: '100%',
        },
        card: {
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            width: '60%',
            marginTop: '15px',
        },
        profileHeader: {
            display: 'flex',
            // justifyContent: 'space-between',
            borderBottom: '2px solid #eaeaea',
            paddingBottom: '10px',
            marginBottom: '20px',
        },
        profileImage: {
            position: 'relative',
            display: 'inline-block',
        },
        profileImageImg: {
            width: '200px',
            height: '170px',
            borderRadius: '50%',
        },
        editIcon: {
            position: 'absolute',
            bottom: '0',
            right: '0',
            backgroundColor: '#fff',
            borderRadius: '50%',
            padding: '5px',
            color: '#38a169',
            cursor: 'pointer',
        },
        formGroup: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '15px',
            color: '#232323',
            fontFamily: 'Inter',
            fontWeight: '400',
            fontSize: '13px'
        },
        label: {
            fontSize: '14px',
            color: '#4a5568',
            marginBottom: '5px',
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #DFEAF2',
            borderRadius: '15px',
            fontSize: '14px',
            outline: 'none',
        },
        saveButton: {
            backgroundColor: '#38a169',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            marginTop: '20px',
            width: '100%',
        },
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid #eaeaea',
            paddingBottom: '10px',
            marginBottom: '20px',
        },
        navLink: {
            color: '#a0aec0',
            textDecoration: 'none',
            paddingBottom: '5px',
            fontSize: '14px',
        },
        active: {
            color: '#38a169',
            borderBottom: '2px solid #38a169',
        },
        active: {
            color: "#38a169",
            borderBottom: "2px solid #38a169",
        },
        profileImage: {
            position: "relative",
            display: "inline-block",
            // borderRadius: "50%",
            overflow: "hidden", 
            height: "110px", // Maintain aspect ratio
            // Added to contain the icon
        },
        profileImageImg: {
            width: "180px", // Adjust as needed
            height: "110px", // Maintain aspect ratio
        },
        editIcon: {
            position: "absolute",
            bottom: "10px", // Adjust for vertical position
            right: "33px", // Adjust for horizontal position
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            padding: "5px",
            color: "#38a169",
            cursor: "pointer", // Indicates it's clickable
            zIndex: 1, // Add pointer cursor for better UX
        },
        flex: {
            display: "flex",
        },
        flexGrow: {
            flexGrow: 1,
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
        },
        inputLabel: {
            display: "block",
            marginBottom: "5px",
            color: "green",
        },
        inputField: {
            width: "100%",
            padding: "8px",
            border: "1px solid #cbd5e0",
            borderRadius: "4px",
        },
        saveButton: {
            backgroundColor: "#038C38",
            color: "#ffffff",
            // padding: "10px 20px",
            // borderRadius: "4px",
            border: "none",
            cursor: "pointer",
            fontFamily: 'Inter',
            fontWeight: '600',
            fontSize: '15px'
        },
        mt: {
            marginTop: "20px",
        },
    };

    return (
        <div style={styles.dashboard}>
            <header style={{ ...styles.header, borderLeft: '2px solid #f5f3f3', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)', position: 'fixed', width: 'calc(100% - 280px)', zIndex: '999' }}>
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
                    <div style={{ zIndex: 2000, position: 'absolute', right: '80px', top: '80px' }}>
                        <Notification onClose={handleCloseNotification} />
                    </div>
                )
            }

            <div style={{ ...styles.container, width: 'calc(100% - 272px)', position: 'absolute', height: '100vh' }}>
                <div style={styles.card}>
                    <div style={{ ...styles.profileHeader, width: '100%' }}>
                        <a href="#" style={{ ...styles.navLink, width: '25%', ...styles.active }}>
                            Edit Profile
                        </a>
                        <a href="#" style={{ ...styles.navLink, width: '37.5%' }}>
                            Preferences
                        </a>
                        <a href="#" style={{ ...styles.navLink, width: '37.5%', }}>
                            Security
                        </a>
                    </div>
                    <div className="main" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0px' }}>
                        <div style={styles.profileImage}>
                            <img
                                src="/assets/images/MaskGroup.svg"
                                alt="profile"
                                style={styles.profileImageImg}
                            />
                            <FontAwesomeIcon icon={faPen} style={styles.editIcon} />
                        </div>


                        <div style={styles.formGroup}>
                            {[
                                { label: 'Your Name', name: 'yourName' },
                                { label: 'User Name', name: 'userName' },
                                { label: 'Email', name: 'email' },
                                { label: 'Password', name: 'password', type: 'password' },
                                { label: 'Date of Birth', name: 'dob' },
                                { label: 'Present Address', name: 'presentAddress' },
                                { label: 'Permanent Address', name: 'permanentAddress' },
                                { label: 'City', name: 'city' },
                                { label: 'Postal Code', name: 'postalCode' },
                                { label: 'Country', name: 'country' },
                            ].map(({ label, name, type = 'text' }) => (
                                <div key={name}>
                                    <label style={styles.label}>{label}</label>
                                    <input
                                        type={type}
                                        name={name}
                                        value={profile[name]}
                                        onChange={handleChange}
                                        style={{ ...styles.input, color: '#8A8C8E', fontFamily: 'Inter', fontWeight: '400', fontSize: '12px' }}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                        <button style={{ ...styles.saveButton, width: '130px', height: '40px', borderRadius: '9px' }} onClick={handleSave}>
                            Save
                        </button>
                    </div>

                </div>

            </div>

        </div>

    );
};

const styles = {

};

export default EditProfile;
