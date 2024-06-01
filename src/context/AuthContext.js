import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (username, password) => {
    try {
      const response = await axios.post('https://lakestorcapi.com/tlocs/login', { username, password });
      if (response.data.success) {
        setIsAuthenticated(true);
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error(error);
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
