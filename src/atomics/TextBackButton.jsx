import React from 'react';

function TextBackButton({ children, onCloseHandler }) {
  return <button onClick={onCloseHandler}>{children}</button>;
}

export default TextBackButton;
