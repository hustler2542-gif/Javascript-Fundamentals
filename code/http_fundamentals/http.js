const http = require('http')

const server = http.createServer((req, res) => {
    let body =''
    if(req.url === '/'){
        res.statusCode = 200
        res.end('Hello from Home')
    }
    else if(req.url === '/tasks' && req.method === 'GET'){
        res.end('Here are your tasks')
    }
    else if(req.url === '/tasks' && req.method === 'POST'){
        req.on('data', (chunk)=> {
            body = body + chunk
        })
        req.on('end', ()=> {
            console.log('This works')
            console.log(body)
            res.end('Task created')
        })

    }
})

server.listen(3000, ()=> {
    console.log(`Server is runnning on 3000 port number`)
})