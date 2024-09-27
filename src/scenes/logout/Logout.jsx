  // import { useEffect } from "react";
  // import { useNavigate } from "react-router-dom";

  // const Logout = ({ setIsAuthenticated }) => {
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     localStorage.removeItem("token");
  //     setIsAuthenticated(false);
  //     navigate("/login");
  //   }, [navigate, setIsAuthenticated]);

  //   return null; // No UI needed, just redirect on logout
  // };

  // export default Logout;
  import React, { useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  
  const Logout = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();
  
    useEffect(() => {
      // Clear token and clientId from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("clientId");
  
      // Update authentication state and redirect to login
      setIsAuthenticated(false);
      navigate("/login");
    }, [navigate, setIsAuthenticated]);
  
    return <div>Logging out...</div>;
  };
  
  export default Logout;
  