// Creating server with Events emiiter and listener
const http = require('http');

const server = http.createServer();
server.on('request', (req, res) => {
    res.end('Goodbye');
});

server.listen(5000);