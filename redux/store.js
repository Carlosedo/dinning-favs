import { createStore, compose } from 'redux'

// import root reducer
import rootReducer from './reducers/index'

import dinningFavs from './../data/dinning-favs'

// create an object for the default data
const defaultState = {
  dinningFavs,
}

const store = createStore(rootReducer, defaultState, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store
