import { Pagination } from 'react-bootstrap'
import React from 'react'

class Pager extends React.Component {

  render () {
    console.log(this.props)
    let active = this.props.pageNumber
    let items = []
    for (let number = 1; number <= 10; number++) {
    	items.push(
    		<Pagination.Item key={number} active={number == active}>{number}</Pagination.Item>
    	)
    }
    return (
      <Pagination onClick={(e) => this.props.handleClick(e)} bsSize="small">{items}</Pagination>
    )
  }
}

export default Pager
