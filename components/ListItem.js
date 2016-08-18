import React from 'react'
import Rating from './Rating'

class ListItem extends React.Component {
  handleClick = (event) => {
    if (this.props.visited) {
      this.props.unset_visited(this.props.index)
    } else {
      this.props.set_visited(this.props.index)
    }
  }

  render () {
    return (
      <li>
        {this.props.name}
        {this.props.type}
        <input type="checkbox" defaultChecked={this.props.visited ? true : null} onClick={this.handleClick} />
        {this.props.visited ? <Rating {...this.props} /> : null}
      </li>
    )
  }
};

export default ListItem
