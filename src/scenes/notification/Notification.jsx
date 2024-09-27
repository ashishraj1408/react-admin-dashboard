import React from 'react';
import {FaTimes} from 'react-icons/fa';

const Notification = ({ notifications, onClose }) => {

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2 style={styles.title}>Notification</h2>
                <button style={{...styles.closeButton, fontSize:'25px'}} onClick={onClose}>
                    <FaTimes />
                </button>
            </div>
            <div style={styles.actionContainer}>
                <button style={styles.markReadButton}>Mark all as read</button>
            </div>
            <div style={{...styles.content, overflowY:'scroll', height:'400px'}}>
                <div style={styles.date}>2024-09-20</div>
                <div style={styles.alertContainer}>
                    {renderAlert('ATS Alert On', '19:34:20')}
                    {renderAlert('ATS Alert On', '19:34:20')}
                    {renderAlert('ATS Alert On', '19:34:20')}
                    {renderAlert('ATS Alert On', '19:34:20')}
                    {renderAlert('ATS Alert On', '19:34:20')}

                </div>
            </div>
            <div style={styles.footer}>
                <a href="#" style={styles.footerLink}>See all Notifications</a>
            </div>
        </div>
    );
};

const renderAlert = (alertTitle, time) => (
    <>
        <div style={styles.alertHeader}>
            <div style={styles.alertTitle}>
                {alertTitle} <span style={styles.alertDot}>•</span>
            </div>
            <div style={styles.time}>{time}</div>
        </div>
        <div style={styles.alertDescription}>
            Lorem ipsum dolor sit amet consectetur. Scelerisque ultrices sit cursus sollicitudin nibh hendrerit sit sit. Vitae.
        </div>
        <hr style={styles.divider} />
    </>
);

const styles = {
    container: {
        maxWidth: '28rem',
        margin: 'auto',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        padding: '1rem',
    },
    header: {
        padding: '0.5rem 1rem',
        backgroundColor: '#f3f4f6',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#1f2937',
    },
    closeButton: {
        color: '#6b7280',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 'none',
    },
    actionContainer: {
        padding: '0.5rem 1rem',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    markReadButton: {
        backgroundColor: '#e5e7eb',
        color: '#374151',
        padding: '0.25rem 0.75rem',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        border: 'none',
    },
    content: {
        padding: '0.5rem 1rem',
        '&::-webkit-scrollbar': {
            width: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'green',
            borderRadius: '4px',
        },
        '&::-webkit-scrollbar-track': {
            background: '#f1f1f1', // Optional: background of the scrollbar track
        },
    },
    date: {
        color: '#4b5563',
        marginBottom: '0.5rem',
    },
    alertContainer: {
        // borderLeft: '4px solid #10b981',
        paddingLeft: '1rem',
    },
    alertHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.5rem',
    },
    alertTitle: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#1f2937',
    },
    alertDot: {
        color: '#ef4444',
        marginLeft: '0.25rem',
    },
    time: {
        color: '#6b7280',
    },
    alertDescription: {
        color: '#4b5563',
        marginBottom: '1rem',
    },
    divider: {
        marginBottom: '1rem',
    },
    footer: {
        padding: '0.5rem 1rem',
        backgroundColor: '#f3f4f6',
        textAlign: 'center',
    },
    footerLink: {
        color: '#2563eb',
        textDecoration: 'none',
        cursor: 'pointer',
    },
};



export default Notification;


