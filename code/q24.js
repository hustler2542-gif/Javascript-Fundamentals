const students = [
    { name: "Aru", age: 20, marks: 85 },
    { name: "Rahul", age: 21, marks: 72 },
    { name: "Neha", age: 20, marks: 91 }
];

const filteredstudents = students.filter((x)=> x.marks > 80)

const mapped = filteredstudents.map((x)=> {
    let {name} = x
    let {marks} = x 

    return name + ' Scored ' + marks; 
})

console.log(mapped)