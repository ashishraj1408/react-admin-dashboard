// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import { IconButton, TextField } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { DatePicker } from '@mui/lab';

// const PopupTable = () => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [historyRange, setHistoryRange] = useState('7d');
//   const [startValue, setStartValue] = useState(null);
//   const [endValue, setEndValue] = useState(null);

//   const rowsPerPage = 10;
  

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.post('http://192.168.0.125:16589/api/v1/dashboard_kpis', {
//           individualCumulative: 1,
//           history: true,
//           historyRange: "7d",
//           lowerLimit: 10,
//           clientId: 31,
//         });

//         console.log('API Response:', response.data);

//         const dataSets = response.data.data.dataSets;
//         const formattedData = Object.keys(dataSets).map(deviceID => ({
//           deviceID,
//           distanceTravelled: dataSets[deviceID].distanceTravelled.toFixed(2),
//           date: new Date(dataSets[deviceID].epochDay).toLocaleDateString(),
//         }));

//         setData(formattedData);
//       } catch (error) {
//         setError('Error fetching data');
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [historyRange]);

//   const handlePageChange = (event, value) => {
//     setCurrentPage(value);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   const handleRangeChange = (range) => {
//     setHistoryRange(range);
//   };

//   const handleSubmit = () => {
//     console.log(`Submitted with Start Value: ${startValue}, End Value: ${endValue}`);
//   };

//   const handleDownload = () => {
//     console.log('Download clicked');
//     // Add logic for downloading the table data here
//   };

//   const totalPages = Math.ceil(data.length / rowsPerPage);
//   const displayedData = data.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   if (!isOpen) return null;

//   return (
//     <div className='check' style={{ padding: '0px', margin:'0px', fontFamily: 'Arial, sans-serif', background: '#fff', height: '100vh', position: 'relative' }}>
//       <IconButton onClick={handleClose} style={{ position: 'absolute', margin:'0px',padding:'0px', width:'40px', height:'40px',color:'black',   right: '0px', top: '0px' }}>
//         <CloseIcon />
//       </IconButton>
//       <div style={{ background: '#F5F7FA', padding: '10px', borderRadius: '10px', margin:'0px' }}>
//         <h3 style={{ color: '#343C6A', margin: '0px' ,fontSize:'20px', fontFamily:'Inter'}}>Total Distance Travelled</h3>
//         <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <p style={{ color: '#9A9D9B', textDecoration: 'underline', margin: '0px' }}>
//             Fleet Highlights / Total Distance Travelled
//           </p>
//         </div>

//         <div style={{ display: 'flex', width:'100%', float:'left', marginTop: '20px', marginBottom:'15px', gap: '20px', padding: '0px 10px' }}>
//           <div style={{width:'40%', display:'flex', gap:'25px', justifyContent:'space-arround'}}>
//             <button onClick={() => handleRangeChange('7d')} style={{ ...buttonStyle, background: '#E0FFE0' }}>7 Days</button>
//             <button onClick={() => handleRangeChange('15d')} style={buttonStyle}>15 Days</button>
//             <button onClick={() => handleRangeChange('30d')} style={buttonStyle}>30 Days</button>
//             <div  style={{...buttonStyle, display:'flex', float:'left'}}>
//                 <div onClick={() => handleRangeChange('custom')} >Custom Date Range</div>
//                 <img
//                 src={`${process.env.PUBLIC_URL}/assets/images/CalendarDots.svg`}
//                 alt="Electric Scooter"
//                 style={{  margin:'0px', padding:'0px'}}
//                 />
//             </div>
//           </div>
//           <div style={{width:'30%',display:'flex', gap:'25px', justifyContent:'space-arround'}}>
//             {/* <div style={{  color: '#676767', alignSelf: 'center' }}>Distance Travelled</div> */}
//             <DatePicker
//                 label="Start Date"
//                 value={startValue}
//                 onChange={(newValue) => setStartValue(newValue)}
//                 renderInput={(params) => <TextField {...params} variant="outlined" />}
//             />
//             <DatePicker
//                 label="End Date"
//                 value={endValue}
//                 onChange={(newValue) => setEndValue(newValue)}
//                 renderInput={(params) => <TextField {...params} variant="outlined" />}
//             />
//             <button onClick={() => handleRangeChange('30d')} style={{...buttonStyle, fontFamily:'Inter'}}>Start Value</button>
//             <button onClick={() => handleRangeChange('30d')} style={{...buttonStyle, fontFamily:'Inter'}}>End Value</button>
//             <button onClick={handleSubmit} style={{ ...submitStyle, background: '#D8D8D8', fontFamily:'Inter', color: 'black' }}>Submit</button>
            
//           </div>
//           <div style={{width:'30%',display:'flex', gap:'25px', justifyContent:'end'}}>
//             <div style={{...submitStyle, display:'flex',float:'left',padding:'4px 15px', background:'#F5F7FA'}}>
//                 <img
//                 src={`${process.env.PUBLIC_URL}/assets/images/DownloadSimple.svg`}
//                 alt="Electric Scooter"
//                 style={{margin:'0px', padding:'0px'}}
//                 />
//                 <button onClick={handleDownload} style={{...submitStyle, fontFamily:'Inter', fontSize:'15px',background:'#F5F7FA', color:'black'}}>Download</button>

//             </div>
//           </div>
//         </div>
//       </div>

//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         <>
//           <table style={{ ...tableStyle, marginTop: '0px', margin:'0px' }}>
//             <thead>
//               <tr style={{height:'50px'}}>
//                 <th style={{...headerStyle, background:'#EAEAEA'}}>Vehicle ID</th>
//                 <th style={{...headerStyle, background:'#EAEAEA'}}>Distance</th>
//                 <th style={{...headerStyle, background:'#EAEAEA'}}>Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {displayedData.map((item, index) => (
//                 <tr key={index}>
//                   <td style={cellStyle}>{item.deviceID}</td>
//                   <td style={cellStyle}>{item.distanceTravelled}</td>
//                   <td style={cellStyle}>{item.date}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <Stack spacing={2} alignItems="end" style={{ marginTop: '20px', width: '100%' }}>
//             <Pagination
//               count={totalPages}
//               page={currentPage}
//               onChange={handlePageChange}
//               color="primary"
//               showFirstButton
//               showLastButton
//               sx={{
//                 '& .MuiPaginationItem-root': {
//                   color: '#038C38',
//                 },
//                 '& .Mui-selected': {
//                   backgroundColor: '#038C38',
//                   color: '#fff',
//                 },
//               }}
//             />
//           </Stack>
//         </>
//       )}
//     </div>
//   );
// };

// // Styles
// const tableStyle = {
//   width: '100%',
//   borderCollapse: 'collapse',
//   marginBottom: '20px',
// };

// const headerStyle = {
//   backgroundColor: '#f5f5f5',
//   padding: '10px',
//   borderBottom: '1px solid #ddd',
//   textAlign: 'left',
// };

// const cellStyle = {
//   padding: '10px',
//   borderBottom: '1px solid #ddd',
//   textAlign: 'left',
// };

// const buttonStyle = {
//   padding: '10px',
//   backgroundColor: '#fff',
//   border: '1px solid #ddd',
//   borderRadius: '15px',
//   cursor: 'pointer',
//   color: '#676767',
//   fontFamily: 'Inter',
// };

// const submitStyle = {
//   padding: '10px 15px',
//   backgroundColor: '#00AB55',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '15px',
//   cursor: 'pointer',
// };

// export default PopupTable;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DatePicker } from '@mui/lab';

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

  const rowsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post('http://192.168.0.125:16589/api/v1/dashboard_kpis', {
          individualCumulative: 1,
          history: true,
          historyRange: "7d",
          lowerLimit: 10,
          clientId: 31,
        });

        console.log('API Response:', response.data);

        const dataSets = response.data.data.dataSets;
        const formattedData = Object.keys(dataSets).map(deviceID => ({
          deviceID,
          distanceTravelled: dataSets[deviceID].distanceTravelled.toFixed(2),
          date: new Date(dataSets[deviceID].epochDay).toLocaleDateString(),
        }));

        setData(formattedData);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [historyRange]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRangeChange = (range) => {
    setHistoryRange(range);
  };

  const handleSubmit = () => {
    console.log(`Submitted with Start Value: ${startValue}, End Value: ${endValue}`);
  };

  const handleDownload = () => {
    console.log('Download clicked');
    // Add logic for downloading the table data here
  };

  const handleIncrementChange = (increment) => {
    setIncrementValue(increment);
  };

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const displayedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Debugging logs
  console.log('Current Page:', currentPage);
  console.log('Total Pages:', totalPages);
  console.log('Displayed Data:', displayedData);

  if (!isOpen) return null;

  return (
    <div className='check' style={{ padding: '0px', margin: '0px', fontFamily: 'Arial, sans-serif', background: '#fff', height: '100vh', position: 'relative' }}>
      <IconButton onClick={handleClose} style={{ position: 'absolute', margin: '0px', padding: '0px', width: '40px', height: '40px', color: 'black', right: '0px', top: '0px' }}>
        <CloseIcon />
      </IconButton>
      <div style={{ background: '#F5F7FA', padding: '10px', borderRadius: '10px', margin: '0px' }}>
        <h3 style={{ color: '#343C6A', margin: '0px', fontSize: '20px', fontFamily: 'Inter' }}>Rider Score</h3>
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: '#9A9D9B', textDecoration: 'underline', margin: '0px' }}>
            Fleet Highlights / Total Distance Travelled
          </p>
        </div>

        <div style={{ display: 'flex', width: '100%', float: 'left', marginTop: '20px', marginBottom: '15px', gap: '20px', padding: '0px 10px' }}>
          <div style={{ width: '40%', display: 'flex', gap: '25px', justifyContent: 'space-around' }}>
            <button onClick={() => handleRangeChange('7d')} style={{ ...buttonStyle, background: '#E0FFE0' }}>7 Days</button>
            <button onClick={() => handleRangeChange('15d')} style={buttonStyle}>15 Days</button>
            <button onClick={() => handleRangeChange('30d')} style={buttonStyle}>30 Days</button>
            <div style={{ ...buttonStyle, display: 'flex', float: 'left' }}>
              <div onClick={() => handleRangeChange('custom')} >Custom Date Range</div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/CalendarDots.svg`}
                alt="Calendar"
                style={{ margin: '0px', padding: '0px' }}
              />
            </div>
          </div>
          <div style={{ width: '30%', display: 'flex', gap: '25px', justifyContent: 'space-around' }}>
            <DatePicker
              label="Start Date"
              value={startValue}
              onChange={(newValue) => setStartValue(newValue)}
              renderInput={(params) => <TextField {...params} variant="outlined" />}
            />
            <DatePicker
              label="End Date"
              value={endValue}
              onChange={(newValue) => setEndValue(newValue)}
              renderInput={(params) => <TextField {...params} variant="outlined" />}
            />
            <button onClick={handleSubmit} style={{ ...submitStyle, background: '#D8D8D8', fontFamily: 'Inter', color: 'black' }}>Submit</button>
          </div>
          <div style={{ width: '30%', display: 'flex', gap: '25px', justifyContent: 'end' }}>
            <div style={{ ...submitStyle, display: 'flex', float: 'left', padding: '4px 15px', background: '#F5F7FA' }}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/DownloadSimple.svg`}
                alt="Download"
                style={{ margin: '0px', padding: '0px' }}
              />
              <button onClick={handleDownload} style={{ ...submitStyle, fontFamily: 'Inter', fontSize: '15px', background: '#F5F7FA', color: 'black' }}>Download</button>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <table style={{ ...tableStyle, marginTop: '0px', margin: '0px' }}>
            <thead>
              <tr style={{ height: '50px' }}>
                <th style={{ ...headerStyle, background: '#EAEAEA' }}>Vehicle ID</th>
                <th style={{ ...headerStyle, background: '#EAEAEA' }}>Distance</th>
                <th style={{ ...headerStyle, background: '#EAEAEA' }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((item, index) => (
                <tr key={index}>
                  <td style={cellStyle}>{item.deviceID}</td>
                  <td style={cellStyle}>{item.distanceTravelled}</td>
                  <td style={cellStyle}>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Stack spacing={2} alignItems="end" style={{ marginTop: '20px', width: '100%' }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              showFirstButton
              showLastButton
              sx={{
                '& .MuiPaginationItem-root': {
                  color: '#038C38',
                },
                '& .Mui-selected': {
                  backgroundColor: '#038C38',
                  color: '#fff',
                },
              }}
            />
          </Stack>
        </>
      )}
    </div>
  );
};

// Styles
const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '20px',
};

const headerStyle = {
  backgroundColor: '#f5f5f5',
  padding: '10px',
  borderBottom: '1px solid #ddd',
  textAlign: 'left',
};

const cellStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
  textAlign: 'left',
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

const submitStyle = {
  padding: '10px 15px',
  backgroundColor: '#00AB55',
  color: '#fff',
  border: 'none',
  borderRadius: '15px',
  cursor: 'pointer',
};

export default PopupTables;
