
function doop(callback){
    data = callback('Aryan')
    console.log('This was callbacks return: ')
    return data; 
}


console.log(doop((greet)))
console.log(greet('Aryan') + " Normal call"); 


function greet(name) {
    return "Hello " + name;
}