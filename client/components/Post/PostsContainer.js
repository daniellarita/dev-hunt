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
    // I was not able to get the handle functions working in the container
    // constructor (props) {
    //   super(props)
    //   this.handleSubmit =  this.handleSubmit.bind(this)
    //   this.handleChange = this.handleChange.bind(this)
    // }

    //
    // handleSubmit () {
    //
    // }
    //
    // handleChange (e) {
    //   console.log("a change", e)
    //
    // }

    render() {
      return (
        <div>
        </div>
          // {...this.state}
          // {...this.props}
          // handleChange={this.handleChange}
          // handleSubmit={this.handleSubmit}
      )
    }
  }
)
