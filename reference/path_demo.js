const path = require('path'); // path is a core module of nodeJS


console.log(__filename);

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extention
console.log(path.extname(__filename));

// Create path Object
console.log(path.parse(__filename));
console.log(path.parse(__filename).dir);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html')); // Put correct delimiter Ex: windows ( \ ) , mac & linux ( / )