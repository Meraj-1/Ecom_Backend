export const setToken = (token) => {
    localStorage.setItem("token", token);
  };
  
  // Get token from localStorage
  export const getToken = () => {
    return localStorage.getItem("token");
  };
  
  // Remove token (for logout)
  export const removeToken = () => {
    localStorage.removeItem("token");
  };
  