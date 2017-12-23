import React from 'react'

class Posts extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
       HEY
       <button
        onClick={this.props.fetchPosts}
       >Click</button>
      </div>
    )
  }
}

export default Posts;
