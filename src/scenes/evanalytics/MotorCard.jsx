import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent, Typography, IconButton, Dialog } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PopupTable from './PopupTable'; // Assuming this is the correct import for PopupTable

const data = [
  { title: 'Controller Over Voltage', subtitle: 'Battery', count: 10 },
  { title: 'Controller Under Voltage', subtitle: 'Battery', count: 10 },
  { title: 'Controller Over Current ', subtitle: 'MOSFET', count: 10 },
];

const MotorEvSection = () => {
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const handleScroll = () => {
    // Check if we are at the start of the scroll
    if (scrollRef.current.scrollLeft === 0) {
      setIsAtStart(true);
    } else {
      setIsAtStart(false);
    }
  };
  const handleCardClick = (item) => {
    setSelectedItem(item);
    setOpenPopup(true);
  };
  const handleClose = () => {
    setOpenPopup(false);
  };
  useEffect(() => {
    const scrollElement = scrollRef.current;
    scrollElement.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div  style={{ padding: '0px 20px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        {!isAtStart && (
          <IconButton onClick={scrollLeft}>
            <ArrowBackIosIcon />
          </IconButton>
        )}

        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            whiteSpace: 'nowrap', // Ensures cards line up horizontally
            scrollbarWidth: 'none', // Hide scrollbar
            WebkitOverflowScrolling: 'touch',
            maxWidth: '100%', // Ensures it doesn't overflow off-screen
          }}
        >
          {data.map((item, index) => (
            <Card
              key={index}
              onClick={()=> handleCardClick(item)}
              style={{
                display: 'inline-block', // Ensures cards stay inline
                width: '300px', // Fixed width for each card
                borderRadius: '20px',
                padding: '10px',
                boxShadow: 'none',
                backgroundColor: '#fff',
                margin: '0 10px',
                position: 'relative',
                fontFamily: 'Inter',
              }}
            >
              <CardContent style={{ padding: '5px 10px', textAlign: 'start' }}>
                <Typography
                  variant="body1"
                  style={{
                    margin: '0px',
                    padding: '0px',
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    fontSize: '20px',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    margin: '0px',
                    padding: '0px',
                    fontFamily: 'Inter',
                    fontSize: '15px',
                  }}
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
                    style={{ margin: '0px', padding: '5px 0px',  textAlign: 'start' }}
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
      <Dialog open={openPopup} onClose={handleClose} maxWidth='xl' fullWidth>
          <PopupTable onClose={handleClose}/>
      </Dialog>
    </div>
  );
};

export default MotorEvSection;
