var url = 'http://logger.io'

// This is a module with one function
function log(message) {
    console.log(message);
}

// Two export types:
//module.exports.log = log; // 1. Export the object for all methods
  module.exports     = log; // 2. Export for one specific function
