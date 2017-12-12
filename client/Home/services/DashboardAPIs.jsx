const apiCustomer = '/api/micro/customers'
const apiProducts = '/api/micro/products'
const options = {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    }
}

const checkStatus = (response) => {
  console.log(response)
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

const toJson = response => response.json()


const getCustomers= () => {
  return fetch(apiCustomer, options)
  .then(checkStatus)
  .then(toJson)
    .then(data => {
      return data
    })
}

const getProducts= () => {
  return fetch(apiProducts, options)
  .then(checkStatus)
  .then(toJson)
    .then(data => {
      return data
    })
}

export {
  getCustomers,
  getProducts
}
