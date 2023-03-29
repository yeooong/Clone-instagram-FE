import React from 'react';
import api from 'src/api/postHandlingApi';

function DoneButtonInUpdate({ onCloseHandler, children }) {
  const sendRequest = async body => {
    const response = await api.post('/', body);
    return response;
  };
  return <button onClick={onCloseHandler}>{children}</button>;
}

export default DoneButtonInUpdate;
