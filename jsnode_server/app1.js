//const logger = require('./logger1'); // Use 'const' to avoid overridding the variable
//console.log(logger);
//logger.log('boo');

const log = require('./logger1');
log('ho');
log(__filename);
log(__dirname);
