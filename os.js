// Import 'os' built-in module
const os = require('os');

// Info about current user
const user = os.userInfo();
console.log(user);

// System uptime in seconds
console.log(`The system uptime is ${os.uptime}s`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOs);