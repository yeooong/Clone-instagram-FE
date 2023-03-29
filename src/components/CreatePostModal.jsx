import React, { useState } from 'react';
import BackButton from 'src/atomics/BackButton';
import { SPostModal, SPostModalForm } from 'src/styles/PostModal.styled';
import ModalHeader from 'src/molecules/ModalHeader';
import ModalTitle from 'src/atomics/ModalTitle';
import DoneButtonInUpdate from 'src/atomics/DoneButtonInUpdate';
import postApi from 'src/api/postHandlingApi';

// 새 게시물 만들기, 공유하기, 이전으로 << 얘네 통일하거나 받아오면 재사용 가능
// 글자수 세는 방법 추가해야함
function CreatePostModal({ onCloseHandler }) {
  const [post, setPost] = useState({
    img: '',
    content: '',
  });

  const [preview, setPreview] = useState('');

  const onChangeFileHandler = e => {
    // set file
    setPost({ ...post, img: e.target.files[0] });

    // set preview file
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => setPreview(reader.result);
  };

  const onSubmitPostHandler = async () => {
    const response = await postApi.post('/posts', post);
    console.log(response);
    onCloseHandler();
  };

  return (
    <SPostModal>
      <ModalHeader>
        <BackButton onCloseHandler={onCloseHandler} />
        <ModalTitle>새 게시물 만들기</ModalTitle>
        <DoneButtonInUpdate onCloseHandler={onSubmitPostHandler}>
          공유하기
        </DoneButtonInUpdate>
      </ModalHeader>
      <SPostModalForm>
        <div>
          <div>
            <label htmlFor="">파일 업로드해!</label>
            <input
              type="file"
              accept="image/*"
              onChange={onChangeFileHandler}
            />
          </div>
          <img
            src={preview ? preview : 'default image'}
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
            value={post.content}
            onChange={e => setPost({ ...post, content: e.target.value })}
          />
        </div>
      </SPostModalForm>
    </SPostModal>
  );
}

export default CreatePostModal;
