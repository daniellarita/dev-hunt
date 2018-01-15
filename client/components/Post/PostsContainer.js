import React, { Component } from 'react'
import { connect } from 'react-redux'
import Posts from './Posts'
import { fetchPosts } from '../../store/post'
import { addUpvoteToPost } from '../../store/post'

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
    pageNumber: state.posts_pagination.pageNumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts (pageNumber) {
      return dispatch(fetchPosts(pageNumber))
    },
    handleUpvoteClick (post, pageNumber) {
      return dispatch(addUpvoteToPost(post, pageNumber))
    }
  }
}

export default (connect)(mapStateToProps, mapDispatchToProps)(class extends Component {
  componentDidMount () {
    this.props.getPosts(this.props.pageNumber)
  }

  handleClick = (post, pageNumber) => {
    this.props.handleUpvoteClick(post, this.props.pageNumber)
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
