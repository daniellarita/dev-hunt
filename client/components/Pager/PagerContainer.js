import Pager from './Pager'
import { connect } from 'react-redux'
import React from 'react'
import { setPageNumber } from '../../store/posts_pagination'
import { fetchPosts } from '../../store/post'

const mapStateToProps = (state) => {
  return {
    pageNumber: state.posts_pagination.pageNumber,
    posts: state.post.posts
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setPage: function (number){
      return dispatch(setPageNumber(number))
    },
    fetchPosts: function(number) {
      return dispatch(fetchPosts(number))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(class extends React.Component {

  handleClick = (e) => {
    this.props.setPage(e.target.text)
    this.props.fetchPosts(e.target.text)
  }

  render () {
    return (
      <Pager
        {...this.state}
        {...this.props}
        handleClick = {this.handleClick}
      />
    )
  }

})
