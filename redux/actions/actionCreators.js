// add new favorite restaruant
export function add_fav(name, food_type) {
  return {
    type: 'ADD_FAV',
    name,
    food_type
  }
}

// set as visited
export function set_visited(favId) {
  return {
    type: 'SET_VISITED',
    favId
  }
}

// unset as visited
export function unset_visited(favId) {
  return {
    type: 'UNSET_VISITED',
    favId
  }
}

// set rating
export function set_rating(favId, rating) {
  return {
    type: 'SET_RATING',
    favId,
    rating
  }
}
