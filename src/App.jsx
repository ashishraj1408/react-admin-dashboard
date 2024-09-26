// import React, { useState, useEffect } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import { CssBaseline, ThemeProvider } from '@mui/material';
// import { ColorModeContext, useMode } from './theme';
// import Sidebar from './scenes/sidebar/Sidebar';
// import Dashboard from './scenes/dashboard';
// import Team from './scenes/livelocation';
// import Trips from './scenes/trips/Trips';
// import Fleethighlight from './scenes/fleethighlight/Fleethighlight';
// import DeviceManagement from './scenes/devicemanagement/DeviceManagement';
// import Login from './scenes/login/Login';
// import { fetchDashboardKPIs } from './api';
// import EvAnalytics from './scenes/evanalytics/Evanalytics';
// import RemoteLock from './scenes/remotelock/RemoteLock';
// import Battery from './scenes/battery/Battery';
// // import App from 'first'
// function App() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     () => JSON.parse(localStorage.getItem('isAuthenticated')) || false
//   );
//   const [data, setData] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated) {
//       const getData = async () => {
//         try {
//           const result = await fetchDashboardKPIs();
//           console.log('API Response:', result);
//           setData(result);
//         } catch (error) {
//           console.error('Error fetching dashboard data:', error);
//         }
//       };

//       getData();
//     }
//   }, [isAuthenticated]);

//   const handleLogout = () => {
//     localStorage.removeItem('isAuthenticated'); // Remove the authentication token or flag
//     setIsAuthenticated(false);
//     navigate('/login');
//   };

