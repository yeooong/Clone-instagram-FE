import React, { useState } from 'react';
import { SPostModal, SPostModalWrap } from 'src/styles/PostModal.styled';

// 얘네 렌더할때 모달 백그라운드에 onCloseHandler 걸어야되네;;
function DetailPostModal() {
  const [comment, setComment] = useState('');

  return (
    <SPostModal>
      <SPostModalWrap>
        <div>
          <img
            src=""
            alt="게시물 사진"
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
          <div>
            <ul>
              <li>
                <img
                  src=""
                  alt="유저 프로필 사진"
                />
                <span>유저 닉네임</span>
                <span>댓글 내용</span>
              </li>
              <li>
                <img
                  src=""
                  alt="유저 프로필 사진"
                />
                <span>유저 닉네임</span>
                <span>댓글 내용</span>
              </li>
            </ul>
          </div>
          <div>버튼 들어갈 곳</div>
          <div>
            <label htmlFor=""></label>
            <input
              type="text"
              placeholder="댓글 달기"
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
          </div>
        </div>
      </SPostModalWrap>
    </SPostModal>
  );
}

export default DetailPostModal;
