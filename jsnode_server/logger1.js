var url = 'http://logger.io'

function log(message) {
    console.log(message);
}

//module.exports.log      = log; // Export the object for multiple methods
module.exports = log; // Export the function for one
