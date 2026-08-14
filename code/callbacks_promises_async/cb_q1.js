function add (a,b, callback){
    console.log('This is addition: ')
    console.log(a+b)
    callback(a,b)
}

function sub(a,b, callback){
    console.log('\nThis is substraction: ')
    console.log(a-b)
    callback(a,b)
}

function multiplication(a,b){
    console.log('\nThis is multiplication: ')
    console.log(a * b); 
}


const fnc = add(10,5, (d1,d2)=>{
    sub(d1,d2, (d1,d2)=> {
        multiplication(d1,d2)
    })
})
