import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Post from './Post';
import SideNav from './SideNav';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1)

    useEffect(() => {
        async function getPosts() {
            const AUTH_TOKEN = document.cookie.split('=')[1];
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
            const response = await axios.get(`${process.env.REACT_APP_SERVER}/posts?pageSize=4&page=${page}`);
            setPosts(prev => [...prev, ...response.data.postList]);
        }

        getPosts();
    }, [page])

    const handleScroll = () => {
        const ScrolHeight = document.documentElement.scrollHeight //스크롤 하지 않았을 때의 전체 높이
        const ScrollTop = document.documentElement.scrollTop //y축 방향으로 스크롤한 거리=스크롤되어 올라간 만큼의 높이
        const clientHeight = document.documentElement.clientHeight; // 눈에 보이는 만큼의 높이

        if (clientHeight + ScrollTop + 1 >= ScrolHeight) {
            setPage(prev => prev + 1);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        //메모리에 Listner가 계속 쌓이지 않게 하기 위해.
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <PostsWrap>
                {posts?.map(post => {
                    return (
                        <Post key={post.postId} post={post} />
                    );
                })}
        </PostsWrap>
    )
}

export default Posts

const PostsWrap = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid blue;
    width: 766px;
    height: 982px;
    margin-left: 300px;
`