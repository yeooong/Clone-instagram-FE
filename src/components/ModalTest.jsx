import React, { useState } from 'react';
import Modal from './Modal';
import ModalPortal from './ModalPortal';

function ModalTest() {
  const [isExistModal, setIsExistModal] = useState(false);
  const modalHandler = () => {
    setIsExistModal(!isExistModal);
  };

  return (
    <article>
      <h1>모달을 테스트하는 공간입니다.</h1>
      <p>모달을 활성화하려면 아래 버튼을 눌러주세요</p>
      <button onClick={modalHandler}>모달 활성화</button>
      <ModalPortal>
        {isExistModal && <Modal onCloseHandler={modalHandler} />}
      </ModalPortal>
    </article>
  );
}

export default ModalTest;
