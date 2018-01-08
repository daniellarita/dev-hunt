import React, { Component } from 'react'
import { connect } from 'react-redux'
import Posts from './Posts'

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts
  }
}

export default (connect)(mapStateToProps, null)(Posts)
