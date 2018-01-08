import React, { Component } from 'react'
import {connect} from 'react-redux'
import CreatePost from './CreatePost'
import {addNewPost} from '../../store/post'

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit (post) {
      return dispatch(addNewPost(post))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      url: '',
      note: ''
    }
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
    this.props.handleSubmit(this.state)
  }

  render () {
    return (
      <CreatePost
        {...this.state}
        {...this.props}
        handleTitleChange={this.handleTitleChange}
        handleUrlChange={this.handleUrlChange}
        handleNoteChange={this.handleNoteChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
})
