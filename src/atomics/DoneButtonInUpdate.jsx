import React from 'react';
import api from 'src/api/postHandlingApi';
import { SPostModalDoneButton } from 'src/styles/PostModal.styled';

function DoneButtonInUpdate({ onCloseHandler, children }) {
  const sendRequest = async body => {
    const response = await api.post('/', body);
    return response;
  };

  return (
    <SPostModalDoneButton onClick={onCloseHandler}>
      {children}
    </SPostModalDoneButton>
  );
}

export default DoneButtonInUpdate;
