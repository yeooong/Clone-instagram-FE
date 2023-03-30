import React, { useState } from 'react';
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

import preview from 'src/assets/jerry.gif';
import profileImage from 'src/assets/weasel.png';

// 얘네 렌더할때 모달 백그라운드에 onCloseHandler 걸어야되네;;
function DetailPostModal() {
  const [comment, setComment] = useState('');

  return (
    <SPostModal>
      <SPostModalWrap>
        <SPostModalUploadImageWrap>
          <SPostModalUpdateImage
            src={preview}
            alt="업로드이미지"
            type="true"
          />
        </SPostModalUploadImageWrap>
        <SPostModalContentsWrap>
          <SPostModalUserProfileWrap>
            <SPostModalUserImage
              src={profileImage}
              alt="유저 프로필 사진"
            />
            <div>Jinsik_eum</div>
          </SPostModalUserProfileWrap>
          <SPostModalCommentWrap>
            <ul>
              <li>
                <SPostModalContentWrap>
                  <SPostModalUserImage
                    src={profileImage}
                    alt="유저 프로필 사진"
                  />
                  <div>
                    <SPostModalContentUserID>
                      Jinsik_Eum
                    </SPostModalContentUserID>
                    <SPostModalContentUserComment>
                      댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
                      내용댓글내용댓글 댓글 내용댓글 내용댓글 내용댓글 내용댓글
                      내용댓글 내용댓글
                    </SPostModalContentUserComment>
                  </div>
                </SPostModalContentWrap>
              </li>
              <li>
                <SPostModalContentWrap>
                  <SPostModalUserImage
                    src={profileImage}
                    alt="유저 프로필 사진"
                  />
                  <div>
                    <SPostModalContentUserID>
                      Jinsik_Eum
                    </SPostModalContentUserID>
                    <SPostModalContentUserComment>
                      댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
                      내용댓글내용댓글
                    </SPostModalContentUserComment>
                  </div>
                </SPostModalContentWrap>
              </li>
              <li>
                <SPostModalContentWrap>
                  <SPostModalUserImage
                    src={profileImage}
                    alt="유저 프로필 사진"
                  />
                  <div>
                    <SPostModalContentUserID>
                      Jinsik_Eum
                    </SPostModalContentUserID>
                    <SPostModalContentUserComment>
                      댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
                      내용댓글내용댓글
                    </SPostModalContentUserComment>
                  </div>
                </SPostModalContentWrap>
              </li>
              <li>
                <SPostModalContentWrap>
                  <SPostModalUserImage
                    src={profileImage}
                    alt="유저 프로필 사진"
                  />
                  <div>
                    <SPostModalContentUserID>
                      Jinsik_Eum
                    </SPostModalContentUserID>
                    <SPostModalContentUserComment>
                      댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
                      내용댓글내용댓글
                    </SPostModalContentUserComment>
                  </div>
                </SPostModalContentWrap>
              </li>

              <li>
                <SPostModalContentWrap>
                  <SPostModalUserImage
                    src={profileImage}
                    alt="유저 프로필 사진"
                  />
                  <div>
                    <SPostModalContentUserID>
                      Jinsik_Eum
                    </SPostModalContentUserID>
                    <SPostModalContentUserComment>
                      댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
                      내용댓글내용댓글
                    </SPostModalContentUserComment>
                  </div>
                </SPostModalContentWrap>
              </li>
              <li>
                <SPostModalContentWrap>
                  <SPostModalUserImage
                    src={profileImage}
                    alt="유저 프로필 사진"
                  />
                  <div>
                    <SPostModalContentUserID>
                      Jinsik_Eum
                    </SPostModalContentUserID>
                    <SPostModalContentUserComment>
                      댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
                      내용댓글내용댓글
                    </SPostModalContentUserComment>
                  </div>
                </SPostModalContentWrap>
              </li>
              <li>
                <SPostModalContentWrap>
                  <SPostModalUserImage
                    src={profileImage}
                    alt="유저 프로필 사진"
                  />
                  <div>
                    <SPostModalContentUserID>
                      Jinsik_Eum
                    </SPostModalContentUserID>
                    <SPostModalContentUserComment>
                      댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
                      내용댓글내용댓글 댓글 내용댓글 내용댓글 내용댓글 내용댓글
                      내용댓글 내용댓글
                    </SPostModalContentUserComment>
                  </div>
                </SPostModalContentWrap>
              </li>
              <li>
                <SPostModalContentWrap>
                  <SPostModalUserImage
                    src={profileImage}
                    alt="유저 프로필 사진"
                  />
                  <div>
                    <SPostModalContentUserID>
                      Jinsik_Eum
                    </SPostModalContentUserID>
                    <SPostModalContentUserComment>
                      댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
                      내용댓글내용댓글 댓글 내용댓글 내용댓글 내용댓글 내용댓글
                      내용댓글 내용댓글
                    </SPostModalContentUserComment>
                  </div>
                </SPostModalContentWrap>
              </li>
              <li>
                <SPostModalContentWrap>
                  <SPostModalUserImage
                    src={profileImage}
                    alt="유저 프로필 사진"
                  />
                  <div>
                    <SPostModalContentUserID>
                      Jinsik_Eum
                    </SPostModalContentUserID>
                    <SPostModalContentUserComment>
                      댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
                      내용댓글내용댓글 댓글 내용댓글 내용댓글 내용댓글 내용댓글
                      내용댓글 내용댓글
                    </SPostModalContentUserComment>
                  </div>
                </SPostModalContentWrap>
              </li>
              <li>
                <SPostModalContentWrap>
                  <SPostModalUserImage
                    src={profileImage}
                    alt="유저 프로필 사진"
                  />
                  <div>
                    <SPostModalContentUserID>
                      Jinsik_Eum
                    </SPostModalContentUserID>
                    <SPostModalContentUserComment>
                      댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
                      내용댓글내용댓글 댓글 내용댓글 내용댓글 내용댓글 내용댓글
                      내용댓글 내용댓글
                    </SPostModalContentUserComment>
                  </div>
                </SPostModalContentWrap>
              </li>
              <li>
                <SPostModalContentWrap>
                  <SPostModalUserImage
                    src={profileImage}
                    alt="유저 프로필 사진"
                  />
                  <div>
                    <SPostModalContentUserID>
                      Jinsik_Eum
                    </SPostModalContentUserID>
                    <SPostModalContentUserComment>
                      댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
                      내용댓글내용댓글 댓글 내용댓글 내용댓글 내용댓글 내용댓글
                      내용댓글 내용댓글
                    </SPostModalContentUserComment>
                  </div>
                </SPostModalContentWrap>
              </li>
            </ul>
          </SPostModalCommentWrap>
          <SPostModalCommentInputWrap>
            <SPostModalCommentInput
              type="text"
              placeholder="댓글 달기"
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
          </SPostModalCommentInputWrap>
        </SPostModalContentsWrap>
      </SPostModalWrap>
    </SPostModal>
  );
}

export default DetailPostModal;
