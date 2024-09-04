// src/api/dashboardAPI.js

import axios from 'axios';

export const fetchDashboardKPIs = async () => {
  try {
    const payload = {
      cumulative: 1,
      clientId: 31,
      type: "LOGIN"
    };

    const response = await axios.post('/api/your-endpoint', payload); // Using POST and including the payload
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch dashboard KPIs');
  }
};
