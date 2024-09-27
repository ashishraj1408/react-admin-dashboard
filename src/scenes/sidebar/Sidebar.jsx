// import React, { useState } from "react";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
// import { tokens } from "../../theme";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import Settings from "@mui/icons-material/Settings";

// // Ensure Item component is defined
// const Item = ({ title, to, icon, selected, setSelected, fontSize }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const styles = {
//     iconStyle: {
//       fontFamily: 'Inter'
//     }
//   };

//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: colors.grey[100],
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography style={{ fontSize, fontWeight: "bold", fontFamily: 'Inter' }}>{title}</Typography>
//       <Link to={to} />
//     </MenuItem>
//   );
// };

// const Sidebar = ({ handleLogout }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [selected, setSelected] = useState("Dashboard");
//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   return (
//     <Box
//       sx={{
//         height: "100vh", // Full height for the sidebar
//         position: "relative", // Set position relative to contain absolute children
//         "& .pro-sidebar-inner": {
//           background: "#ffff !important",
//         },
//         "& .pro-icon-wrapper": {
//           backgroundColor: "transparent !important",
//         },
//         "& .pro-inner-item": {
//           padding: "5px 35px 5px 20px !important",
//         },
//         "& .pro-inner-item:hover": {
//           color: "#868dfb !important",
//         },
//         "& .pro-menu-item.active": {
//           color: "#038C38 !important",
//         },
//       }}
//     >
//       <ProSidebar collapsed={isCollapsed} style={{ fontFamily: 'Inter' }}>
//         <Menu iconShape="square">
//           <MenuItem
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
//             style={{
//               margin: "10px 0 20px 0",
//               color: colors.grey[100],
//             }}
//           >
//             {!isCollapsed && (
//               <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 ml="15px"
//               >
//                 <Typography variant="h3" color={colors.grey[100]}>
//                   <img
//                     src={`${process.env.PUBLIC_URL}/assets/images/GT_BlackLogo.svg`}
//                     alt="Electric Scooter"
//                     style={{ borderRadius: '10px', margin: '0px', padding: '0px' }}
//                   />
//                 </Typography>
//               </Box>
//             )}
//           </MenuItem>

//           <Box paddingLeft={isCollapsed ? undefined : "10%"} sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
//             <Item
//               title="Dashboard"
//               to="/"
//               icon={<HomeOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//               fontSize="20px"
//             />
//             <Item
//               title="Live Location"
//               to="/livelocation"
//               icon={<PeopleOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//               fontSize="20px"
//             />
//             <Item
//               title="Fleet Highlight"
//               to="/fleethighlight"
//               icon={<img
//                 src={`${process.env.PUBLIC_URL}/assets/images/Vectors.svg`}
//                 alt="Leaf"
//                 style={{ borderRadius: '10px', padding: '5px' }}
//               />}
//               selected={selected}
//               setSelected={setSelected}
//               fontSize="18px"
//             />
//             <Item
//               title="EV Analytics"
//               to="/evanalytics"
//               icon={<img
//                 src={`${process.env.PUBLIC_URL}/assets/images/ChartPieSlice.svg`}
//                 alt="Leaf"
//                 style={{ borderRadius: '10px', padding: '5px' }}
//               />}
//               selected={selected}
//               setSelected={setSelected}
//               fontSize="18px"
//             />
//             <Item
//               title="Trips"
//               to="/trips"
//               icon={<img
//                 src={`${process.env.PUBLIC_URL}/assets/images/Path.svg`}
//                 alt="Leaf"
//                 style={{ borderRadius: '10px', padding: '5px' }}
//               />}
//               selected={selected}
//               setSelected={setSelected}
//               fontSize="18px"
//             />
//             {/* <Item
//               title="Device Management"
//               to="/devicemanagement"
//               icon={<img
//                 src={`${process.env.PUBLIC_URL}/assets/images/Sliders.svg`}
//                 alt="Leaf"
//                 style={{ borderRadius: '10px', padding: '5px' }}
//               />}
//               selected={selected}
//               setSelected={setSelected}
//               fontSize="18px"
//             /> */}
//             <Item
//               title="Remote Lock"
//               to="/remotelock"
//               icon={<img
//                 src={`${process.env.PUBLIC_URL}/assets/images/HandWithdraw.svg`}
//                 alt="Leaf"
//                 style={{ borderRadius: '10px', padding: '5px' }}
//               />}
//               selected={selected}
//               setSelected={setSelected}
//               fontSize="18px"
//             />
//             <Item
//               title={<span style={{fontSize:'16px'}}>Battery Charging<br />& Discharging</span>}
//               to="/battery"
//               icon={<img
//                 src={`${process.env.PUBLIC_URL}/assets/images/BatteryChargingVertical.svg`}
//                 alt="Leaf"
//                 style={{ borderRadius: '10px', padding: '5px' }}
//               />}
//               selected={selected}
//               setSelected={setSelected}
//               fontSize="18px"
//             />
//           </Box>

