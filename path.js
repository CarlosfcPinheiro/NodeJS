// Import 'path' built-in module
const path = require('path');

console.log(path.sep); // Return the path's separator
const folderpath = path.join('./folder/subfolder/something.txt'); // Returns the path provided
const lastfolder = path.basename(folderpath); // Gets the last folder/file in the path

console.log(lastfolder);
console.log(folderpath);