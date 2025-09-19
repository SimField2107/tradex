import React, { createContext, useState, useEffect } from 'react';

// Define the shape of the context data
interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

// Create the context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state to false on the server
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Use useEffect to check localStorage only after the component mounts in the browser
  useEffect(() => {
    const storedStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(storedStatus);
  }, []);

  // Function to simulate a login
  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  // Function to simulate a logout
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const value = {
    isLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
