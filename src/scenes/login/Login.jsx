import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/image.png";  // Import the image here

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Hardcoded token for testing
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFRva2VuIjoiN2E5YjBlN2ZiMWY0M2MxMDhiZDMxMzI5ZjMwYzljN2JmZmUwZmZiMTMwNDkxNTgyNjRkYzlkMTdjZGIwMTRlYSIsImNsaWVudElkIjozMSwiaWF0IjoxNzI2MjkyNTE2LCJleHAiOjE3MjY4OTczMTZ9.BtuAdaVTt_zFcU6HU9GV_-B9dlddOkhO3RH3DphYou37rokGCuELgfqTTHLKPBGMFk3x88j0gWlDszv3PDJaywy9Ix-ywAihkt-rRUCL4I9TCtuM3B8oGHa7MZrtWAX07QXzsfGtZZbI9xR81-2auuos9krPUTsOhQbMGDGHcmX5vkn4iVmuUT0RBNZSN7eZLWQCa7lbTEPs1fY37kiDtnFLurOhc9cV89HZyQW8BbN7nUTOWzncM17MdEPCFnq7K7CNRQ4Xk7-cEcM_cAyLzYvGx9suHHIvYfF3oGf5VnHY6jCOBH9qXJ8bV65ieBFe6JdbkZ8F71LQ2PVKn1g_cw';
  
    const clientId = 31;  // Example clientId from the token data
    const clientName = "Let's DRIEV";  // Set a clientName if needed
  
    // These additional parameters are now stored
    const cumulative = 1; // Data for all devices of the customer
    const history = true;
    const historyRange = "7d"; // History for 7 days
  
    // Store necessary data in localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('clientId', clientId);
    localStorage.setItem('clientName', clientName);
    localStorage.setItem('cumulative', cumulative);
    localStorage.setItem('history', history);
    localStorage.setItem('historyRange', historyRange);
  
    // Set authenticated state and navigate to the dashboard
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          backgroundColor: "#fafafa",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          width: "400px",
        }}
      >
        <img
          src={logo}  // Use the imported image here
          alt="Green Tiger Logo"
          style={{ width: "150px", marginBottom: "20px" }}
        />
        <h1
          style={{
            margin: 0,
            fontFamily: "Arial, sans-serif",
            fontSize: "24px",
            color: "#000",
            letterSpacing: "2px",
          }}
        >
          GREEN TIGER
        </h1>
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontSize: "12px",
              color: "purple",
              textAlign: "left",
              marginBottom: "5px",
            }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="user@greentiger.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
          />
          <label
            style={{
              display: "block",
              fontSize: "12px",
              color: "purple",
              textAlign: "left",
              marginBottom: "5px",
            }}
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
          />
          <button
            onClick={handleLogin}
            style={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../../assets/images/image.png";  // Import the image here

// function Login({ setIsAuthenticated }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Hardcoded token for testing
//     const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFRva2VuIjoiN2E5YjBlN2ZiMWY0M2MxMDhiZDMxMzI5ZjMwYzljN2JmZmUwZmZiMTMwNDkxNTgyNjRkYzlkMTdjZGIwMTRlYSIsImNsaWVudElkIjozMSwiaWF0IjoxNzI2MjkwNTY4LCJleHAiOjE3MjY4OTUzNjh9.ssgZrJaz6uGViU2eOaHM70LIy83lQGwrZk2TjeF_nfFbjPAoOPYjCxurHxYBf-ZARv0yyPy9YaO-7NwSWQPyni7qE9uPikcNEEm4oA4YuNmklMwcgAmPWGivqjkCwf9oQwZjMRvn5t56nXr6k93Gq_3JSQFWaX1cgIRAgdeyltR4CLEuyREk95kIJRfI8j9t_ASwYZ_tCm697pp4-dacP1a97h57EzlKmm3PqN9SpXZ47zT3WkzEDLGU1uuMLM_FeHZR4Fwxc_XGrm28IrT6ut3sYOCLeazcHnGweqcizVy_hg516V7r_jCDvQzwqmwr7ZrcdGyto1XZw-SS9AmhCw';
  
//     const clientId = 31;  // Example clientId from the token data
//     const clientName = "Let's DRIEV";  // Set a clientName if need
  
//     // Directly store the token and clientId in localStorage
//     localStorage.setItem('token', token);
//     localStorage.setItem('clientId', clientId);
//     localStorage.setItem('clientName', clientName);
  
//     // Set authenticated state and navigate to the dashboard
//     setIsAuthenticated(true);
//     navigate("/dashboard");
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         backgroundColor: "#f5f5f5",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "#fafafa",
//           padding: "40px",
//           borderRadius: "10px",
//           boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//           textAlign: "center",
//           width: "400px",
//         }}
//       >
//         <img
//           src={logo}  // Use the imported image here
//           alt="Green Tiger Logo"
//           style={{ width: "150px", marginBottom: "20px" }}
//         />
//         <h1
//           style={{
//             margin: 0,
//             fontFamily: "Arial, sans-serif",
//             fontSize: "24px",
//             color: "#000",
//             letterSpacing: "2px",
//           }}
//         >
//           GREEN TIGER
//         </h1>
//         <div style={{ marginBottom: "20px" }}>
//           <label
//             style={{
//               display: "block",
//               fontSize: "12px",
//               color: "purple",
//               textAlign: "left",
//               marginBottom: "5px",
//             }}
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             placeholder="user@greentiger.in"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{
//               width: "100%",
//               padding: "10px",
//               border: "1px solid #ddd",
//               borderRadius: "5px",
//               marginBottom: "20px",
//             }}
//           />
//           <label
//             style={{
//               display: "block",
//               fontSize: "12px",
//               color: "purple",
//               textAlign: "left",
//               marginBottom: "5px",
//             }}
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{
//               width: "100%",
//               padding: "10px",
//               border: "1px solid #ddd",
//               borderRadius: "5px",
//               marginBottom: "20px",
//             }}
//           />
//           <button
//             onClick={handleLogin}
//             style={{
//               backgroundColor: "#4CAF50",
//               color: "#fff",
//               padding: "10px 20px",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Login
//           </button>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


// // const handleLogin = () => {
// //   // Hardcoded token for testing
// //   const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFRva2VuIjoiN2E5YjBlN2ZiMWY0M2MxMDhiZDMxMzI5ZjMwYzljN2JmZmUwZmZiMTMwNDkxNTgyNjRkYzlkMTdjZGIwMTRlYSIsImNsaWVudElkIjozMSwiaWF0IjoxNzI2Mjg4NzI3LCJleHAiOjE3MjY4OTM1Mjd9.vNZO-mb4wegt_9jm0JaLv72Awp-eI2CCCbU0sl-SOIm-H_DnGtX9VlrLY8TeV-acKAx6NoAOx_pcfy1rg4ccu_ecYYue45qDJq5gWpxD4nTxra3iWn8QcqRaAC49w7dzQOP9wjKU5kcDStsr0JZ1GOYSuBXxfl_W2spMT6LIQdRSUF1LynepshpGztmb_yi66-M_V9HCK-IeY23_WV6NWEYC0thIlRJQ7epxtH8JCErOUfe2gyHBPgVFMIl2ZEYEta0VrzIFdGQQf-yc8ehmKkTYmxwZnvmqta5dd89aBpA5XmJL1Hf5FchtikbkuFWwPKRy3dkH2Ejzg6d09nE6ugu';

// //   const clientId = 31;  // Example clientId from the token data
// //   const clientName = 'Green Tiger';  // Set a clientName if needed

// //   // Directly store the token and clientId in localStorage
// //   localStorage.setItem('token', token);
// //   localStorage.setItem('clientId', clientId);
// //   localStorage.setItem('clientName', clientName);

// //   // Set authenticated state and navigate to the dashboard
// //   setIsAuthenticated(true);
// //   navigate("/dashboard");
// // };
