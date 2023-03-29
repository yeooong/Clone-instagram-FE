import React, { useState } from 'react';
import { SPostModal, SPostModalForm } from 'src/styles/PostModal.styled';
import ModalHeader from 'src/molecules/ModalHeader';
import ModalTitle from 'src/atomics/ModalTitle';
import DoneButtonInUpdate from 'src/atomics/DoneButtonInUpdate';
import TextBackButton from 'src/atomics/TextBackButton';
import postApi from 'src/api/postHandlingApi';

function UpdatePostModal({ onCloseHandler, image }) {
  const [post, setPost] = useState({
    content: '',
  });

  const onChangeFileHandler = e => {
    // set file
    setPost({ ...post, img: e.target.files[0] });
  };

  const onSubmitPostHandler = async () => {
    const response = await postApi.post('/posts', post);
    console.log(response);
    onCloseHandler();
  };

  return (
    <SPostModal>
      <ModalHeader>
        <TextBackButton onCloseHandler={onCloseHandler}>취소</TextBackButton>
        <ModalTitle>정보 수정</ModalTitle>
        <DoneButtonInUpdate
          onCloseHandler={onCloseHandler}
          post={post}
        >
          완료
        </DoneButtonInUpdate>
      </ModalHeader>
      <SPostModalForm>
        <div>
          <img
            src={image}
            alt="업로드이미지"
          />
        </div>
        <div>
          <div>
            <img
              src=""
              alt="유저 프로필 사진"
            />
            <span>유저 닉네임</span>
          </div>
          <label htmlFor=""></label>
          <input
            type="text"
            placeholder="문구 입력"
          />
          <button>감정 선택</button>
        </div>
      </SPostModalForm>
    </SPostModal>
  );
}

export default UpdatePostModal;
