  export const setSession = (sessionObj, rememberMe) => {
    if (sessionObj.userInfo && sessionObj.access_token) {
      localStorage.setItem("authUser", JSON.stringify(sessionObj));
    }
  };
  
  export const getSession = () => {
    return JSON.parse(localStorage.getItem("authUser"));
  };
 
  
  export const logout = () => {
    localStorage.removeItem("authUser");
    sessionStorage.removeItem("persist:root");
  };
  