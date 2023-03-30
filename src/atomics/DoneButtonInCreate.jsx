import React from 'react';
import api from 'src/api/postHandlingApi';

function DoneButtonInCreate({ onCloseHandler, children }) {
  const sendRequest = async requestBody => {
    const response = await api.post('/', requestBody);
    return response;
  };
  return <button onClick={onCloseHandler}>{children}</button>;
}

export default DoneButtonInCreate;
