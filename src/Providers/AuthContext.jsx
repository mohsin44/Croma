import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedin, setIsLoggedin] = useState(false);

  const login = (name, token) => {
    setUsername(name)
    setToken(token)
    setIsLoggedin(true);
  };
  const logout = () => {
    setUsername(null)
    setToken(null)
    setIsLoggedin(false);
  };
  return(
    <AuthContext.Provider value={{username,token,isLoggedin,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
};

export const useAuth=()=>{
    const context=useContext(AuthContext)
    if (!context){
        throw new Error('useAuth must be used inside AuthProvider')
    }
    return context
}