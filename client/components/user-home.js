import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Posts from './Post/Posts'

export const UserHome = (props) => {
  const {email} = props

  return (
    <div>
      <h4>Welcome, {email}</h4>
      <Posts />
    </div>
  )
}

const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

UserHome.propTypes = {
  email: PropTypes.string
}
