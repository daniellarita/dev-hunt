import React, { Component } from 'react'
import { connect } from 'react-redux'
import Posts from './Posts'
import { fetchPosts } from '../../store/post'
import { addUpvoteToPost } from '../../store/post'
import axios from 'axios'

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
      // return dispatch(addUpvoteToPost(post))
      let upvotes = post.upvotes + 1
      axios.put(`/api/posts/${post.uuid}`,{
        title: post.title,
        url: post.url,
        note: post.note,
        upvotes: upvotes
      })
    }
  }
}

export default (connect)(mapStateToProps, mapDispatchToProps)(class extends Component {
  componentDidMount () {
    this.props.getPosts()
  }

  handleClick = (post) => {
    console.log("uuid",post.uuid, "CLICKED")
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
