import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from '../actions'
import Header from '../../common/Header/Header'

import styles from './HomeApp.css'


class HomeApp extends Component {

	constructor(props) {
    	super(props)
  	}


  componentWillMount = () => {
    this.props.actions.loadCustomersData()
    this.props.actions.loadProductsData()
  };

  render = () => {

      const renderCustomers = (this.props.customers && this.props.customers.length > 0 ) ? this.props.customers.map(customer=>{
          return (
                  <tr>
                    <td>{customer.name}</td>
                    <td>{customer.status}</td>
                  </tr>
                  )
      }) : ""

      const renderProducts = (this.props.products && this.props.products.length > 0 ) ? this.props.products.map(product=>{
          return (
                  <tr>
                    <td>{product.name}</td>
                    <td>{product.status}</td>
                  </tr>
                  )
      }) : ""

      const tableClasses = `table ${styles.customers}`
	    return (
	      <div className={styles.body}>
          <Header title="Dashboard"/>
          <div className={styles.welcome}>WELCOME to Dao React UI boiler Plate</div>

          <div className={styles.sectionHeader}><span>Customers</span></div>
          <table className={tableClasses}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {renderCustomers}
              </tbody>
            </table>


          <div className={styles.sectionHeader}><span>Products</span></div>
          <table className={tableClasses}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {renderProducts}
              </tbody>
            </table>
	      </div>
	    );
  }
}

function mapStateToProps(state) {
  // map state (from reducers) to props for the React app.
  // usually this is 1-to-1.
  const { customers, products, isLoading } = state
  return {
    customers,
    products,
    isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeApp)