import axios from 'axios';

// Define the API endpoint and token
const API_URL = 'https://staging.api.greentiger.in/api/v1/auth';
const TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFRva2VuIjoiN2E5YjBlN2ZiMWY0M2MxMDhiZDMxMzI5ZjMwYzljN2JmZmUwZmZiMTMwNDkxNTgyNjRkYzlkMTdjZGIwMTRlYSIsImNsaWVudElkIjozMSwiaWF0IjoxNzI2MjkzNzM0LCJleHAiOjE3MjY4OTg1MzR9.dXFUZ8LAJEaBAkn5VztUL3zrPaSkUpeVnQ4zfskxxGOMqytoOcH8pKgygqWXA7AESUwTAz24lwQox9dU6e2RQ2soWfXVLRPOJEPYCGE0Uvo-AQ6E1b9HC07301prnGMdy-3RS-Sz5bOeKm7Yf40VxS3BLrzAK2kKyk26Ku2BI-FG8X9OyAfH5pCTB7MMv-H0m-QHtfXJiNnIZAPgMr1UYlieK2MCHsk_jC7xbhgTBdYiiYHaAIoz-UmsciAgm9Ri1Ot7jasWIkTKZyw6kjCqPW__H7GNjdBcF5cqmamjah5xkTsCcYdPaarMBIMJx-obLaRkfLUAATzYBO-nmq8B5w';

export const fetchDashboardKPIs = async () => {
  try {
    const response = await axios.post(
      API_URL,
      {
        cumulative: 1,
        clientId: 31,
        type: 'LOGIN',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};



// import axios from 'axios';

// // Define the API endpoint
// const API_URL = 'https://prod.api.greentiger.in/api/v1/dashboard_kpis';

// export const fetchDashboardKPIs = async (clientId, token) => {
//   try {
//     const response = await axios.post(
//       API_URL,
//       {
//         cumulative: 1,
//         clientId: clientId, // Use the dynamic clientId
//         type: 'LOGIN',
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`, // Use the dynamic token
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };


// src/apiService.js

// import axios from 'axios';

// const API_URL = 'https://prod.api.greentiger.in/api/v1/dashboard_kpis';

// export const fetchDashboardKPIs = async (clientId, token) => {
//   try {
//     console.log("Sending request with token:", token);
//     const response = await axios.post(
//       API_URL,
//       {
//         cumulative: 1,
//         clientId: clientId,
//         type: 'LOGIN',
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error.response?.data || error.message);
//     throw error;
//   }
// };
