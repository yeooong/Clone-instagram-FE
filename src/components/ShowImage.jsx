import React, { useEffect, useState } from 'react';
import { getPosts } from '../api/pagenationApi';
import { pagenation } from '../utils/pagenation';

function ShowImage() {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    const count = 20;
    const page = 1;

    const response = await getPosts.get('/instargram_post');
    const data = response.data.filter(post => post.id < count * page);
    setPosts(data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
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
  );
}

export default ShowImage;
