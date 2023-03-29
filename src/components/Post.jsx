import React from 'react'

const Post = ({post}) => {

  return (
      <div key={post.postId}>
          <div>post postId : {post.postId}</div>
          <div>post content : {post.content}</div>
          {post && <img src={`${process.env.REACT_APP_SERVER}/${post.img}`} width='350px' height='400px' />}
      </div>
  )
}

export default Post