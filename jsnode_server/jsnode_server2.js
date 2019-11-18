const path = require('path');

// Path Module
pathObj = path.parse(__filename);
console.log(pathObj);

// os Module
const os = require('os');
var tm = os.totalmem();
var fm = os.freemem();

console.log(tm);
console.log(fm);

// Template String
// ES6 : ES2015 : ECMAScript 6

console.log(`Total Memory : ${tm}`);
console.log(`Free Memory  : ${fm}`);

// fs Module
const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

// ASync
fs.readdir('./', (err, files) => {
    if (err) 
        console.log('Error', err);
    else
        console.log('Result', files);
});