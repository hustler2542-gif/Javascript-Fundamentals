const { read } = require('node:fs');
const { readFile } = require('node:fs/promises');
const path = require('node:path');
const { resolve } = require('node:path');

async function simulateProcessing(fileName) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            const data = fileName + ' file has been processed ' 
            resolve(data.toString())
        }, 2000)
    })
}

async function processSingleFile(fileName){
        const filePath = `D:/coding/code/callbacks_promises_async/Promises/async-file-processor/input/${fileName}`
        try{
            const content = await readFile(filePath, {encoding:"utf-8"} )
            const processingData = await simulateProcessing(fileName)
            return content  + processingData
        }catch(error) {
            throw error;
        }
}


async function processFile(files){
    
    try {
    const promises = files.map((file) => {
        return processSingleFile(file)
    })

    const result = await Promise.allSettled(promises)
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
