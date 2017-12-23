import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

class AddForm extends React.Component {

  render () {
    return (
      <form>
        <label>
          Resource:
          <input type="text" name="resource" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect()(AddForm))
