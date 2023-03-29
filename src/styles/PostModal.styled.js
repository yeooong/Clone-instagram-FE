import styled, { css, keyframes } from 'styled-components';

export const SPostModal = styled.div`
  background-color: white;
  border-radius: 10px;
`;

export const SModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 2px lightgray solid;
`;

export const SPostModalWrap = styled.div`
  display: flex;
`;

export const SPostModalForm = styled.form`
  display: flex;
  min-height: 400px;
`;

export const SPostModalContent = styled.div`
  display: flex;
  min-height: 400px;
`;

export const SPostModalImageWrap = styled.div`
  flex-basis: 66.6%;
  border-right: 2px lightgray solid;
  height: inherit;
`;

export const SPostModalFormWrap = styled.div`
  flex-basis: 33.3%;
  padding: 10px;
  position: relative;
`;

export const SPostModalFormTextarea = styled.textarea`
  margin-top: 10px;
  min-width: 180px;
  min-height: 450px;
  max-height: 600px;
  font-size: 16px;
`;

export const SPostModalBackIcon = styled.img`
  width: 20px;
`;

export const SPostModalH1 = styled.h1`
  font-size: 18px;
`;

export const SPostModalDoneButton = styled.button`
  color: #2196f3;
  font-weight: bold;
`;

export const SPostModalFileInputWrap = styled.div`
  padding: 10px;
`;

export const SPostModalFileLabel = styled.label`
  margin-right: 10px;
`;

export const SPostModalFileInput = styled.input`
  /* padding: 10px; */
`;

export const SPostModalUploadImage = styled.img`
  @keyframes dancingModal {
    25% {
      transform: rotate3D(2, 3, 2, 180deg);
    }
    75% {
      transform: rotate3D(2, 0, -2, -180deg);
    }
  }
  /* animation: dancingModal 2s ease-in-out infinite */

  min-width: 600px;
  min-height: 450px;
  max-width: 800px;
  max-height: 600px;

  ${props =>
    !props.type &&
    css`
      min-width: 50px;
      min-height: 50px;
      max-width: 100px;
      max-height: 100px;
    `};
`;

export const SPostModalUpdateImage = styled.img`
  @keyframes dancingModal {
    25% {
      transform: rotate3D(2, 3, 2, 180deg);
    }
    75% {
      transform: rotate3D(2, 0, -2, -180deg);
    }
  }
  /* animation: dancingModal 2s ease-in-out infinite */

  min-width: 600px;
  min-height: 520px;
  max-width: 800px;
  max-height: 600px;

  ${props =>
    !props.type &&
    css`
      min-width: 50px;
      min-height: 50px;
      max-width: 100px;
      max-height: 100px;
    `};
`;

export const SPostModalUploadImageWrap = styled.div`
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SPostModalUserProfileWrap = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
`;

export const SPostModalUserImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-right: 8px;
`;

export const SPostModalComment = styled.div``;

export const SPostModalCommentInputWrap = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  border-top: 1px solid lightgray;
  min-width: 400px;
`;

export const SPostModalCommentInput = styled.input`
  min-width: 195px;
  min-height: 30px;
  width: inherit;
  max-width: 400px;
`;

export const SPostModalCommentWrap = styled.div`
  margin-top: 10px;
  overflow: scroll;
  max-height: 400px;
`;

export const SPostModalContentWrap = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const SPostModalContentUserID = styled.h1`
  font-size: 16px;
  font-weight: normal;
  margin-right: 10px;
`;

export const SPostModalContentUserComment = styled.p`
  font-size: 14px;
  color: gray;
  overflow: visible;
`;

export const SPostModalContentsWrap = styled.div`
  min-width: 400px;
  max-width: 400px;
  padding: 10px;
  padding-bottom: 40px;
  position: relative;
`;
