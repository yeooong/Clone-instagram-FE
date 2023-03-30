import React, { useState } from 'react';
import {
  SPostModal,
  SPostModalForm,
  SPostModalFormTextarea,
  SPostModalFormWrap,
  SPostModalUpdateImage,
  SPostModalUploadImageWrap,
  SPostModalUserImage,
  SPostModalUserProfileWrap,
} from 'src/styles/PostModal.styled';
import ModalHeader from 'src/molecules/ModalHeader';
import ModalTitle from 'src/atomics/ModalTitle';
import DoneButtonInUpdate from 'src/atomics/DoneButtonInUpdate';
import TextBackButton from 'src/atomics/TextBackButton';
import postApi from 'src/api/postHandlingApi';

import defaultImage from 'src/assets/add-image.png';
import profileImage from 'src/assets/weasel.png';
import jerry from 'src/assets/jerry.gif';
import cheeseDuck from 'src/assets/cheeseduck.png';

function UpdatePostModal({ onCloseHandler, image }) {
  const preview = cheeseDuck;
  const [post, setPost] = useState({
    content: '',
  });

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
        <SPostModalUploadImageWrap>
          <SPostModalUpdateImage
            src={preview ? preview : defaultImage}
            type={preview}
            alt="업로드이미지"
          />
        </SPostModalUploadImageWrap>
        <SPostModalFormWrap>
          <SPostModalUserProfileWrap>
            <SPostModalUserImage
              src={profileImage}
              alt="유저 프로필 사진"
            />
            <div>Jinsik_eum</div>
          </SPostModalUserProfileWrap>
          <SPostModalFormTextarea
            type="text"
            placeholder="문구 입력"
            value={post.content}
            onChange={e => setPost({ ...post, content: e.target.value })}
          />
        </SPostModalFormWrap>
      </SPostModalForm>
    </SPostModal>
  );
}

export default UpdatePostModal;
