// Import 'fs' built-in module and build
// Asyncrhonous form to write this code
/*const {readFileSync, writeFileSync} = require('fs');

const messagetxt = readFileSync('./folder/subfolder/something.txt', 'utf-8');

writeFileSync('./folder/subfolder/something.txt', 'Hello, world!', 'utf-8');

console.log('My message :)');
console.log(messagetxt);*/

// Import Asynchronous methods from fs module
const {readFile, writeFile} = require('fs');

readFile('./folder/subfolder/something.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(`Error found => ${err}`);
    } else {
        console.log(data);
    }
});
console.log('I was executed before :)');

