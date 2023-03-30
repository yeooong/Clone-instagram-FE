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
import api from 'src/axios/api'

import defaultImage from 'src/assets/add-image.png';
import profileImage from 'src/assets/weasel.png';

function UpdatePostModal({ onCloseHandler, post }) {
  
  const getToken = () => {
    const tokenString = document.cookie.split('=')[1]
    return tokenString
  }

  const [postComment, setPostComment] = useState({
    content: post.content,
  });

  return (
    <SPostModal>
      <ModalHeader>
        <TextBackButton onCloseHandler={onCloseHandler}>취소</TextBackButton>
        <ModalTitle>정보 수정</ModalTitle>
        <DoneButtonInUpdate
          onCloseHandler={onCloseHandler}
          comment={postComment}
          postId={post.postId}
        >
          완료
        </DoneButtonInUpdate>
      </ModalHeader>
      <SPostModalForm>
        <SPostModalUploadImageWrap>
          <SPostModalUpdateImage
            src={`${process.env.REACT_APP_SERVER}/${post.img}`}
            type='uploaded'
            alt="업로드이미지"
          />
        </SPostModalUploadImageWrap>
        <SPostModalFormWrap>
          <SPostModalUserProfileWrap>
            <SPostModalUserImage
              src={`${process.env.REACT_APP_SERVER}/${post.profileImg}`}
              alt="유저 프로필 사진"
            />
            <div>{post.nickname}</div>
          </SPostModalUserProfileWrap>
          <SPostModalFormTextarea
            type="text"
            placeholder="문구 입력"
            value={postComment.content}
            onChange={e => setPostComment({ content: e.target.value })}
          />
        </SPostModalFormWrap>
      </SPostModalForm>
    </SPostModal>
  );
}

export default UpdatePostModal;
