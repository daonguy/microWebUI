//------------------------------------------------------------------------------
// Copyright IBM Corp. 2017
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//------------------------------------------------------------------------------

var appconfig = require('./config')
var https = require('https')

module.exports = function() {
  return {
  	"setUp" : function(app) {
  		//proxies to Call API Connect to launch other micro services APIs
  		app.all(["/api/micro/:cmd", "/api/micro/:cmd/:id"], function(req, res) {
  			try {
          console.log("----------------------- TEST");
  				var auth = 'Basic ' + new Buffer(appconfig.apiConnect.clientID + ':' + appconfig.apiConnect.clientSecret).toString('base64');
  				
  				var options = {
  					      host: appconfig.apiConnect.host,
  					      port: 443,
  					      path: `${appconfig.apiConnect.path}/${req.params.cmd}${req.params.id? '/'+req.params.id: ''}`,
  					      method: req.method,
  					      headers: {
  					          "Content-Type" : "application/json",
  					          'Authorization': auth
  					      }
  				}
  			    var apireq = https.request(options, function(apires) {
  			      var str = '';
  			      apires.on('data', function(chunk) {
  			        str += chunk;
          console.log("----------------------- TEST1");
  			      });
  			      apires.on('end', function() {
  			        res.status(apires.statusCode).send(str);
          console.log("----------------------- TEST2", str);
  			      });
  			    }).on('error', function(e) {
  			      console.log(e);
  			      var statusCode = e.statusCode;
  			      if (!statusCode) {
  			        statusCode = 404;
  			      }
  			      res.status(statusCode).send(e);
          console.log("----------------------- TEST3");
  			    });
  				if (req.body) {
  					console.log(JSON.stringify(req.body))
  			        var body = (typeof req.body === "object")
  			        ? JSON.stringify(req.body)
  			        : req.body
  			        apireq.write(body)
  			    }
  			    apireq.end();
  			} catch (err) { console.log(err); }
  		});

  	}
  };
};