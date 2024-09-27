

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination, DatePicker } from 'antd'; // Only import DatePicker from Ant Design
import { IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';  // Ensure 'moment' is installed

const PopupTables = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [historyRange, setHistoryRange] = useState('7d');
  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);
  const [incrementValue, setIncrementValue] = useState(1);

  const rowsPerPage = 2;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const offset = 10 + (currentPage - 1) * rowsPerPage;
        console.log(`Fetching data for page ${currentPage} with lowerLimit: ${offset}`);
        
        const response = await axios.post('https://staging.api.greentiger.in/api/v1/dashboard_kpis', {
          individualCumulative: 1,
          history: true,
          historyRange: "7d",
          lowerLimit: offset, 
          clientId: 31,
        });

        console.log('API Response:', response.data);
        const dataSets = response.data.data?.dataSets;

        if (dataSets && Object.keys(dataSets).length > 0) {
          const formattedData = Object.keys(dataSets).map(deviceID => ({
            deviceID,
            distanceTravelled: dataSets[deviceID].distanceTravelled.toFixed(2),
            date: new Date(dataSets[deviceID].epochDay).toLocaleDateString(),
          }));

          setData(formattedData);
        } else {
          setData([]);
        }
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [historyRange, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRangeChange = (range) => {
    setHistoryRange(range);
    setCurrentPage(1); // Reset to first page on history range change
  };

  const handleSubmit = () => {
    console.log(`Submitted with Start Value: ${startValue}, End Value: ${endValue}`);
  };

  const handleDownload = () => {
    console.log('Download clicked');
  };

  const handleIncrementChange = (increment) => {
    setIncrementValue(increment);
  };

  // Function to handle date change for Ant Design DatePicker
  const onChange = (date, dateString) => {
    console.log("Selected Date:", date, "Formatted Date:", dateString);
    setStartValue(date); // Update startValue with selected date
  };

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const displayedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  if (!isOpen) return null;

  return (
    <div className='check' style={{ padding: '0px', margin: '0px', fontFamily: 'Arial, sans-serif', background: '#F5F7FA', height: '100vh', position: 'relative' }}>
      <IconButton onClick={handleClose} style={{ position: 'absolute', margin: '0px', padding: '0px', width: '40px', height: '40px', color: 'black', right: '0px', top: '0px' }}>
        <CloseIcon />
      </IconButton>
      <div style={{ background: '#F5F7FA', padding: '10px', borderRadius: '10px', margin: '0px' }}>
        <h3 style={{ color: '#343C6A', margin: '0px', fontSize: '20px', fontFamily: 'Inter' }}>Total Distance Travelled</h3>
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: '#9A9D9B', textDecoration: 'underline', margin: '0px' }}>
            Fleet Highlights / Total Distance Travelled
          </p>
        </div>

        <div style={{ display: 'flex', width: '100%', float: 'left', marginTop: '20px', marginBottom: '15px', gap: '20px', padding: '0px 10px' }}>
          <div style={{ width: '40%', display: 'flex', gap: '25px', justifyContent: 'space-around' }}>
            <DatePicker style={{ borderRadius: '12px', height: '45px', fontFamily: 'Inter' }} onChange={onChange} placeholder='Customed  Date' />
          </div>

          <div style={{ width: '30%', display: 'flex', gap: '10px', justifyContent: 'space-around' }}>
            <DatePicker
              style={{ width: '100%' }} // Adjusted style for better layout
              onChange={onChange} // Use onChange from Ant Design
              placeholder='Start Date'
            />
            <button onClick={() => console.log(`Start Date: ${startValue}`)} style={submitStyle}>Start Value</button>
            <button onClick={() => console.log(`End Date: ${endValue}`)} style={submitStyle}>End Value</button>
            <button onClick={handleSubmit} style={submitStyle}>Submit</button>
          </div>

          <div style={{ width: '30%', display: 'flex', gap: '25px', justifyContent: 'end' }}>
            <div style={{ ...submitStyle, display: 'flex', float: 'left', padding: '4px 15px', background: '#F5F7FA' }}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/DownloadSimple.svg`}
                alt="Download"
                style={{ margin: '0px', padding: '0px' }}
              />
              <button onClick={handleDownload} style={submitStyle}>Download</button>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : data.length === 0 ? (
        <p>No Data Available</p>
      ) : (
        <>
          <table style={tableStyle}>
            <thead>
              <tr style={{ height: '50px' }}>
                <th style={headerStyle}>Vehicle ID</th>
                <th style={headerStyle}>Distance</th>
                <th style={headerStyle}>Date</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((row, index) => (
                <tr key={index}>
                  <td style={cellStyle}>{row.deviceID}</td>
                  <td style={cellStyle}>{row.distanceTravelled}</td>
                  <td style={cellStyle}>{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination
            current={currentPage}
            total={totalPages * rowsPerPage}
            pageSize={rowsPerPage}
            onChange={handlePageChange}
            showSizeChanger={false} // Optional: Hide page size changer
          />
        </>
      )}
    </div>
  );
};

// Styles
const submitStyle = {
  padding: '4px 15px',
  borderRadius: '10px',
  fontFamily: 'Inter',
  fontSize: '15px',
  color: 'black',
  cursor: 'pointer',
  border: 'none',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const headerStyle = {
  padding: '10px',
  textAlign: 'center',
  background: '#f0f0f0',
  fontWeight: 'bold',
  fontFamily: 'Inter',
};

const cellStyle = {
  padding: '10px',
  textAlign: 'center',
  borderBottom: '1px solid #ddd',
};

export default PopupTables;



// 1. State Variables
// data: Stores the fetched data to be displayed in the table.
// currentPage: Manages the current page for pagination.
// isOpen: Controls whether the popup is open or closed.
// loading: A boolean indicating if data is being fetched.
// error: Stores error messages if data fetching fails.
// historyRange: Stores the selected time range for data (e.g., 7 days).
// startValue & endValue: Stores the selected custom start and end dates.
// incrementValue: Stores a value used for custom increments (although it is not used in this code).
// 2. Effect Hook
// The useEffect hook is used to fetch data from the API whenever historyRange or currentPage changes. The hook:
// Sets loading to true.
// Posts a request to the API with the current historyRange and pagination offset.
// Formats the received data and stores it in the data state.
// Sets loading to false once the request is done.
// 3. Fetching Data from API
// The axios.post() call is used to send a POST request to an API endpoint. 
// The request sends some static parameters (individualCumulative, history, clientId, and lowerLimit).
// The response data is extracted and formatted into an array of objects, each containing deviceID, 
// distanceTravelled, and date. This data is used to populate the table.
// If the data fetching fails, the error is caught, and an error message is set.
// 4. Event Handlers
// handlePageChange: Updates the current page when pagination is used.
// handleClose: Closes the popup when the close button (X icon) is clicked.
// handleRangeChange: Changes the date range (e.g., to 'custom') and resets the page to the first.
// handleSubmit: Logs the selected start and end date.
// handleDownload: Logs when the "Download" button is clicked.
// handleIncrementChange: Updates the increment value (though this is not used in the code).
// 5. Pagination Logic
// The pagination is managed using the Pagination component from Ant Design (antd). The total pages are
//  calculated based on the length of the data and the number of rows per page (10). 
// The handlePageChange function updates the current page number.

// 6. Conditional Rendering
// If isOpen is false, the entire component is hidden.
// If loading is true, a loading message is displayed.
// If error contains an error message, it is shown.
// If there is no data available, a "No Data Available" message is displayed.
// 7. Table Rendering
// Once the data is fetched and formatted, the table is displayed with the following columns:

// Vehicle ID: The device identifier.
// Distance: The total distance traveled by the vehicle.
// Date: The formatted date corresponding to the data.
// The displayed data is sliced based on the current page number to show only the relevant rows for that page.

// 8. Popup Layout
// The UI has several components:

// Close Button: An IconButton that closes the popup.
// Heading and Breadcrumb: The text above the table shows the section heading.
// Date Picker: Allows the user to select a start and end date for custom filtering.
// Download Button: A button that triggers a download action (currently just logs it).
// 9. Styles
// The component has custom inline styles for buttons, the table, headers, and cells. 
// These styles are applied directly in the JSX elements for a simple, consistent design.

// 10. Additional Features
// Custom Date Range: The custom date range button is present, but it’s non-functional unless more logic is added.
// Download Button: Logs a message on click but can be extended to trigger a file download.
// Key Libraries:
// axios: For making API requests.
// Material UI (@mui): Used for UI components like buttons, date pickers, and text fields.
// Ant Design (antd): Used for the pagination control.
// Improvements:
// Data Filtering: The handleSubmit function can be enhanced to filter data based on startValue and endValue.
// Error Handling: More specific error messages could improve the user experience.
// Dynamic Date Range: The handleRangeChange could be extended to accept custom date ranges beyond '7d'.
