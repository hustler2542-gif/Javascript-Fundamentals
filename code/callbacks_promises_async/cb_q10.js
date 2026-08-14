function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 completed");
        callback(null, "Result 1");
    }, 2000);
}

function task2(result, callback) {
    setTimeout(() => {
        console.log("Task 2 completed");
        callback(null, "Result 2");
    }, 1000);
}

function task3(result, callback) {
    setTimeout(() => {
        console.log("Task 3 completed");
        callback(1, "Result 3");
    }, 500);
}

function executeTasks(){
    task1((error, result1)=> {
        if(error !== null)
            return
        task2(result1,(error, result2)=> {
             if(error !== null)
                return
            
            task3(result2, (error, result3)=> {
                 if(error !== null)
                    return
            })
        })
    })
}

executeTasks()