import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../../shared/context';
export const RequiresAuth = ({ children }) => {
  const { state: authState } = useAuth();
  const location = useLocation();

  return authState.isUserLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
