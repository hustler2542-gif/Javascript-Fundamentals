const student = {
    name: "Aru",
    age: 20,
    marks: 85
};
console.log(student)
const propertyName = 'passed'
const propertyValue = true

const updatedStudent = {
    ...student, 
    [propertyName]: propertyValue, 
}
updatedStudent.marks = 95 

console.log(student)
console.log(updatedStudent)

