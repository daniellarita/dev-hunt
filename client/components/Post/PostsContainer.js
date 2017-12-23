import React from 'react'
import { connect } from 'react-redux'
import Posts from './Posts.js'
import { fetchPosts } from '../../store/post'

function mapStateToProps(state) {
  return {
    posts: state.post.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts : function() {
      dispatch(fetchPosts())
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (
  class extends React.Component {

    componentDidMount() {
      console.log(this.props)
      // this.props.fetchPosts()
    }

    render() {
      return (
        <Posts
          {...this.state}
          {...this.props}
        />
      )
    }
  }
)
