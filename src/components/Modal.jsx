import React from 'react';
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

  return (
    <SModalBackground onClick={onCloseHandler}>
      {modalTypeActions[type]}
    </SModalBackground>
  );
}

export default Modal;
