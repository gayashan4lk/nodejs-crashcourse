const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, 'test'), {}, err => {
  if(err) throw err;
  console.log('Folder created!');
});

// Create and write to file
fs.writeFile(path.join(__dirname, 'test','hello.txt'), 'Hello worlds!', err => {
  if(err) throw err;
  console.log('File writing complete!');
});