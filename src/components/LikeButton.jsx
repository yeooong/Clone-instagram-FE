import styled from 'styled-components';
import heart from '../assets/img/heart.png'
import redHeart from '../assets/img/redHeart.png'
import api from '../axios/api'

const LikeButton = ({post, isLike, setIsLike, setLikeCount }) => {

    // 좋아요 함수
    const getLike = async () => {
        const response = await api.put(`/posts/${post.postId}/like`);
    }

    //게시글 좋아요 버튼
    const onClickLikeHandler = () => {
        getLike();
        setIsLike(!isLike)
        isLike? setLikeCount(prev=> prev-1) : setLikeCount(prev=> prev+1)
    };

    return (
        <div>
            <LikeClickButton src={isLike? redHeart : heart} width='26px' height='26px' onClick={onClickLikeHandler} />
        </div>
    )
}

export default LikeButton

const LikeClickButton = styled.img`
    cursor: pointer;
`