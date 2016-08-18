function dinningFavs(state = [], action) {
  switch(action.type) {
    case 'ADD_FAV':
      return [
        ...state,
        {'name': action.name, 'type': action.food_type, 'visited': false, 'rating': null},
      ]
    case 'SET_VISITED':
      var i = action.favId
      return [
        ...state.slice(0, i),
        {...state[i], visited: true},
        ...state.slice(i + 1),
      ]
    case 'UNSET_VISITED':
      var i = action.favId
      return [
        ...state.slice(0, i),
        {...state[i], visited: false, rating: null},
        ...state.slice(i + 1),
      ]
    case 'SET_RATING':
      var i = action.favId
      return [
        ...state.slice(0, i),
        {...state[i], rating: action.rating},
        ...state.slice(i + 1),
      ]
    default:
      return state;
  }
  return state
}

export default dinningFavs
