function processNumber(data, callback){
    let squareddata= data * data; 
    callback(squareddata)
}

processNumber(5, (data)=> {
    console.log('The squared value is : ' + data); 
})