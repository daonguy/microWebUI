import fetch from 'whatwg-fetch'
import * as types from '../constants/ActionTypes'
import * as DashboardAPIs from '../services/DashboardAPIs'


const loadCustomersData = () => {
  return dispatch => {
    dispatch(loadDataRequest())
    return DashboardAPIs.getCustomers().then(

      json => dispatch(loadCustomersDataSuccess(json)),
      error => dispatch(loadDataFailure(error))
    )
  }
}

const loadProductsData = () => {
  return dispatch => {
    dispatch(loadDataRequest())
    return DashboardAPIs.getProducts().then(

      json => dispatch(loadProductsDataSuccess(json)),
      error => dispatch(loadDataFailure(error))
    )
  }
}
const loadDataRequest = () => {
  return {
    type: types.LOAD_DATA_REQUEST
  }
}
const loadCustomersDataSuccess = (data) => {
  return {
    type: types.LOAD_CUSTOMERS_DATA_SUCCESS,
    data
  }
}
const loadProductsDataSuccess = (data) => {
  return {
    type: types.LOAD_PRODUCTS_DATA_SUCCESS,
    data
  }
}
const loadDataFailure = (error) => {
  return {
    type: types.LOAD_DATA_FAILURE,
    error
  }
}
export const actions = {
  loadCustomersData,
  loadProductsData
}