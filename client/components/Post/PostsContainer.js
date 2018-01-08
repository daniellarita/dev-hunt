import React, { Component } from 'react'
import { connect } from 'react-redux'
import Posts from './Posts'

const mapStateToProps = (state) => {
  console.log(state, "STTATE")
  return {
    posts: state.post.posts
  }
}

export default connect(mapStateToProps)(Posts)
