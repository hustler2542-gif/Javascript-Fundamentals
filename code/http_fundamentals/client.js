const http = require('http');
const { convertProcessSignalToExitCode } = require('util');
const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/tasks',
    method: 'POST',
    body: 'Learn http'
};

const request = http.request(options)

request.write(options.body)
request.end()
