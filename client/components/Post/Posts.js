import React from 'react'

export default function (props) {
  const posts = props.posts
  return (
    <div>
      { posts.length > 0 ? posts.map(post => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <a>{post.url}</a>
            <p>{post.note}</p>
          </div>
        )
      }) :
      <div>Loading...</div>
      }
    </div>
  )
}
