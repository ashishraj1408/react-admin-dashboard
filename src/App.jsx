import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Sidebar from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Login from './scenes/login/Login';
import { fetchDashboardKPIs } from './api';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      const getData = async () => {
        try {
          const result = await fetchDashboardKPIs();
          console.log('API Response:', result); // For debugging
          setData(result);
        } catch (error) {
          console.error('Error fetching dashboard data:', error);
        }
      };

      getData();
    }
  }, [isAuthenticated]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isAuthenticated && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            {isAuthenticated && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route
                path="/"
                element={
                  isAuthenticated ? (
                    <Dashboard data={data} />
                  ) : (
                    <Login setIsAuthenticated={setIsAuthenticated} />
                  )
                }
              />
              <Route
                path="/dashboard"
                element={
                  isAuthenticated ? (
                    <Dashboard data={data} />
                  ) : (
                    <Login setIsAuthenticated={setIsAuthenticated} />
                  )
                }
              />
              <Route
                path="/team"
                element={
                  isAuthenticated ? (
                    <Team />
                  ) : (
                    <Login setIsAuthenticated={setIsAuthenticated} />
                  )
                }
              />
              <Route
                path="/contacts"
                element={
                  isAuthenticated ? (
                    <Contacts />
                  ) : (
                    <Login setIsAuthenticated={setIsAuthenticated} />
                  )
                }
              />
              <Route
                path="/invoices"
                element={
                  isAuthenticated ? (
                    <Invoices />
                  ) : (
                    <Login setIsAuthenticated={setIsAuthenticated} />
                  )
                }
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
