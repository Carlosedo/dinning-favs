import React from 'react'

class Rating extends React.Component {
  handleClick = (rating) => {
    this.props.set_rating(this.props.index, rating)
  }

  getStarsForRating = (rating) => {
    var stars = []
    for (var i=0; i < this.props.rating; i++) {
      stars.push(<img key={i} src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-128.png" height="16" width="16" />)
    }

    return stars
  }

  getRatingSelector = () => {
    var inputs = []
    for (var i = 1; i < 6; i++) {
      inputs.push(<input type="radio" name="rating" value={i} key={i} onClick={this.handleClick.bind(null, i)} />)
    }

    return (<form>{inputs}</form>)
  }

  render() {
    if (this.props.rating) {
      var rating = this.getStarsForRating(this.props.rating)
    } else {
      var rating = this.getRatingSelector()
    }

    return (
      <div className="rating">{rating}</div>
    )
  }
}

export default Rating
