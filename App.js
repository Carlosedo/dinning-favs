import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import * as actionCreators from './redux/actions/actionCreators'
import store from './redux/store'
import FavList from './components/FavList';


function mapStateToProps(state) {
  return {
    dinningFavs: state.dinningFavs
  }
}

function mapsDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(
  mapStateToProps,
  mapsDispatchToProps
)(FavList)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)
