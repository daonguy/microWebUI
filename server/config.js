var config = {
  aclDB: "ScopeDB", //access control DB service name
  apiConnect: { //unable to use VCAP for api connect credentials
	  clientID:"4a6db995-c0d8-4053-9c7b-782de6eb218e",
	  clientSecret:"gE2nD8iX1xO2uE1gK7dP7cX6uX2wL8mM3pH4dY0kF5fR5qX4rE",
	  host:"api.us.apiconnect.ibmcloud.com",
	  path: "/compassdt-micro/sb/api"
  }
};

module.exports = config;
