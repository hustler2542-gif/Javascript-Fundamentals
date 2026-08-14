function multiplier(arr, callback){
    console.log('Processing...')
    callback(arr.map((x)=> x * 2))
}

function displayData(arr){
    console.log(arr)
    console.log('Done')
}

console.log('a')

multiplier([1,2,3,4,5], (arr)=>{
    // why passing argument to settimeout as function gives undefined even if you passed just variable arguement let alone callback 
    setTimeout( function() {
        displayData(arr)
    },1000) 
})

console.log('b')