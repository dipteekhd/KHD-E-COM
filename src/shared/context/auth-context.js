import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { authReducer } from '../reducer';
import { authState } from './auth-state';
import { INITIALIZE_AUTH } from '../actions/types';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authState);

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    const userData = localStorage.getItem('userData');

    dispatch({
      type: INITIALIZE_AUTH,
      payload:
        userToken && userData
          ? { userToken, userData, isUserLoggedIn: true }
          : authState,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
