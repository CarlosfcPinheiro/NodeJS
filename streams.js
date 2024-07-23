// Create a laaarge file
/*
const {writeFileSync} = require('fs');

for (let i = 0; i <= 10000; i++){
    writeFileSync('./folder/subfolder/big.txt', `Hello :D ${i} times\n`, {flag: 'a'});
}
*/

// Reading file with streams
const {createReadStream} = require('fs');
const stream = createReadStream('./folder/subfolder/big.txt');

stream.on('data', (chunk) => {
    console.log(chunk);
    console.log(`This file have ${chunk.length} bytes`);
})