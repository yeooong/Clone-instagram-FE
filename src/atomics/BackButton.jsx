import React from 'react';
import arrow from 'src/assets/arrow.png';
import { SPostModalBackIcon } from 'src/styles/PostModal.styled';

function BackButton({ onCloseHandler }) {
  return (
    <button onClick={onCloseHandler}>
      <SPostModalBackIcon
        src={arrow}
        alt="이전으로"
      />
    </button>
  );
}

export default BackButton;
