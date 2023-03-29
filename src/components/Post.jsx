import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import comment from '../assets/img/comment.png'
import dm from '../assets/img/dm.png'
import LikeButton from './LikeButton'
import StContent from './StContent'

const Post = ({ post }) => {
    const [isLike, setIsLike] = useState(post.isLike)
    const [likeCount, setLikeCount] = useState(post.likeCount)

    return (
        <StPostWrap key={post.postId}>
            <StProfileBox>
                <StProfileImg src={`${process.env.REACT_APP_SERVER}/${post.profileImg}`} />
                <span>{post.nickname}</span>
            </StProfileBox>
            {post && 
            <img 
            src={`${process.env.REACT_APP_SERVER}/${post.img}`} 
            width='460px' height='460px'
            />
            }
            <StLikeBox>
                <LikeButton post={post} isLike={isLike} setIsLike={setIsLike} setLikeCount={setLikeCount} />
                <img src={comment} width='24px' height='24px' />
                <img src={dm} width='24px' height='24px' />
            </StLikeBox>
            <StLikeCountBox>좋아요 {likeCount}개</StLikeCountBox>
            <StBodyBox>
                <StTitle>{post.nickname}</StTitle>
                <StContent content={post.content} />
            </StBodyBox>
            <StCommentBox>
                댓글자리{post.comment.comment}
            </StCommentBox>
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
`

const StProfileImg = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 10px;
`

const StLikeBox = styled.div`
    max-width: 460px;
    display: flex;
    gap: 20px;
    margin-top: 10px;
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
const StTitle = styled.span`
    font-weight: bold;
`
const StCommentBox = styled.div`
    margin-top: 10px;
`