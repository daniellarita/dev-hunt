import React from 'react'

export default function (props) {
  const posts = props.posts
  return (
    <div>
      { posts.length > 0 ? posts.map(post => {
        return (
          <div className="post-card" key={post.id}>
            <div>
              <button id="upvote">⋀</button><h3 id="post-title">{post.title}</h3>
            </div>
            <a href={post.url}>View resource</a>
            <p>{post.note}</p>
          </div>
        )
      }) :
      <div>Loading...</div>
      }
    </div>
  )
}
