const http = require('http');
const { convertProcessSignalToExitCode } = require('util');
const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/tasks',
    method: 'POST',
    body: {"title":"Learn http"}
};

const request = http.request(options)
request.write(JSON.stringify(options.body))
request.end()
