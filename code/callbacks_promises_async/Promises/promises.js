

    function task(){  
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            reject('Task failed due to error')
        }, 2000)
    })
    }


    function startTask(){
        task().then((result)=> {
            console.log(result)
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    startTask()
    startTask()