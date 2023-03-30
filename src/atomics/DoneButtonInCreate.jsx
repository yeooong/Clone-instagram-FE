import React from 'react';
import api from 'src/api/postHandlingApi';

function DoneButtonInCreate({ onSubmitHandler, children }) {
  return <button onClick={onSubmitHandler}>{children}</button>;
}

export default DoneButtonInCreate;
