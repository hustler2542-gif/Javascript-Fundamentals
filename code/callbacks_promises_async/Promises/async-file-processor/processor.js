const { readFile } = require('node:fs/promises');
const path = require('node:path');
const { resolve } = require('node:path');

async function simulateProcessing(fileName){
    return new Promise((resolve, reject)=> {
        setTimeout(function(){ 
        console.log(fileName + ' Started processing..')
        resolve(fileName + ' processed')
    }, 2000)
    })
}

async function processFile(files){
    
    try {
    const promises = files.map((file) => {
        return simulateProcessing(file)
    })

    const result = await Promise.all(promises)
    console.log(result)
    }
    catch(error){
        console.log(error)
    }

    // const fileQueue = filename

    // for(let i = 0; i < fileQueue.length; i++) {       
    //     const filePath = resolve(`D:/coding/code/callbacks_promises_async/Promises/async-file-processor/input/${fileQueue[i]}`)
    //     try {
    //         const contents = await readFile(filePath, {encoding:"utf-8"})
    //         await simulateProcessing(fileQueue[i])
    //         console.log(`${fileQueue[i]} processing finished <- 2 sec \n`)
    //         console.log(contents)
    //     }
    //     catch(error) {
    //         console.log(error)
    //     }
    //}  
}



processFile(['file1.txt', 'file2.txt', 'file3.txt'])
