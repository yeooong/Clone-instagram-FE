import React from 'react';
import api from 'src/axios/api';
import { SPostModalDoneButton } from 'src/styles/PostModal.styled';

function DoneButtonInUpdate({ onCloseHandler, postId, comment, children }) {
  const onClickModalHandler = async () => {
    await api.put(`/posts/${postId}`, {...comment})
    .then(() => {    
      alert('게시물 수정에 성공했습니다.')
      onCloseHandler()
      window.location.reload()
    }).catch(
      (response) => {
        alert(response.response.data.errormessage)
        onCloseHandler()
      }
    );

  }

  return (
    <SPostModalDoneButton onClick={onClickModalHandler}>
      {children}
    </SPostModalDoneButton>
  );
}

export default DoneButtonInUpdate;
