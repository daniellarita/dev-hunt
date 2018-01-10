import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'

// renders out the Main components children (in routes file)
const Main = (props) => {
  const {children, handleClick, isLoggedIn} = props

  return (
    <div style={{color: '#00FFFF'}}>
      <Link to="/home">
        <h1>DevHunt</h1>
      </Link>
      <nav>
        {
          isLoggedIn
            ? <div>
              {/* The navbar will show these links after you log in */}
              <a href="#" onClick={handleClick}>Logout</a>
            </div>
            :
            <div>
              <a href="/auth/google">Login with Google</a>
            </div>
        }
        <Link to="/add-resource">Add Resource</Link>
      </nav>
      <hr />
      {children}
    </div>
  )
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