//   const handleLogin = () => {
//     localStorage.setItem('isAuthenticated', JSON.stringify(true)); // Set the authentication flag
//     setIsAuthenticated(true);
//   };

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="app">
//           {isAuthenticated && (
//             <div className="sidebar">
//               <Sidebar isSidebar={isSidebar} handleLogout={handleLogout} />
//             </div>
//           )}
//             <div className="content" style={{}}>
//               <main style={{width:'100%'}}>
//               {/* {isAuthenticated && <Topbar setIsSidebar={setIsSidebar} />} */}
//               <Routes>
//                 <Route
//                   path="/"
//                   element={
//                     isAuthenticated ? (
//                       <Dashboard data={data} />
//                     ) : (
//                       <Login setIsAuthenticated={handleLogin} />
//                     )
//                   }
//                 />
//                 <Route
//                   path="/login"
//                   element={<Login setIsAuthenticated={handleLogin} />}
//                 />
//                 <Route
//                   path="/dashboard"
//                   element={
//                     isAuthenticated ? (
//                       <Dashboard data={data} />
//                     ) : (
//                       <Login setIsAuthenticated={handleLogin} />
//                     )
//                   }
//                 />
//                 <Route
//                   path="/livelocation"
//                   element={
//                     isAuthenticated ? (
//                       <Team />
//                     ) : (
//                       <Login setIsAuthenticated={handleLogin} />
//                     )
//                   }
//                 />
//                 <Route
//                   path="/fleethighlight"
//                   element={
//                     isAuthenticated ? (
//                       <Fleethighlight />
//                     ) : (
//                       <Login setIsAuthenticated={handleLogin} />
//                     )
//                   }
//                 />
//                 <Route
//                   path="/evanalytics"
//                   element={
//                     isAuthenticated ? (
//                       <EvAnalytics />
//                     ) : (
//                       <Login setIsAuthenticated={handleLogin} />
//                     )
//                   }
//                 />
//                 <Route
//                   path="/trips"
//                   element={
//                     isAuthenticated ? (
//                       <Trips />
//                     ) : (
//                       <Login setIsAuthenticated={handleLogin} />
//                     )
//                   }
//                 />
//                 <Route
//                   path="/devicemanagement"
//                   element={
//                     isAuthenticated ? (
//                       <DeviceManagement />
//                     ) : (
//                       <Login setIsAuthenticated={handleLogin} />
//                     )
//                   }
//                 />
//                 <Route
//                   path="/remotelock"
//                   element={
//                     isAuthenticated ? (
//                       <RemoteLock />
//                     ) : (
//                       <Login setIsAuthenticated={handleLogin} />
//                     )
//                   }
//                 />
//                 <Route
//                   path="/battery"
//                   element={
//                     isAuthenticated ? (
//                       <Battery />
//                     ) : (
//                       <Login setIsAuthenticated={handleLogin} />
//                     )
//                   }
//                 />
//               </Routes>
//               </main>
//             </div>
          
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Sidebar from './scenes/sidebar/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/livelocation';
import Trips from './scenes/trips/Trips';
import Fleethighlight from './scenes/fleethighlight/Fleethighlight';
import DeviceManagement from './scenes/devicemanagement/DeviceManagement';
import Login from './scenes/login/Login';
import { fetchDashboardKPIs } from './api';
import EvAnalytics from './scenes/evanalytics/Evanalytics';
import RemoteLock from './scenes/remotelock/RemoteLock';
import Battery from './scenes/battery/Battery';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('isAuthenticated')) || false
  );
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      const getData = async () => {
        try {
          const result = await fetchDashboardKPIs();
          console.log('API Response:', result);
          setData(result);
        } catch (error) {
          console.error('Error fetching dashboard data:', error);
        }
      };

      getData();
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/login');
  };

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
    setIsAuthenticated(true);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isAuthenticated && (
            <div className="sidebar">
              <Sidebar isSidebar={isSidebar} handleLogout={handleLogout} />
            </div>
          )}
          <div
            className="content"
            style={{
              marginLeft: isAuthenticated ? '270px' : '0px', // Adjust margin-left based on authentication state
              width: '100%',
            }}
          >
            <main style={{ width: '100%' }}>
              <Routes>
                <Route
                  path="/"
                  element={
                    isAuthenticated ? (
                      <Dashboard data={data} />
                    ) : (
                      <Login setIsAuthenticated={handleLogin} />
                    )
                  }
                />
                <Route
                  path="/login"
                  element={<Login setIsAuthenticated={handleLogin} />}
                />
                <Route
                  path="/dashboard"
                  element={
                    isAuthenticated ? (
                      <Dashboard data={data} />
                    ) : (
                      <Login setIsAuthenticated={handleLogin} />
                    )
                  }
                />
                <Route
                  path="/livelocation"
                  element={
                    isAuthenticated ? (
                      <Team />
                    ) : (
                      <Login setIsAuthenticated={handleLogin} />
                    )
                  }
                />
                <Route
                  path="/fleethighlight"
                  element={
                    isAuthenticated ? (
                      <Fleethighlight />
                    ) : (
                      <Login setIsAuthenticated={handleLogin} />
                    )
                  }
                />
                <Route
                  path="/evanalytics"
                  element={
                    isAuthenticated ? (
                      <EvAnalytics />
                    ) : (
                      <Login setIsAuthenticated={handleLogin} />
                    )
                  }
                />
                <Route
                  path="/trips"
                  element={
                    isAuthenticated ? (
                      <Trips />
                    ) : (
                      <Login setIsAuthenticated={handleLogin} />
                    )
                  }
                />
                <Route
                  path="/devicemanagement"
                  element={
                    isAuthenticated ? (
                      <DeviceManagement />
                    ) : (
                      <Login setIsAuthenticated={handleLogin} />
                    )
                  }
                />
                <Route
                  path="/remotelock"
                  element={
                    isAuthenticated ? (
                      <RemoteLock />
                    ) : (
                      <Login setIsAuthenticated={handleLogin} />
                    )
                  }
                />
                <Route
                  path="/battery"
                  element={
                    isAuthenticated ? (
                      <Battery />
                    ) : (
                      <Login setIsAuthenticated={handleLogin} />
                    )
                  }
                />
              </Routes>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;