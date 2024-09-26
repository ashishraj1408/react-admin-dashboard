import React,{useState} from 'react';
import { Grid, Typography, List, ListItem, ListItemText, Box, Divider, Link } from '@mui/material';
import { PieChart } from 'react-minimal-pie-chart';
import {   Dialog, DialogContent, CircularProgress } from '@mui/material';
import RiderPopupTable from './RiderPopupTable';

const RiderScoreCard = () => {
  const score = 8.7; // Rider score value
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const [openModal, setOpenModal] = useState(false);
  // Define the segments for different statuses
  const statuses = [
    { label: 'Braking', color: '#3B82F6', value: 28 },
    { label: 'Cornering', color: '#F59E0B', value: 12 },
    { label: 'Acceleration', color: '#14B8A6', value: 6 },
    { label: 'Speeding', color: '#FACC15', value: 6 },
    { label: 'B-Current Discharge', color: '#17A11E', value: 6 },
  ];

  // Pie chart data
  const pieData = statuses.map(status => ({
    title: status.label,
    value: status.value,
    color: status.color,
  }));
  
  const styles = {
    iconStyle: {
      margin: '0px',
      padding: '0px 5px'
    }
  }

  return (
    <Box sx={{ backgroundColor: '#fff', borderRadius: '20px', padding: '0px', margin: '0px', fontFamily: 'inter' }}>
      <Grid container spacing={1} style={{ margin: '0px', padding: '0px 10px' }}>
        
        {/* Rider Score and Segmented Progress */}
        <Grid item style={{ width: '50%', padding: '40px', position: 'relative', fontFamily: 'inter' }}>
          <PieChart
            data={pieData}
            lineWidth={30} // Increased lineWidth
            radius={40}
            startAngle={-90}
            label={null}
            // label={({ dataEntry }) => `${Math.round(dataEntry.value)}%`}
            labelStyle={{
              fontSize: '6px',
              fontWeight: 'bold',
              fill: '#000',
            }}
            labelPosition={70}
          />

          {/* Rider Score displayed in the center of the PieChart */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              fontFamily: 'inter'
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'inter' }}>
              Rider Score
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#3B82F6', fontFamily: 'inter' }}>
              {score}
            </Typography>
          </Box>
        </Grid>

        {/* Status List */}
        <Grid item xs={6} style={{ width: '50%', padding: '20px 0px' }}>
          <Typography variant="body1" align="right" style={{ padding: '0px 10px 20px 10px' }}>
            <Link href="#" onClick={handleOpenModal} underline="always" color={'#3B82F6'} style={{ fontSize: '15px' }}>
              View Details
            </Link>
            <span style={{ width: '20px', height: '20px', display: 'flex', float: 'right' }}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Icon.svg`}
                alt="View Icon"
                style={styles.iconStyle}
              />
            </span>       
          </Typography>

          <List dense>
            {statuses.map((status, index) => (
              <React.Fragment key={index}>
                <ListItem style={{ marginBottom: '16px' }}> {/* Adding marginBottom */}
                  {/* Color Indicator */}
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      backgroundColor: status.color,
                      borderRadius: '50%',
                      marginRight: '4px',
                    }}
                  />
                  <ListItemText primary={status.label} />
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 'bold', color: status.color }}
                  >
                    {status.value}%
                  </Typography>
                </ListItem>
                {index < statuses.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Grid>
      </Grid>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="xl"
        fullWidth
        style={{ margin: '0px', padding: '0px' }}
      >
        <DialogContent>
          <RiderPopupTable handleCloseModal={handleCloseModal} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default RiderScoreCard;



// import React, { useState, useEffect } from 'react';
// import { Grid, Typography, List, ListItem, ListItemText, Box, Divider, Link } from '@mui/material';
// import { PieChart } from 'react-minimal-pie-chart';

// const RiderScoreCard = () => {
//   const [score, setScore] = useState(8.7); // Dummy rider score
//   const [statuses, setStatuses] = useState([
//     { label: 'Braking', color: '#3B82F6', value: 28 },
//     { label: 'Cornering', color: '#F59E0B', value: 12 },
//     { label: 'Acceleration', color: '#14B8A6', value: 6 },
//     { label: 'Speeding', color: '#FACC15', value: 6 },
//     { label: 'B-Current Discharge', color: '#17A11E', value: 6 },
//   ]); // Dummy statuses

//   useEffect(() => {
//     // Future API call to fetch actual data
//     /*
//     const fetchData = async () => {
//       try {
//         const response = await axios.post('http://192.168.0.125:16589/api/v1/dashboard_kpis', {
//           individualCumulative: 1,
//           history: true,
//           historyRange: '7d',
//           lowerLimit: 10,
//           clientId: 31
//         });

//         const apiData = response.data;
//         setScore(apiData.riderScore || 0);
//         setStatuses(apiData.statuses || []);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//     */
//   }, []);

//   // Pie chart data
//   const pieData = statuses.map(status => ({
//     title: status.label,
//     value: status.value,
//     color: status.color,
//   }));
//   const [modal,setModal] = useState(false);

//   const toggleModal = () =>{
//     setModal(!modal)
//   }

//   const styles = {
//     iconStyle: {
//       margin: '0px',
//       padding: '0px 5px'
//     },
//     rotatingChart: {
//       animation: 'rotate 2s ease-in-out', // Add rotation animation on mount
//     }
//   };

//   return (
//     <Box sx={{ backgroundColor: '#fff', borderRadius: '20px', padding: '0px', margin: '0px', fontFamily: 'inter' }}>
//       <Grid container spacing={1} style={{ margin: '0px', padding: '0px 10px' }}>

//         {/* Rider Score and Segmented Progress */}
//         <Grid item style={{ width: '50%', padding: '40px', position: 'relative', fontFamily: 'inter' }}>
//           <Box sx={styles.rotatingChart}>
//             <PieChart
//               data={pieData}
//               lineWidth={30}
//               radius={40}
//               startAngle={-90}
//               label={null}
//               labelStyle={{
//                 fontSize: '6px',
//                 fontWeight: 'bold',
//                 fill: '#000',
//               }}
//               labelPosition={70}
//             />
//           </Box>

//           {/* Rider Score displayed in the center of the PieChart */}
//           <Box
//             sx={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               textAlign: 'center',
//               fontFamily: 'inter'
//             }}
//           >
//             <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'inter' }}>
//               Rider Score
//             </Typography>
//             <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#3B82F6', fontFamily: 'inter' }}>
//               {score}
//             </Typography>
//           </Box>
//         </Grid>

//         {/* Status List */}
//         <Grid item xs={6} style={{ width: '50%', padding: '20px 0px' }}>
//           <Typography variant="body1" align="right" style={{ padding: '0px 10px 20px 10px' }}>
//             <button onClick={toggleModal} href="#" underline="always" color={'#3B82F6'} style={{ fontSize: '15px' }}>
//               View Details
//             </button>

//             <div className='modal'>
//                 <div className='overlay'>
//                     <h2>Hello Modal</h2>
//                     <button className='close-modal' onClick={toggleModal}>close</button>
//                 </div>
//             </div>
//             <span style={{ width: '20px', height: '20px', display: 'flex', float: 'right' }}>
//               <img
//                 src={`${process.env.PUBLIC_URL}/assets/images/Icon.svg`}
//                 alt="View Icon"
//                 style={styles.iconStyle}
//               />
//             </span>       
//           </Typography>

//           <List dense>
//             {statuses.map((status, index) => (
//               <React.Fragment key={index}>
//                 <ListItem style={{ marginBottom: '16px', padding:'5px 10px' }}>
//                   {/* Color Indicator */}
//                   <div
//                     style={{
//                       width: '10px',
//                       height: '10px',
//                       backgroundColor: status.color,
//                       borderRadius: '50%',
//                       marginRight: '4px',
//                     }}
//                   />
//                   <ListItemText primary={status.label} />
//                   <Typography
//                     variant="body2"
//                     sx={{ fontWeight: 'bold', color: status.color }}
//                   >
//                     {status.value}%
//                   </Typography>
//                 </ListItem>
//                 {index < statuses.length - 1 && <Divider />}
//               </React.Fragment>
//             ))}
//           </List>
//         </Grid>
//       </Grid>

//       {/* Add CSS keyframes animation */}
//       <style jsx="true">{`
//         @keyframes rotate {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </Box>
//   );
// };

// export default RiderScoreCard;
