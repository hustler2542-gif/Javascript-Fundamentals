const http = require('http')


// In built server memory
const tasks = []
let idCounter = 1

const server = http.createServer((req, res) => {
    let body =''

    if(req.url === '/'){
        res.statusCode = 200
        res.end('Hello from Home')
    }
    // Get all tasks method
    else if(req.url === '/tasks' && req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(tasks))
    }
    // Get specific task method
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
    // Post method
    else if(req.url === '/tasks' && req.method === 'POST'){
        req.on('data', (chunk)=> {
            body = body + chunk
        })
        req.on('end', ()=> {
            const json_data = JSON.parse(body)
            
            let newOjb = {id:idCounter, ...json_data}
            tasks.push(newOjb)

            idCounter = idCounter + 1; 
            res.end('Task created')
        })
    }
    // Delete method
    else if(req.url.startsWith('/tasks/') && req.method === 'DELETE'){
            
        const url_splitter = req.url.split('/')
        let number = Number(url_splitter[2])
            
        const index_of_task = tasks.findIndex((task) => task.id === number)
            tasks.splice(index_of_task, 1)

            res.setHeader('Content-Type', 'plain/text');
            res.end('Task removed')
    }
})

server.listen(3000, ()=> {
    console.log(`Server is runnning on 3000 port number`)
})