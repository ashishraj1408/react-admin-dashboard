import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check credentials
    if (email === "user@greentiger.in" && password === "password123") {
      setIsAuthenticated(true); // Set user as authenticated
      navigate("/dashboard"); // Navigate to dashboard after login
    } else {
      alert("Invalid credentials");
    }
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
          src={`${process.env.PUBLIC_URL}/image.png`}
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
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
            }}
          />
        </div>
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
            Password
          </label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
            }}
          />
        </div>
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            border: "none",
            backgroundColor: "#fafafa",
            borderRadius: "5px",
            color: "#000",
            fontSize: "14px",
            cursor: "pointer",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ setIsAuthenticated }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Implement your login logic here
//     if (username && password) {
//       localStorage.setItem('authToken', 'example-token'); // Set authentication token
//       setIsAuthenticated(true);
//       navigate('/');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
