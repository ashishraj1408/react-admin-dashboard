// import React, { useRef } from 'react';
// import { Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// const data = [
//   { title: 'Short Circuit', subtitle: 'Battery', count: 10 },
//   { title: 'Thermistor Disconnect', subtitle: 'Battery', count: 10 },
//   { title: 'Thermistor Disconnect', subtitle: 'MOSFET', count: 10 },
//   { title: 'Cell Over Voltage', subtitle: 'Lorem Ipsum', count: 10 },
//   // { title: 'Low Voltage', subtitle: 'Battery', count: 8 },
// ];

// const BatterySecCard = () => {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//   };

//   return (
//     <div className='main-card' style={{ padding: '0px 20px', overflow: 'hidden' }}>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         {/* <IconButton onClick={scrollLeft}>
//           <ArrowBackIosIcon />
//         </IconButton> */}

//         <div
//           ref={scrollRef}
//           style={{
//             display: 'flex',
//             overflowX: 'auto',
//             scrollBehavior: 'smooth',
//             whiteSpace: 'nowrap', // Ensures cards line up horizontally
//             scrollbarWidth: 'auto', // Show scrollbar for debugging
//             WebkitOverflowScrolling: 'touch',
//             maxWidth: '100%', // Ensures it doesn't overflow off-screen
//           }}
//         >
//           {data.map((item, index) => (
//             <Card
//               key={index}
//               style={{
//                 display: 'inline-block', // Ensures cards stay inline
//                 width: '300px', // Fixed width for each card
                
//                 borderRadius: '20px',
//                 padding: '10px',
//                 boxShadow: 'none',
//                 backgroundColor: '#fff',
//                 margin: '0 10px',
//                 position: 'relative',
//                 fontFamily: 'Inter',
//               }}
//             >
//               <CardContent className='each-card'  style={{ padding: '5px 10px', textAlign: 'start' }}>
//                 <Typography
//                   variant="p"
//                   style={{ margin: '0px', padding: '0px', fontFamily: 'Inter', fontWeight:'500', fontSize:'20px' }}
//                 >
//                   {item.title}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   style={{
//                     margin: '0px',
//                     padding: '0px',
//                     fontFamily: 'Inter',
//                     fontSize:'15px'
//                   }}
//                 >
//                   {item.subtitle}
//                 </Typography>

//                 <div
//                   style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     marginTop: '10px',
//                   }}
//                 >
//                   <Typography
//                     variant="h4"
//                     style={{ margin: '0px', padding: '5px 0px', textAlign: 'start' }}
//                   >
//                     {item.count}
//                   </Typography>
//                   <img
//                     src={`${process.env.PUBLIC_URL}/assets/images/Vector.svg`}
//                     alt="Leaf"
//                     style={{
//                       backgroundColor: '#d4f5d4',
//                       borderRadius: '10px',
//                       padding: '5px',
//                       height: '30px',
//                       width: '30px',
//                     }}
//                   />
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <IconButton onClick={scrollRight}>
//           <ArrowForwardIosIcon />
//         </IconButton>
//       </div>
//     </div>
//   );
// };

// export default BatterySecCard;



import React, { useRef, useState } from 'react';
import { Grid, Card, CardContent, Typography, IconButton, Dialog } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PopupTable from './PopupTable'; // Assuming this is the correct import for PopupTable

const data = [
  { title: 'Short Circuit', subtitle: 'Battery', count: 10 },
  { title: 'Thermistor Disconnect', subtitle: 'Battery', count: 10 },
  { title: 'Thermistor Disconnect', subtitle: 'MOSFET', count: 10 },
  { title: 'Cell Over Voltage', subtitle: 'Lorem Ipsum', count: 10 },
  // { title: 'Low Voltage', subtitle: 'Battery', count: 8 },
];

const BatterySecCard = () => {
  const scrollRef = useRef(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setOpenPopup(true);
  };

  const handleClose = () => {
    setOpenPopup(false);
  };

  return (
    <div className='main-card' style={{ padding: '0px 20px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            whiteSpace: 'nowrap',
            maxWidth: '100%',
          }}
        >
          {data.map((item, index) => (
            <Card
              key={index}
              onClick={() => handleCardClick(item)} // Add onClick to handle card click
              style={{
                display: 'inline-block',
                width: '300px',
                borderRadius: '20px',
                padding: '10px',
                boxShadow: 'none',
                backgroundColor: '#fff',
                margin: '0 10px',
                position: 'relative',
                fontFamily: 'Inter',
                cursor: 'pointer', // Indicate the card is clickable
              }}
            >
              <CardContent className='each-card' style={{ padding: '5px 10px', textAlign: 'start' }}>
                <Typography
                  variant="p"
                  style={{ margin: '0px', padding: '0px', fontFamily: 'Inter', fontWeight: '500', fontSize: '20px' }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ margin: '0px', padding: '0px', fontFamily: 'Inter', fontSize: '15px' }}
                >
                  {item.subtitle}
                </Typography>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '10px',
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{ margin: '0px', padding: '5px 0px', textAlign: 'start' }}
                  >
                    {item.count}
                  </Typography>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Vector.svg`}
                    alt="Leaf"
                    style={{
                      backgroundColor: '#d4f5d4',
                      borderRadius: '10px',
                      padding: '5px',
                      height: '30px',
                      width: '30px',
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <IconButton onClick={scrollRight}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>

      {/* Render the PopupTable inside a Dialog */}
      <Dialog open={openPopup} onClose={handleClose} maxWidth="xl" fullWidth style={{margin:'0px'}}>
        <PopupTable onClose={handleClose} style={{margin:'0px'}}/>
      </Dialog>
    </div>
  );
};

export default BatterySecCard;
