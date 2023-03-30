import React, { useState, useEffect } from 'react';
import {
  SPostModal,
  SPostModalFormWrap,
  SPostModalUpdateImage,
  SPostModalUploadImageWrap,
  SPostModalUserImage,
  SPostModalUserProfileWrap,
  SPostModalWrap,
  SPostModalCommentWrap,
  SPostModalCommentInput,
  SPostModalCommentInputWrap,
  SPostModalContentWrap,
  SPostModalContentUserID,
  SPostModalContentUserComment,
  SPostModalContentsWrap,
} from 'src/styles/PostModal.styled';
import api from 'src/axios/api';

import preview from 'src/assets/jerry.gif';
import profileImage from 'src/assets/weasel.png';

// 얘네 렌더할때 모달 백그라운드에 onCloseHandler 걸어야되네;;
function DetailPostModal({post}) {
  
  const [comments, setComments] = useState(null);
  const [comment, setComment] = useState('');

  const getComments = async () => {
    const response = await api.get(`/posts/${post.postId}/comments`)
    // console.log(...response.data.comments)
    setComments([...response.data.comments])
  }

  const postComments = async (e) => {
    e.preventDefault()
    const response = await api.post(`/posts/${post.postId}/comments`, {comment})
    getComments()
  }

  useEffect(() => {
    getComments()
  }, [])

  return (
    <SPostModal>
      <SPostModalWrap>
        <SPostModalUploadImageWrap>
          <SPostModalUpdateImage
            src={`${process.env.REACT_APP_SERVER}/${post.img}`}
            alt="업로드이미지"
            type="true"
          />
        </SPostModalUploadImageWrap>
        <SPostModalContentsWrap>
          <SPostModalUserProfileWrap>
            <SPostModalUserImage
              src={`${process.env.REACT_APP_SERVER}/${post.profileImg}`}
              alt="유저 프로필 사진"
            />
            <div>{post.nickname}</div>
          </SPostModalUserProfileWrap>
          <SPostModalCommentWrap>
            <ul>
              <li>
                <SPostModalContentWrap>
                    <SPostModalContentUserComment>
                      {post.content}
                    </SPostModalContentUserComment>
                </SPostModalContentWrap>
              </li>
              {comments?.map(comment => {
                return (
                <li key={comment.commentId}>
                  <SPostModalContentWrap>
                    <SPostModalUserImage
                      src={`${process.env.REACT_APP_SERVER}/${comment.profileImg}`}
                      alt="유저 프로필 사진"
                    />
                    <div>
                      <SPostModalContentUserID>
                        {comment.nickname}
                      </SPostModalContentUserID>
                      <SPostModalContentUserComment>
                      {comment.comment}
                      </SPostModalContentUserComment>
                    </div>
                  </SPostModalContentWrap>
                </li>
                )
                
              })}
            </ul>
          </SPostModalCommentWrap>
          <SPostModalCommentInputWrap>
            <SPostModalCommentInput
              type="text"
              placeholder="댓글 달기"
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
            <input type="submit" value="댓글 달기" onClick={postComments}/>
          </SPostModalCommentInputWrap>
        </SPostModalContentsWrap>
      </SPostModalWrap>
    </SPostModal>
  );
}

export default DetailPostModal;
