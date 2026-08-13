const students = [
    { name: "Aru", marks: 80 },
    { name: "Rahul", marks: 72 },
    { name: "Neha", marks: 91 }
];

/**
 * keep students who didn't score less than 80 unchanged 
 * change students who scored less than 80\
 * 
 * filter -> selects based on criteria 
 * map -> transforms data 
 * 
 * map is useful but how do I keep unchanged  data ? 
 */

const mapped = students.map((x)=> {
    const tempstore = {...x}
    if(tempstore.marks < 80){
        tempstore.marks = tempstore.marks + 5;
        return tempstore 
    }
    else {
        return tempstore;
    }
})

console.log(mapped)
console.log(students)