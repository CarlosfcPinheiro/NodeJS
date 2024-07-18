// Import 'http' built-in module
const http = require('http');

const server = http.createServer((req, res) => { // Represents the 'requestListener callback function'
    // req ==> It's the request object that carries informations about some http request
    // res ==> It's the response object and writable to the user
    if (req.url === "/"){
        res.write('<h1>Welcome to the home page.</h1>');
        res.end('one more thing. bye ;P'); // Close the stream with one last message (if you want)

    } if (req.url === "/about") {
        res.write('<h2>This is an about page</h2>');
        res.end();
    } else {
        res.write(`
            <h1>Oops!</h1>
            <p>We can not found any page with this endpoint :(</p>`);
    }

});

server.listen(5500);