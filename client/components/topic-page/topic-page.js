import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import AddForm from '../add-form/add-form'

const TopicPage = (props) => {
  return (
    <div>
      <AddForm />
    </div>
  )
}

// const mapState = (state) => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }
//
// const mapDispatch = (dispatch) => {
//   return {
//     handleClick () {
//       dispatch(logout())
//     }
//   }
// }

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect()(TopicPage))

// TopicPage.propTypes = {
//   children: PropTypes.object,
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
