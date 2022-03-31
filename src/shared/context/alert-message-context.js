import React, { createContext, useContext, useState } from 'react';

export const AlertMessageContext = createContext('');

const AlertMessageProvider = ({ children }) => {
  const [alertMessage, setAlertMessage] = useState('');
  return (
    <AlertMessageContext.Provider value={{ alertMessage, setAlertMessage }}>
      {children}
    </AlertMessageContext.Provider>
  );
};

const useAlert = () => useContext(AlertMessageContext);
export { AlertMessageProvider, useAlert };
