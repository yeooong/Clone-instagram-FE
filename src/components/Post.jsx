import React, { useState } from 'react'
import styled from 'styled-components'
import comment from '../assets/img/comment.png'
import dm from '../assets/img/dm.png'
import LikeButton from './LikeButton'
import StContent from './StContent'
import Modal from './Modal';
import ModalPortal from './ModalPortal';
import edit from '../assets/img/edit.png'
import deleteIcon from '../assets/img/delete.png'
import api from 'src/axios/api'

const Post = ({ post }) => {
    const [isLike, setIsLike] = useState(post.isLike)
    const [likeCount, setLikeCount] = useState(post.likeCount)

    const [modal, setModal] = useState({
        type: '',
        isExist: false
    })

    const modalHandler = type => {
        setModal({ type, isExist: !modal.isExist });
    };

    const deletePost = async () => {
        const isDelete = window.confirm("정말 삭제하시겠습니까?")
        if (isDelete) {
            await api.delete(`/posts/${post.postId}`)
            .then(() => {alert("게시글이 정상적으로 삭제되었습니다")})
            .catch((response) => console.log(response))
            window.location.reload()
        } else {
            alert('삭제가 취소되었습니다')
        }
    }

    return (
        <StPostWrap key={post.postId}>
            <StProfileBox>
                <StProfileImg src={`${process.env.REACT_APP_SERVER}/${post.profileImg}`} />
                <span>{post.nickname}</span>
                <StTime>•{post.createdAt.split('T')[0]}</StTime>
                <StModifyButton src={edit} onClick={() => modalHandler('update')} post={post} />
                <StDeleteButton src={deleteIcon} onClick={deletePost}/>
            </StProfileBox>
            {post &&
                <img
                    src={`${process.env.REACT_APP_SERVER}/${post.img}`}
                    width='460px' height='460px'
                />
            }
            <StLikeBox>
                <LikeButton post={post} isLike={isLike} setIsLike={setIsLike} setLikeCount={setLikeCount} />
                <StCommentButton src={comment} width='24px' height='24px' onClick={() => modalHandler('detail')} />
                <img src={dm} width='24px' height='24px' />
            </StLikeBox>
            <StLikeCountBox>좋아요 {likeCount}개</StLikeCountBox>
            <StBodyBox>
                <StTitle>{post.nickname}</StTitle>
                <StContent content={post.content} />
            </StBodyBox>
            {
                post?.comment.map(comment => {
                    return (
                        <StCommentBox key={comment.commentId}>
                            <StTitle>{comment.nickname}</StTitle>
                            <StComment>{comment.comment}</StComment>
                        </StCommentBox>
                    )
                })
            }
            <ModalPortal>
                {modal.isExist && (
                    <Modal
                        onCloseHandler={modalHandler}
                        type={modal.type}
                        post={post}
                    />
                )}
            </ModalPortal>
        </StPostWrap>

    )
}

export default Post

const StPostWrap = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
`

const StProfileBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    gap: 5px;
`

const StProfileImg = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 10px;
`

const StTime = styled.span`
    color: #939393;
`

const StLikeBox = styled.div`
    max-width: 460px;
    display: flex;
    gap: 20px;
    margin-top: 10px;
`
const StCommentButton = styled.img`
    cursor: pointer;
`

const StLikeCountBox = styled.div`
    max-width: 460px;
    display: flex;
    margin-top: 10px;
    font-weight: bold;
`

const StBodyBox = styled.div`
    max-width: 460px;
    display: flex;
    flex-direction: row;
    gap: 6px;
    margin-top: 10px;
`

const StCommentBox = styled.div`
    margin-top: 5px;
`
const StTitle = styled.span`
    font-weight: bold;
`
const StComment = styled.span`
    margin-left: 3px;
`

const StModifyButton = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 170px;
  cursor: pointer;
`

const StDeleteButton = styled.img`
    width: 20px;   
    height: 20px;
    margin-left: 10px;
    cursor: pointer;
`