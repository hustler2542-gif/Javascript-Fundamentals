const http = require('http')

const taskUpdate = {
    title: 'Master HTTP'
}

const body = JSON.stringify(taskUpdate)

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/tasks/2',
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
    }
}

const req = http.request(options, (res) => {
    let responseBody = ''

    res.on('data', (chunk) => {
        responseBody += chunk
    })

    res.on('end', () => {
        console.log('Status:', res.statusCode)
        console.log('Response:', responseBody)
    })
})

req.write(body)
req.end()