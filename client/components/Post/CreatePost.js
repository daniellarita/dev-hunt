import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

class CreatePost extends React.Component {

  render () {
    return (
      <form>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          URL:
          <input type="text" name="url" />
        </label>
        <label>
          Note:
          <textarea type="text" name="note" />
        </label>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect()(CreatePost))
