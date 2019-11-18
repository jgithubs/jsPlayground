// https://www.youtube.com/watch?v=TlB_eWDSMt4, Programming with Mosh
//
// Usage of 'path' Module
const path = require('path');
pathObj    = path.parse(__filename);
console.log(pathObj);

// Usage of 'os' Module
const os = require('os');
var tm   = os.totalmem();
var fm   = os.freemem();
console.log(tm);
console.log(fm);

// Usage of Template String
// ES6 : ES2015 : ECMAScript 6
console.log(`Total Memory : ${tm}`);
console.log(`Free Memory  : ${fm}`);

// Usage of 'fs' Module
// Sync example
const fs    = require('fs');
const files = fs.readdirSync('./');
console.log(files);

// ASync example
fs.readdir('./', (err, files) => {
    if (err) 
        console.log('Error', err);
    else
        console.log('Result', files);
});