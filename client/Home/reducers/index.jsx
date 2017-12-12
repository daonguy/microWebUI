
import * as types from '../constants/ActionTypes'

const getInitialState = () =>{
  return {
  	data: {},
  	isLoading: false
  }
};

const initialState = getInitialState();

const HomeData = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_DATA_FAILURE:
      return Object.assign({}, state, {
          error: action.error,
          isLoading: false
        })
    case types.LOAD_CUSTOMERS_DATA_SUCCESS:
      return Object.assign({}, state, {
          customers: action.data,
          isLoading: false
        })
    case types.LOAD_PRODUCTS_DATA_SUCCESS:
      return Object.assign({}, state, {
          products: action.data,
          isLoading: false
        })
    case types.LOAD_DATA_REQUEST:
      return Object.assign({}, state, {
          isLoading: true
        })
    case types.LOAD_DATA_REQUEST:
      return Object.assign({}, state, {
          isLoading: true
        })
    
    default:
      return state
  }
}

module.exports = HomeData
