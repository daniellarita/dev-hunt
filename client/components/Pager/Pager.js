import { Pagination } from 'react-bootstrap'
import React from 'react'

class Pager extends React.Component {

  render () {
    let active = this.props.pageNumber
    let numberOfposts = this.props.posts.length
    let postsPerPage = 5
    let numberOfpages = Math.ceil(numberOfposts/postsPerPage)
    let items = []
    for (let number = 1; number <= 2; number++) {
    	items.push(
    		<Pagination.Item key={number} active={number == active}>{number}</Pagination.Item>
    	)
    }
    return (
      <Pagination style={{color: 'black', position: 'absolute', top: '0', width: '100%', padding: '100px'}} onClick={(e) => this.props.handleClick(e)} bsSize="small">{items}</Pagination>
    )
  }
}

export default Pager
