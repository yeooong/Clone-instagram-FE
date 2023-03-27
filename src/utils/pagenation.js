import { getPosts } from '../api/pagenationApi';

export const pagenation = async (count, index) => {
  const response = await getPosts.get('/instargram_post');
  // .then(res => console.log(res.data));

  //   const data = response?.data;

  //   data?.filter(post => {
  //     console.log(post, post.id, index);
  //     return post.id < index * count;
  //   });

  //   return data;
  return response?.data;
};
