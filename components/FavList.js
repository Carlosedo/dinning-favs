import React from 'react'
import ListItem from './ListItem'
import FavForm from './FavForm'

class FavList extends React.Component {
  render () {
    return (
      <div>
        <FavForm {...this.props} />
        <div>
          {this.props.dinningFavs.map((item, index) => {
            return (
              <ListItem key={index} index={index} {...item} {...this.props} />
            )
          })}
        </div>
      </div>
    )
  }
};

export default FavList
