import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import './style.css'

class GridMenu extends React.Component {
  state = {
    topics: ['JavaScript','Ruby','Java','DevOps','SQL','Python']
  }
  render () {
    return (
      <div>
        {
          this.state.topics.map((topic, i) => {
            return (
              <div>
                <Link key={i} to={`/${topic}`}>{topic}</Link>
              </div>
            )
          })
        }
      </div>
    )
  }
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
export default withRouter(connect()(GridMenu))

// GridMenu.propTypes = {
//   children: PropTypes.object,
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
