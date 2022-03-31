import React, { useEffect } from 'react';
import './AlertMessage.scss';
import { useAlert } from '../../context';

export const AlertMessage = () => {
  const { alertMessage, setAlertMessage } = useAlert();

  useEffect(() => {
    const timeoutId = setTimeout(() => setAlertMessage(''), 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  });
  return (
    <>
      {alertMessage ? (
        <div className="app-alert">
          <div
            className="alert alert--success  p-sm-all rounded-sm"
            role="alert"
          >
            <p className="text-sm">{alertMessage}</p>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
