import React, { useState } from 'react';
import { TextField, MenuItem, IconButton, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Added import for ExpandMoreIcon
import { DatePicker } from 'antd';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Maplocation from './Maplocation';
import Radio from '@mui/material/Radio';
import { Select } from 'antd';


const Trips = () => {
  const [vehicleId, setVehicleId] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [dateRange, setDateRange] = useState('7 Days');
  // const [vehicleId, setVehicleId] = useState(null);
  const { Option } = Select;
  const vehicleIds = [
    { value: '1', label: 'Vehicle 1' },
    { value: '2', label: 'Vehicle 2' },
    { value: '3', label: 'Vehicle 3' },
  ];
  const handleChange = (value) => {
    setVehicleId(value);
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
      margin: '16px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
      fontFamily: 'Inter',
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
  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '15px',
    cursor: 'pointer',
    color: '#676767',
    fontFamily: 'Inter',
  };
  // const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  //   console.log(date, dateString);
  //   setDateRange(dateString);
  // };
  const onChange = (date, dateString) => {
    console.log("Selected Date:", date, "Formatted Date:", dateString);
  };
  // const vehicleIds = [
  //   { value: '123', label: 'Vehicle 123' },
  //   { value: '456', label: 'Vehicle 456' },
  //   { value: '789', label: 'Vehicle 789' },
  // ];
  const tripsData = [
    {
      date: '1 July, 2024',
      totalTrips: 2,
      trips: [
        {
          startTime: '05:23 PM',
          endTime: '12:30 PM',
          distance: '248 km',
        },
        {
          startTime: '05:23 PM',
          endTime: '12:30 PM',
          distance: '248 km',
        },
      ],
    },
    // You can add more trip data similarly
  ];

  return (
    <div style={styles.dashboard}>
      <header style={{ ...styles.header, borderLeft:'2px solid #f5f3f3', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)', position: 'fixed', width: 'calc(100% - 280px)', zIndex: '999' }}>
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
        <div className="leftside" style={{ ...styles.formSection, width: '30%', background: '#fff' }}>
          {/* <div style={styles.formSection}> */}

          <div style={styles.formTitle}>Vehicle Id <span style={{ color: 'red' }}>*</span></div>
          <Select
            value={vehicleId}
            onChange={handleChange}
            style={{
              width: '100%', // Full width
              borderRadius: '20px',
              height:'45px' // Apply border-radius here
            }}
            placeholder="Select value" // Placeholder text
            dropdownStyle={{ borderRadius: '20px' }} // Style for dropdown options
          >
            {vehicleIds.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>


          <div style={{ ...styles.formTitle, marginTop: '10px' }}>Select Date <span style={{ color: 'red' }}>*</span></div>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '10px', justifyContent: 'space-between' }}>
            <DatePicker style={{ borderRadius: '12px', height: '45px', fontFamily: "Inter", }} onChange={onChange} placeholder='Start Date' />

            <DatePicker style={{ borderRadius: '12px', height: '45px', fontFamily: "Inter", }} onChange={onChange} placeholder='End Date' />

          </div>
          <div style={styles.datePickerContainer}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker style={{ ...styles.buttonStyle, width: '250px', display: 'flex', float: 'left' }} onChange={onChange} placeholder="Start Date" />
              <DatePicker
                label="End date"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                renderInput={(params) => <TextField {...params} style={styles.datePicker} />}
              />
            </LocalizationProvider>
          </div>
          <div className='resulted' style={styles.resultsSection}>
            <Typography variant="h6" style={{ borderBottom: '1px solid lightgray', fontWeight: '500', fontFamily: 'Inter', fontSize: '16px' }} gutterBottom>Results <span style={{ color: '#8B8888' }}>(5 results found)</span></Typography>
            {tripsData.map((trip, index, idx) => (
              <Accordion key={index} style={{ ...styles.tripPanel, fontFamily: 'Inter' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div className='radiobutton' style={{ display: 'flex' }} key={idx} >
                    <Radio
                      checked={selectedTrip === idx}  // Assuming `selectedTrip` is a state variable
                      onChange={() => setSelectedTrip(idx)} // Assuming `setSelectedTrip` is a function to change the selected trip
                      value={idx}
                      name="trip-radio"
                      inputProps={{ 'aria-label': `Trip ${idx}` }}
                    />
                    <Typography className='inside' style={{ fontSize: '16px', color: '#232323', marginLeft: '20px', fontWeight: '500' }}>
                      {`Date: ${trip.date}`}<br />
                      {`Total Trip: ${trip.totalTrips}`}
                    </Typography>
                  </div>

                </AccordionSummary>
                <AccordionDetails>
                  {trip.trips.map((tripDetail, idx) => (
                    <div className='testing' key={idx} style={{ ...styles.tripDetails, fontFamily: 'Inter' }}>
                      <Radio
                        checked={selectedTrip === idx}  // Assuming `selectedTrip` is a state variable
                        onChange={() => setSelectedTrip(idx)} // Assuming `setSelectedTrip` is a function to change the selected trip
                        value={idx}
                        name="trip-radio"
                        inputProps={{ 'aria-label': `Trip ${idx}` }}
                      />
                      <div className='checkings' style={{ fontFamily: 'Inter', display: "grid", gap: '10px', padding: '10px', width: '100%' }}>
                        <Typography style={{ fontFamily: 'Inter', display: 'flex', justifyContent: 'space-between', }}>Start time: <span className='texteddate' style={{ color: '#038C38', fontSize: '14px', fontWeight: '500' }}> {tripDetail.startTime}</span></Typography>
                        <Typography style={{ fontFamily: 'Inter', display: 'flex', justifyContent: 'space-between' }}>End time: <span className='texteddate' style={{ color: '#038C38', fontSize: '14px', fontWeight: '500' }}>{tripDetail.endTime}</span></Typography>
                        {/* Add Radio Button */}
                        <Typography style={{ padding: '0px', fontFamily: 'Inter', display: 'flex', justifyContent: 'space-between' }}>Total distance travelled: <span style={{ color: '#038C38', fontSize: '14px', fontWeight: '500' }}>{tripDetail.distance}</span></Typography>

                      </div>
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>

            ))}
            {/* second drop down start here */}

            {tripsData.map((trip, index, idx) => (
              <Accordion key={index} style={{ ...styles.tripPanel, fontFamily: 'Inter' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div className='radiobutton' style={{ display: 'flex' }} key={idx} >
                    <Radio
                      checked={selectedTrip === idx}  // Assuming `selectedTrip` is a state variable
                      onChange={() => setSelectedTrip(idx)} // Assuming `setSelectedTrip` is a function to change the selected trip
                      value={idx}
                      name="trip-radio"
                      inputProps={{ 'aria-label': `Trip ${idx}` }}
                    />
                    <Typography className='inside' style={{ fontSize: '16px', marginLeft: '20px', fontWeight: '500' }}>
                      {`Date: ${trip.date}`}<br />
                      {`Total Trip: ${trip.totalTrips}`}
                    </Typography>
                  </div>

                </AccordionSummary>
                <AccordionDetails>
                  {trip.trips.map((tripDetail, idx) => (
                    <div className='testing' key={idx} style={{ ...styles.tripDetails, fontFamily: 'Inter' }}>
                      <Radio
                        checked={selectedTrip === idx}  // Assuming `selectedTrip` is a state variable
                        onChange={() => setSelectedTrip(idx)} // Assuming `setSelectedTrip` is a function to change the selected trip
                        value={idx}
                        name="trip-radio"
                        inputProps={{ 'aria-label': `Trip ${idx}` }}
                      />
                      <div className='checkings' style={{ fontFamily: 'Inter', display: "grid", gap: '10px', padding: '10px', width: '100%' }}>
                        <Typography style={{ fontFamily: 'Inter', display: 'flex', justifyContent: 'space-between', }}>Start time: <span className='texteddate' style={{ color: '#038C38', fontSize: '14px', fontWeight: '500' }}> {tripDetail.startTime}</span></Typography>
                        <Typography style={{ fontFamily: 'Inter', display: 'flex', justifyContent: 'space-between' }}>End time: <span className='texteddate' style={{ color: '#038C38', fontSize: '14px', fontWeight: '500' }}>{tripDetail.endTime}</span></Typography>
                        {/* Add Radio Button */}
                        <Typography style={{ padding: '0px', fontFamily: 'Inter', display: 'flex', justifyContent: 'space-between' }}>Total distance travelled: <span style={{ color: '#038C38', fontSize: '14px', fontWeight: '500' }}>{tripDetail.distance}</span></Typography>

                      </div>
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>

            ))}

            {/* third drop down start here  */}

            {tripsData.map((trip, index, idx) => (
              <Accordion key={index} style={{ ...styles.tripPanel, fontFamily: 'Inter' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div className='radiobutton' style={{ display: 'flex' }} key={idx} >
                    <Radio
                      checked={selectedTrip === idx}  // Assuming `selectedTrip` is a state variable
                      onChange={() => setSelectedTrip(idx)} // Assuming `setSelectedTrip` is a function to change the selected trip
                      value={idx}
                      name="trip-radio"
                      inputProps={{ 'aria-label': `Trip ${idx}` }}
                    />
                    <Typography className='inside' style={{ fontSize: '16px', marginLeft: '20px', fontWeight: '500' }}>
                      {`Date: ${trip.date}`}<br />
                      {`Total Trip: ${trip.totalTrips}`}
                    </Typography>
                  </div>

                </AccordionSummary>
                <AccordionDetails>
                  {trip.trips.map((tripDetail, idx) => (
                    <div className='testing' key={idx} style={{ ...styles.tripDetails, fontFamily: 'Inter' }}>
                      <Radio
                        checked={selectedTrip === idx}  // Assuming `selectedTrip` is a state variable
                        onChange={() => setSelectedTrip(idx)} // Assuming `setSelectedTrip` is a function to change the selected trip
                        value={idx}
                        name="trip-radio"
                        inputProps={{ 'aria-label': `Trip ${idx}` }}
                      />
                      <div className='checkings' style={{ fontFamily: 'Inter', display: "grid", gap: '10px', padding: '10px', width: '100%' }}>
                        <Typography style={{ fontFamily: 'Inter', display: 'flex', justifyContent: 'space-between', }}>Start time: <span className='texteddate' style={{ color: '#038C38', fontSize: '14px', fontWeight: '500' }}> {tripDetail.startTime}</span></Typography>
                        <Typography style={{ fontFamily: 'Inter', display: 'flex', justifyContent: 'space-between' }}>End time: <span className='texteddate' style={{ color: '#038C38', fontSize: '14px', fontWeight: '500' }}>{tripDetail.endTime}</span></Typography>
                        {/* Add Radio Button */}
                        <Typography style={{ padding: '0px', fontFamily: 'Inter', display: 'flex', justifyContent: 'space-between' }}>Total distance travelled: <span style={{ color: '#038C38', fontSize: '14px', fontWeight: '500' }}>{tripDetail.distance}</span></Typography>

                      </div>
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>

            ))}

            {/* fourth drop down start here  */}

            {tripsData.map((trip, index, idx) => (
              <Accordion key={index} style={{ ...styles.tripPanel, fontFamily: 'Inter' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div className='radiobutton' style={{ display: 'flex' }} key={idx} >
                    <Radio
                      checked={selectedTrip === idx}  // Assuming `selectedTrip` is a state variable
                      onChange={() => setSelectedTrip(idx)} // Assuming `setSelectedTrip` is a function to change the selected trip
                      value={idx}
                      name="trip-radio"
                      inputProps={{ 'aria-label': `Trip ${idx}` }}
                    />
                    <Typography className='inside' style={{ fontSize: '16px', marginLeft: '20px', fontWeight: '500' }}>
                      {`Date: ${trip.date}`}<br />
                      {`Total Trip: ${trip.totalTrips}`}
                    </Typography>
                  </div>

                </AccordionSummary>
                <AccordionDetails>
                  {trip.trips.map((tripDetail, idx) => (
                    <div className='testing' key={idx} style={{ ...styles.tripDetails, fontFamily: 'Inter' }}>
                      <Radio
                        checked={selectedTrip === idx}  // Assuming `selectedTrip` is a state variable
                        onChange={() => setSelectedTrip(idx)} // Assuming `setSelectedTrip` is a function to change the selected trip
                        value={idx}
                        name="trip-radio"
                        inputProps={{ 'aria-label': `Trip ${idx}` }}
                      />
                      <div className='checkings' style={{ fontFamily: 'Inter', display: "grid", gap: '10px', padding: '10px', width: '100%' }}>
                        <Typography style={{ fontFamily: 'Inter', display: 'flex', justifyContent: 'space-between', }}>Start time: <span className='texteddate' style={{ color: '#038C38', fontSize: '14px', fontWeight: '500' }}> {tripDetail.startTime}</span></Typography>
                        <Typography style={{ fontFamily: 'Inter', display: 'flex', justifyContent: 'space-between' }}>End time: <span className='texteddate' style={{ color: '#038C38', fontSize: '14px', fontWeight: '500' }}>{tripDetail.endTime}</span></Typography>
                        {/* Add Radio Button */}
                        <Typography style={{ padding: '0px', fontFamily: 'Inter', display: 'flex', justifyContent: 'space-between' }}>Total distance travelled: <span style={{ color: '#038C38', fontSize: '14px', fontWeight: '500' }}>{tripDetail.distance}</span></Typography>

                      </div>
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>

            ))}

            {/* fivth dropdown start here  */}

            {tripsData.map((trip, index, idx) => (
              <Accordion key={index} style={{ ...styles.tripPanel, fontFamily: 'Inter' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div className='radiobutton' style={{ display: 'flex' }} key={idx} >
                    <Radio
                      checked={selectedTrip === idx}  // Assuming `selectedTrip` is a state variable
                      onChange={() => setSelectedTrip(idx)} // Assuming `setSelectedTrip` is a function to change the selected trip
                      value={idx}
                      name="trip-radio"
                      inputProps={{ 'aria-label': `Trip ${idx}` }}
                    />
                    <Typography className='inside' style={{ fontSize: '16px', marginLeft: '20px', fontWeight: '500' }}>
                      {`Date: ${trip.date}`}<br />
                      {`Total Trip: ${trip.totalTrips}`}
                    </Typography>
                  </div>

                </AccordionSummary>
                <AccordionDetails>
                  {trip.trips.map((tripDetail, idx) => (
                    <div className='testing' key={idx} style={{ ...styles.tripDetails, fontFamily: 'Inter' }}>
                      <Radio
                        checked={selectedTrip === idx}  // Assuming `selectedTrip` is a state variable
                        onChange={() => setSelectedTrip(idx)} // Assuming `setSelectedTrip` is a function to change the selected trip
                        value={idx}
                        name="trip-radio"
                        inputProps={{ 'aria-label': `Trip ${idx}` }}
                      />
                      <div className='checkings' style={{ fontFamily: 'Inter', display: "grid", gap: '10px', padding: '10px', width: '100%' }}>
                        <Typography style={{ fontFamily: 'Inter', display: 'flex', justifyContent: 'space-between', }}>Start time: <span className='texteddate' style={{ color: '#038C38', fontSize: '14px', fontWeight: '500' }}> {tripDetail.startTime}</span></Typography>
                        <Typography style={{ fontFamily: 'Inter', display: 'flex', justifyContent: 'space-between' }}>End time: <span className='texteddate' style={{ color: '#038C38', fontSize: '14px', fontWeight: '500' }}>{tripDetail.endTime}</span></Typography>
                        {/* Add Radio Button */}
                        <Typography style={{ padding: '0px', fontFamily: 'Inter', display: 'flex', justifyContent: 'space-between' }}>Total distance travelled: <span style={{ color: '#038C38', fontSize: '14px', fontWeight: '500' }}>{tripDetail.distance}</span></Typography>

                      </div>
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>

            ))}
          </div>
          {/* </div> */}
        </div>
        <div className="rightside" style={{ width: '70%', background: '#f5f7fa' }}>
          <Maplocation />
        </div>
      </div>
    </div>
  );
};

export default Trips;




