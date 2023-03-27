import React, { useEffect, useState } from 'react';
import { getPosts } from '../api/pagenationApi';


function ShowImage() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const getPost = async (count, page) => {

    const response = await getPosts.get('/instargram_post');
    const data = response.data.filter(post => post.id < count * page);
    setPosts([...posts, ...data]);
  };

  useEffect(() => {
    getPost(20, { page });
  }, [page]);

  const handleScroll = () => {
    const ScrolHeight = document.documentElement.scrollHeight //스크롤 하지 않았을 때의 전체 높이
    const ScrollTop = document.documentElement.scrollTop //y축 방향으로 스크롤한 거리=스크롤되어 올라간 만큼의 높이
    const clientHeight = document.documentElement.clientHeight; // 눈에 보이는 만큼의 높이

    console.log("Height:", document.documentElement.scrollHeight);
    console.log("Top:", document.documentElement.scrollTop);
    console.log("clientHeight:", clientHeight)

    if (clientHeight + ScrollTop + 1 >= ScrolHeight) {
      setPage(prev => prev + 1);
      // setPage(page + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // anmount됐을 때
    return () => window.removeEventListener("scroll", handleScroll)
  }, []) // 여기서 handScroll에 따라 useEffect를 실행하도록 넣어주기도 하는 듯.

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
    
  );
}

export default ShowImage;
