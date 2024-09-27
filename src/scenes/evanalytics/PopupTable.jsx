import { React, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  IconButton,
  InputBase,
  Dialog
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { Input } from 'antd';
import { DatePicker } from 'antd';
import { DatePickerProps } from 'antd';
import BatterViewPopup from './BatteryViewPopup';
// import BatterLinePopup from './BatteryLinePopup';


const EvpopupTable = () => {

  const [open, setOpen] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [dateRange, setDateRange] = useState('7 Days');

  const styles = {
    buttonStyle: {
      padding: '10px',
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      borderRadius: '15px',
      cursor: 'pointer',
      color: '#676767',
      fontFamily: 'Inter',
    },

  };
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
    setDateRange(dateString);
  };

  const handleDateRangeChange = (range) => {
    setDateRange(range);
  };
  const tableData = Array(7).fill({
    vehicleId: '#1234567890',
    lorem: 'Lorem lipsum',
    date: '28 Jan, 12:30 AM',
  });

  const CustomButton = styled(Button)(({ theme }) => ({
    margin: '0 8px',
    borderRadius: '20px',
    textTransform: 'none',
  }));
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  if (!open) {
    return null; // Do not render the component if open is false
  }

  return (
    <Box sx={{ p: 3, bgcolor: '#f5f5f5', borderRadius: 3, minWidth: '100%', margin: '0px', height: '100vh' }}>
      {/* Header */}
      <Box className="test" display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="p" style={{ color: '#343C6A', fontFamily: 'Inter', fontWeight: '600', fontSize: '22px' }}>
            Lorem Lipsum
          </Typography>
          <Typography variant="subtitle2" style={{ color: '#9A9D9B', fontFamily: 'Inter', fontSize: "17px", fontWeight: '600' }}>
            EV Analytics / Lorem lipsum
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <div>
            <Input
              placeholder="Search for something"
              prefix={<SearchIcon />}
              style={{ width: '100%', borderRadius: '20px', padding: '12px' }}
            />
          </div>
          <IconButton onClick={handleClose} sx={{ ml: 2 }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Date Range Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box mt={3} mb={3} display="flex" style={{ gap: '10px' }}>
          <CustomButton variant="contained" style={{ width: '80px', background: '#C5FFCD', color: '#000', borderRadius: '15px', border: '1px #696A6A', padding: '12px' }}>7 Days</CustomButton>
          <CustomButton variant="outlined" style={{ width: '80px', background: "#ffff", borderRadius: '15px', padding: "12px", color: '#676767', fontFamily: 'Inter', fontWeight: '400', border: "1px solid #ffff", }}>15 Days</CustomButton>
          <CustomButton variant="outlined" style={{ width: '80px', background: "#ffff", borderRadius: '15px', padding: "12px", color: '#676767', fontFamily: 'Inter', fontWeight: '400', border: "1px solid #ffff", }}>30 Days</CustomButton>
          <DatePicker style={{ ...styles.buttonStyle, width: '250px', display: 'flex', float: 'left' }} onChange={onChange} placeholder="Custom Date Range" />

        </Box>

        <Box style={{ marginTop: '24px', marginBottom: '24px' }}>
          <Button style={{
            border: '1px solid #D6CFCF', borderRadius: '8px', width: '120px', height: '45px', padding: '9px', margin: '0px'
          }} variant="outlined" startIcon={<DownloadIcon />}>
            Download
          </Button>
        </Box>
      </div>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ background: '#EAEAEA' }}>
              <TableCell style={{ color: '#070707', fontWeight: '500', fontSize: '16px', fontFamily: 'Inter' }}>Vehicle ID <ArrowDropDownIcon fontSize="small" /></TableCell>
              <TableCell style={{ color: '#070707', fontWeight: '500', fontSize: '16px', fontFamily: 'Inter' }}>Lorem lipsum <ArrowDropDownIcon fontSize="small" /></TableCell>
              <TableCell style={{ color: '#070707', fontWeight: '500', fontSize: '16px', fontFamily: 'Inter' }}>Lorem lipsum <ArrowDropDownIcon fontSize="small" /></TableCell>
              <TableCell style={{ color: '#070707', fontWeight: '500', fontSize: '16px', fontFamily: 'Inter' }}>Date <ArrowDropDownIcon fontSize="small" /></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell style={{ color: '#232323', fontFamily: 'Inter', fontWeight: '500', fontSize: '16px' }}>{row.vehicleId}</TableCell>
                <TableCell style={{ color: '#232323', fontFamily: 'Inter', fontWeight: '500', fontSize: '16px' }}>{row.lorem}</TableCell>
                <TableCell style={{ color: '#232323', fontFamily: 'Inter', fontWeight: '500', fontSize: '16px' }}>{row.lorem}</TableCell>
                <TableCell style={{ color: '#232323', fontFamily: 'Inter', fontWeight: '500', fontSize: '16px' }}>{row.date}</TableCell>
                <TableCell style={{ color: '#232323', fontFamily: 'Inter', fontWeight: '500', fontSize: '16px' }}>
                  <div onClick={handleOpenPopup} className='viewgraph' style={{ display: 'flex' }}>
                    <a href="#view-graph" style={{ textDecoration: 'none', color: '#1976d2' }}>View Graph
                    </a>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/views.svg`}
                      alt="Electric Scooter"
                      style={{ borderRadius: '10px', width: '30px', height: '30px', margin: '-4px 0px 0px 0px', padding: '4px 0px' }}
                    />
                  </div>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
      <Box className="pagination" display="flex" sx={{
        width: '100%',
        // mt: 2, // Using sx prop for better compatibility with MUI
        justifyContent: 'space-between',
        borderBottom: '1px solid #f5f3f3',
        p: 1.6// Short for padding: '16px'
      }} justifyContent="flex-end" padding={2}>
        <Typography style={{ fontFamily: 'Inter', fontWeight: '500', fontSize: '16px' }} variant="body2">Total Count: 7 record found</Typography>
        <Pagination count={4} color="primary" />
      </Box>

      {/* Pagination */}
      <Dialog
        className='dialogview'
        open={isPopupOpen}
        onClose={handleClosePopup}
        fullWidth
        maxWidth="md"
        PaperProps={{
          style: {
            height: '500px',
            width: '800px',
            borderRadius: '32px',
          },
        }}
      >
        <Box display="flex" style={{ width: '100%', justifyContent: 'space-between', borderBottom: '1px solid #f5f3f3', margin: "0px", padding: '0px 20px' }} justifyContent="flex-end" padding={2}>
          <p style={{ color: '#494343', fontFamily: 'Inter', fontWeight: '500', fontSize: '20px' }}>Battery</p>

          <IconButton onClick={handleClosePopup}>
            <CloseIcon />
          </IconButton>
        </Box>

        <BatterViewPopup className="batteryview" />
        {/* <BatterLinePopup/> */}
        {/* Your Donut Chart component */}
      </Dialog>
    </Box>
  );
};

export default EvpopupTable;


