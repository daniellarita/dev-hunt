import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import PostsContainer from './Post/PostsContainer'

export const UserHome = (props) => {
  const {email} = props

  return (
    <div>
      <h4>Welcome, {email}</h4>
      <PostsContainer />
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
