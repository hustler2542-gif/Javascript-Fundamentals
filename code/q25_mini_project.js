const students = [
    { name: "Aru", marks: 85, active: true },
    { name: "Rahul", marks: 72, active: false },
    { name: "Neha", marks: 91, active: true },
    { name: "Karan", marks: 65, active: true },
    { name: "Priya", marks: 95, active: true }
];

/**
All active students.
Students who scored ≥ 80.
Names of students who scored ≥ 80.
Names of active students who scored ≥ 80.
Whether at least one student scored 90+.
Whether every active student passed.
Total marks of all students.
A new array where students below 80 receive +5 marks.
An array containing only { name, marks } for each student.
A final formatted sentence for each high-scoring student using a template literal.

*/

const highperforming = students.filter((x)=> x.marks >= 80)
const lowperforming = students.filter((x)=> x.marks < 80)

console.log('All the active students: ')
const active_students = students.filter((x)=> x.active == true)

console.log(active_students)
console.log('\n')

console.log('Name of students who score more than 80 marks :')
highperforming.forEach(element => {
    console.log(element.name); 
});

console.log('\n')

console.log('Name of students who score more than 80 marks and are active:')
highperforming.forEach(element => {
    if(element.active == true)
        console.log(element.name); 
});
console.log('\n')

console.log('Whether atleast one student score more than 90+' + students.some((x)=> x.marks > 90))
console.log('\n')

console.log('Whether every active student passed' + students.every((x)=> x.active == true && x.marks > 50))
console.log('\n')

console.log('Total marks of all the students')

const Totalmarks = students.reduce((accumalator, mks)=> {
    return accumalator + mks.marks; 
},0)

console.log(Totalmarks)
console.log('\n')


console.log('Student below 80 marks get +5 bonus: ')

lowperforming.forEach((element)=>{
    element.marks += 5; 
})

console.log(lowperforming); 
console.log('\n'); 

const summaryofstudents = students.map((x) => 
{
    let {name, marks} = x 
    return {name, marks}
})

console.log('Array containing only name and marks of student: ')
console.log(summaryofstudents)

console.log('\n'); 

console.log('High performing students using template literals: ')
highperforming.forEach((element) => {
    console.log(`${element.name} scored ${element.marks}`)
})