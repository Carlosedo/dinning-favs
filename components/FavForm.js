import React from 'react'

class FavForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const name = this.refs.name.value
    const food_type = this.refs.food_type.value

    this.props.add_fav(name, food_type)
    this.refs.favForm.reset()
  }

  render() {
    return (
      <form ref="favForm" onSubmit={this.handleSubmit}>
        <input type="text" ref="name" placeholder="restaurant" />
        <input type="text" ref="food_type" placeholder="food type" />
        <input type="submit" hidden />
      </form>
    )
  }
}

export default FavForm
