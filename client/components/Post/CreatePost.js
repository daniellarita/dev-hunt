import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import axios from 'axios'
import store from '../../store'
import {addNewPost} from '../../store/post'

class CreatePost extends React.Component {
  state = {
    title: '',
    url: '',
    note: ''
  }

  handleTitleChange = (e) => {
    this.setState({title: e.target.value})
  }

  handleUrlChange = (e) => {
    this.setState({url: e.target.value})
  }

  handleNoteChange = (e) => {
    this.setState({note: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    store.dispatch(addNewPost(this.state))
    console.log(this.state)
  }

  render (props) {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Title:
        <input onChange={this.handleTitleChange} type="text" name="title" />
        </label>
        <label>
        URL:
        <input onChange={this.handleUrlChange} type="text" name="url" />
        </label>
        <label>
        Note:
        <textarea onChange={this.handleNoteChange} type="text" name="note" />
        </label>
        <button type="submit" value="Submit">
        Submit
        </button>
      </form>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     post: state.post
//   }
// }

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect()(CreatePost))
