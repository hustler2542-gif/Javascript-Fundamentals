const { rejects } = require('node:assert');
const { read } = require('node:fs');
const { readFile } = require('node:fs/promises');
const path = require('node:path');
const { resolve } = require('node:path');
const { promisify } = require('node:util');

async function simulateProcessing(fileName) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(fileName === 'file2.txt') {
                reject(fileName + ' File is corrupted')
                return
            }
            const data = fileName + ' file has been processed ' 
            resolve(data.toString())
        }, 2000)
    })
}

async function processWithRetry(fileName, maxRetries) {
        let lastError; 
        for(let i = 1; i <= maxRetries; i++) {
            try {
                const reattempt = await simulateProcessing(fileName);
                return reattempt
            }
            catch(error){
                console.log(fileName + ' retry attempt ' + i); 
                lastError = error
                continue
            }
        }
        throw lastError
}

async function processSingleFile(fileName){
        const filePath = `D:/coding/code/callbacks_promises_async/Promises/async-file-processor/input/${fileName}`
        let content; 
        try{
            content = await readFile(filePath, {encoding:"utf-8"} )
        }
        catch(error) {
            throw error
        }
        try{
            const processingData = await simulateProcessing(fileName)
            return content  + processingData
        }
        catch(error) {
            const retry = await processWithRetry(fileName, 3)
            return content + retry
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
}



processFile(['file1.txt', 'file2.txt', 'file3.txt'])
