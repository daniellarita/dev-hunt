import React, { Component } from 'react'
import { connect } from 'react-redux'
import Posts from './Posts'
import { fetchPosts } from '../../store/post'

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts () {
      return dispatch(fetchPosts())
    }
  }
}

export default (connect)(mapStateToProps, mapDispatchToProps)(class extends Component {
  componentDidMount () {
    this.props.getPosts()
  }

  render () {
    return (
      <Posts
       {...this.props}
      />
    )
  }
})
