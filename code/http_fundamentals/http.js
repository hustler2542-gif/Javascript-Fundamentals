const http = require('http')

const tasks = []
let idCounter = 1

const server = http.createServer((req, res) => {
    let body =''
    if(req.url === '/'){
        res.statusCode = 200
        res.end('Hello from Home')
    }
    else if(req.url === '/tasks' && req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(tasks))
    }
    else if(req.url.startsWith('/tasks/') && req.method === 'GET'){
        const url_splitter = req.url.split('/')
        let number = Number(url_splitter[2])
        const task = tasks.find((id)=> id.id === number)
        if(task){    
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(task))
        }
        else {
            res.statusCode = 404
            res.end('Task not found')
        }
    }
    else if(req.url === '/tasks' && req.method === 'POST'){
        req.on('data', (chunk)=> {
            body = body + chunk
        })
        req.on('end', ()=> {
            const json_data = JSON.parse(body)
            console.log(json_data)
            let newOjb = {id:idCounter, ...json_data}
            tasks.push(newOjb)
            idCounter = idCounter + 1; 
            res.end('Task created')
        })

    }
})

server.listen(3000, ()=> {
    console.log(`Server is runnning on 3000 port number`)
})