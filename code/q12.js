const students = [
    { name: "Aru", marks: 80 },
    { name: "Rahul", marks: 72 },
    { name: "Neha", marks: 91 }
];

const scoredmore = students.filter((x) => x.marks >= 80 || x.marks < 80)

console.log(scoredmore)

// wdym by preseve ? 
