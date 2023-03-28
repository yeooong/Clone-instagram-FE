import React from 'react';
import { SModalBackground, SModalContent } from 'src/styles/Modal.styled';

function Modal({ onCloseHandler }) {
  return (
    <SModalBackground>
      <SModalContent>
        content...
        <button onClick={onCloseHandler}>모달 창 닫기</button>
      </SModalContent>
    </SModalBackground>
  );
}

export default Modal;
