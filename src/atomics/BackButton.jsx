import React from 'react';
import arrow from 'src/assets/arrow.png';

function BackButton({ onCloseHandler }) {
  return (
    <button onClick={onCloseHandler}>
      <img
        src={arrow}
        alt="이전으로"
      />
    </button>
  );
}

export default BackButton;
