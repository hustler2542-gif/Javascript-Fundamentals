function step1(data, callback){
    callback(data + 10)
}

function step2(data, callback){
    callback(data * 2)
}

function step3(data, callback){
    callback(data - 5)
}

step1(5, (data1)=> {
    step2(data1, (data2)=>{
        step3(data2, (data3)=> {
            console.log('The final result is '+ data3)
        })
    })
})