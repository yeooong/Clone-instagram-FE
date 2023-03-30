import React, { useRef } from 'react';
import { SModalBackground } from 'src/styles/Modal.styled';
import CreatePostModal from './CreatePostModal';
import DetailPostModal from './DetailPostModal';
import UpdatePostModal from './UpdatePostModal';

function Modal({ onCloseHandler, type, post }) {
  const modalTypeActions = {
    create: <CreatePostModal onCloseHandler={onCloseHandler} />,
    update: <UpdatePostModal onCloseHandler={onCloseHandler} post={post}/>,
    detail: <DetailPostModal onCloseHandler={onCloseHandler} post={post}/>,
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
