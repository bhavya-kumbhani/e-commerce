 
  export const logout = () => {
    localStorage.removeItem("authUser");
    sessionStorage.removeItem("persist:root");
  };
  