function divide(a, b, callback){
    callback(a,b)
}

divide(1,10, (d1,d2)=> {
    console.log('Checking..')
    setTimeout(function(){
        if(d1 > 0 && d2 > 0)
            console.log('No error divison operation can be perfomed')
        else
            console.log('One of the value is zero or lesser than zero cant perform')
    }, 1000)
})
