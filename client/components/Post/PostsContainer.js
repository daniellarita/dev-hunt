import React, { Component } from 'react'
import { connect } from 'react-redux'
import Posts from './Posts'
import { fetchPosts } from '../../store/post'
import { addUpvoteToPost } from '../../store/post'

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts () {
      return dispatch(fetchPosts())
    },
    handleUpvoteClick (post) {
      return dispatch(addUpvoteToPost(post))
    }
  }
}

export default (connect)(mapStateToProps, mapDispatchToProps)(class extends Component {
  componentDidMount () {
    this.props.getPosts()
  }

  handleClick = (post) => {
    this.props.handleUpvoteClick(post)
  }

  render () {
    return (
      <Posts
       {...this.props}
       handleClick={this.handleClick}
      />
    )
  }
})
