import { Pagination } from 'react-bootstrap'
import React from 'react'

class Pager extends React.Component {

  render () {
    let active = this.props.pageNumber
    console.log(this.props.posts)
    let numberOfposts = this.props.posts.length
    let postsPerPage = 5
    let numberOfpages = Math.ceil(numberOfposts/postsPerPage)
    console.log(numberOfposts, postsPerPage, numberOfpages)
    let items = []
    for (let number = 1; number <= numberOfpages; number++) {
    	items.push(
    		<Pagination.Item key={number} active={number == active}>{number}</Pagination.Item>
    	)
    }
    return (
      <Pagination style={{color: 'black', position: 'fixed', bottom: '0', width: '100%'}} onClick={(e) => this.props.handleClick(e)} bsSize="small">{items}</Pagination>
    )
  }
}

export default Pager
