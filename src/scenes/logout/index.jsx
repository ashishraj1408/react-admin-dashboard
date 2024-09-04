import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session or authentication data
    localStorage.removeItem("authToken"); // Example for local storage

    // Redirect to login page or home page
    navigate("/login");
  }, [navigate]);

  return null; // This component does not render anything
};

export default Logout;
