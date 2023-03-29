import React, { useState } from 'react';
import Modal from './Modal';
import ModalPortal from './ModalPortal';

function ModalTest() {
  const [modal, setModal] = useState({
    type: '',
    isExist: false,
  });

  const modalHandler = type => {
    setModal({ type, isExist: !modal.isExist });
  };

  return (
    <article>
      <h1>모달을 테스트하는 공간입니다.</h1>
      <p>모달을 활성화하려면 아래 버튼을 눌러주세요</p>
      <button onClick={() => modalHandler('detail')}>detail 모달 활성</button>
      <button onClick={() => modalHandler('create')}>create 모달 활성</button>
      <button onClick={() => modalHandler('update')}>update 모달 활성</button>
      <ModalPortal>
        {modal.isExist && (
          <Modal
            onCloseHandler={modalHandler}
            type={modal.type}
          />
        )}
      </ModalPortal>
    </article>
  );
}

export default ModalTest;
