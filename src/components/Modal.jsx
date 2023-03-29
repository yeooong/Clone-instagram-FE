import React, { useRef } from 'react';
import { SModalBackground } from 'src/styles/Modal.styled';
import CreatePostModal from './CreatePostModal';
import DetailPostModal from './DetailPostModal';
import UpdatePostModal from './UpdatePostModal';

function Modal({ onCloseHandler, type }) {
  const modalTypeActions = {
    create: <CreatePostModal onCloseHandler={onCloseHandler} />,
    update: <UpdatePostModal onCloseHandler={onCloseHandler} />,
    detail: <DetailPostModal onCloseHandler={onCloseHandler} />,
  };

  const background = useRef();

  return (
    <SModalBackground
      ref={background}
      onClick={e => {
        if (e.target === background.current) onCloseHandler();
      }}
    >
      {modalTypeActions[type]}
    </SModalBackground>
  );
}

export default Modal;