//           {/* Logout and Setting sections at the bottom */}
//           <Box
//             sx={{
//               position: "absolute",
//               bottom: 0,
//               width: "100%",
//               paddingLeft: isCollapsed ? undefined : "10%",
//               display: "flex",
//               flexDirection: "column",
//               gap: "10px",
//               pb: "10px",
//               fontFamily: "Inter" // Optional padding at the bottom
//             }}
//           >
//             <MenuItem
//               onClick={handleLogout} // Use the handleLogout function
//               icon={<ExitToAppIcon />}
//               style={{
//                 color: colors.grey[100],
//                 fontFamily: "Inter"
//               }}
//             >
//               <Typography style={{ fontSize: "20px", fontWeight: "bold", fontFamily: "Inter" }}>
//                 Logout
//               </Typography>
//             </MenuItem>
//             <Item
//               title="Profile"
//               to="/profile"
//               icon={<img
//                 src={`${process.env.PUBLIC_URL}/assets/images/UserCircleDashed.svg`}
//                 alt="Leaf"
//                 style={{ borderRadius: '10px', padding: '5px' }}
//               />}
//               selected={selected}
//               setSelected={setSelected}
//               fontSize="18px"
//             />
//           </Box>
//         </Menu>
//       </ProSidebar>
//     </Box>
//   );
// };

// export default Sidebar;


import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Settings from "@mui/icons-material/Settings";

// Item component with icon color change on selection
const Item = ({ title, to, icon, selected, setSelected, fontSize }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Determine icon color based on selection
  const iconColor = selected === title ? "#038C38" : colors.grey[100]; // Adjust colors as needed

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: selected === title ? "#038C38" : colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={React.cloneElement(icon, { style: { color: iconColor } })} // Clone icon with new color
    >
      <Typography style={{ fontSize, fontWeight: "bold", fontFamily: 'Inter' }}>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({ handleLogout }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <Box
      sx={{
        height: "100vh", // Full height for the sidebar
        position: "relative", // Set position relative to contain absolute children
        "& .pro-sidebar-inner": {
          background: "#ffff !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#038C38 !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} style={{ fontFamily: 'Inter' }}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                <Typography variant="h3" color={colors.grey[100]}>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/GT_BlackLogo.svg`}
                    alt="Electric Scooter"
                    style={{ borderRadius: '10px', margin: '0px', padding: '0px' }}
                  />
                </Typography>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"} sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              fontSize="20px"
            />
            <Item
              title="Live Location"
              to="/livelocation"
              icon={<img
                src={`${process.env.PUBLIC_URL}/assets/images/MapPinArea.svg`}
                alt="Leaf"
                style={{ borderRadius: '10px', padding: '5px' }}
              />}
              selected={selected}
              setSelected={setSelected}
              fontSize="20px"
            />
            <Item
              title="Fleet Highlight"
              to="/fleethighlight"
              icon={<img
                src={`${process.env.PUBLIC_URL}/assets/images/MopedFront (1).svg`}
                alt="Leaf"
                style={{ borderRadius: '10px', padding: '5px' }}
              />}
              selected={selected}
              setSelected={setSelected}
              fontSize="18px"
            />
            <Item
              title="EV Analytics"
              to="/evanalytics"
              icon={<img
                src={`${process.env.PUBLIC_URL}/assets/images/ChartPieSlice.svg`}
                alt="Leaf"
                style={{ borderRadius: '10px', padding: '5px' }}
              />}
              selected={selected}
              setSelected={setSelected}
              fontSize="18px"
            />
            <Item
              title="Trips"
              to="/trips"
              icon={<img
                src={`${process.env.PUBLIC_URL}/assets/images/Path.svg`}
                alt="Leaf"
                style={{ borderRadius: '10px', padding: '5px' }}
              />}
              selected={selected}
              setSelected={setSelected}
              fontSize="18px"
            />
            <Item
              title="Remote Lock"
              to="/remotelock"
              icon={<img
                src={`${process.env.PUBLIC_URL}/assets/images/HandWithdraw.svg`}
                alt="Leaf"
                style={{ borderRadius: '10px', padding: '5px' }}
              />}
              selected={selected}
              setSelected={setSelected}
              fontSize="18px"
            />
            <Item
              title={<span style={{ fontSize: '16px' }}>Battery Charging<br />& Discharging</span>}
              to="/battery"
              icon={<img
                src={`${process.env.PUBLIC_URL}/assets/images/BatteryChargingVertical.svg`}
                alt="Leaf"
                style={{ borderRadius: '10px', padding: '5px' }}
              />}
              selected={selected}
              setSelected={setSelected}
              fontSize="18px"
            />
          </Box>

          {/* Logout and Setting sections at the bottom */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              paddingLeft: isCollapsed ? undefined : "10%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              pb: "10px",
              fontFamily: "Inter"
            }}
          >
            <MenuItem
              onClick={handleLogout} // Use the handleLogout function
              icon={<ExitToAppIcon />}
              style={{
                color: colors.grey[100],
                fontFamily: "Inter"
              }}
            >
              <Typography style={{ fontSize: "20px", fontWeight: "bold", fontFamily: "Inter" }}>
                Logout
              </Typography>
            </MenuItem>
            <Item
              title="Profile"
              to="/profile"
              icon={<img
                src={`${process.env.PUBLIC_URL}/assets/images/UserCircleDashed.svg`}
                alt="Leaf"
                style={{ borderRadius: '10px', padding: '5px' }}
              />}
              selected={selected}
              setSelected={setSelected}
              fontSize="18px"
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
