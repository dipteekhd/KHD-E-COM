import React, { createContext, useContext } from 'react';
import { useState } from 'react/cjs/react.development';

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
