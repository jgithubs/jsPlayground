
// Endpoint or Url
var url = 'http://logger.io'

// This is a module with one function
function log(message) {
    console.log(message);
}

// Two export types:
//module.exports.log = log;      // 1. Export the object for all methods. Adding a method 'log'
//module.exports.url = url;      // 2. Export the url
//module.exports.endpoint = url; // 3. Export the url as another name
  module.exports     = log;      // 4. Export for one specific function
