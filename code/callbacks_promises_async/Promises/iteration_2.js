/** 
 * Simulator for 
 * downloading file 
 * process it for some time 
 * only if that is resolved or done 
 * start process file 
 * work on that operartion
 * only if this is done
 * start upload file 
 */

function downloadFile(){
    return new Promise((resolve, reject)=>{
        console.log('Downloading process has started..')
        setTimeout(function(){
            resolve('Downloading done ;)')
        }, 1000)
    })
}

function processFile(previousResult){
      return new Promise((resolve, reject)=>{
        console.log('File Processing process has started.. ')
        setTimeout(function(){
            resolve(`File has been processed after:  ;) ${previousResult}}`)
        }, 1200)
    })
}

function uploadFile(previousResult){
     return new Promise((resolve, reject)=>{
        console.log('Upload Processing process has started..')
        setTimeout(function(){
            resolve(`File has been Uploaded ; : after: ) ${previousResult}`)
        }, 2000)
    })
}

function startOperation(){
    downloadFile()
    .then((result)=> {
        console.log(result)
        return processFile(result)
    })
    .then((result)=>{
        console.log(result)
        return uploadFile(result)
    })
    .then((result)=> console.log(result))
    .catch((error)=> console.log(error))
}  

startOperation()