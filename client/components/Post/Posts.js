import React from 'react'
import PagerContainer from '../Pager/PagerContainer'

export default function (props) {
  const posts = props.posts
  const handleUpvote = props.handleClick

  return (
    <div>
      { posts.length > 0 ? posts.map(post => {
        return (
          <div className="post-card" key={post.uuid}>
            <div>
              <button onClick={() => handleUpvote(post)} id="upvote">⋀<br/>{post.upvotes}</button><h3 id="post-title">{post.title}</h3>
            </div>
            <a href={post.url}>View resource</a>
            <p>{post.note}</p>
          </div>
        )
      }) :
      <div></div>
      }
      <PagerContainer />
    </div>
  )
}
