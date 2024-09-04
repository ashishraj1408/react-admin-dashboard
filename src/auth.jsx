export const isAuthenticated = () => {
    // Logic to check if the user is authenticated, e.g., checking a token
    return !!localStorage.getItem("authToken");
  };
  
  export const login = (token) => {
    // Logic to log in the user
    localStorage.setItem("authToken", token);
  };
  
  export const logout = () => {
    // Logic to log out the user
    localStorage.removeItem("authToken");
  };
  