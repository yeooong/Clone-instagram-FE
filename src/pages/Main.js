import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Main = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1)

    useEffect(async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER}/posts?pageSize=10&page=${page}`);
        console.log('response=>',response)
        setPosts(prev => [...prev, ...response.data]);
    },[page])

    const handleScroll = () => {
        const ScrolHeight =  document.documentElement.scrollHeight //스크롤 하지 않았을 때의 전체 높이
        const ScrollTop = document.documentElement.scrollTop //y축 방향으로 스크롤한 거리=스크롤되어 올라간 만큼의 높이
        const clientHeight = document.documentElement.clientHeight; // 눈에 보이는 만큼의 높이

        if(clientHeight + ScrollTop + 1 >= ScrolHeight) {
            setPage(prev => prev+1);
        }
    }

    useEffect(()=> {
        window.addEventListener("scroll", handleScroll);

        //메모리에 Listner가 계속 쌓이지 않게 하기 위해.
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

  return (
    <>
      <section>
        {posts?.map(post => {
          return (
            <div key={post.id}>
              <div>post id : {post.id}</div>
              <div>post content : {post.content}</div>
              <div>post image : {post.img}</div>
            </div>
          );
        })}
      </section>
      <h1>무한스크롤 해죠...</h1>
    </>
  )
}

export default Main