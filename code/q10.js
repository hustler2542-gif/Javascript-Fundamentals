const students = [
    { name: "Aru", marks: 80 },
    { name: "Rahul", marks: 72 },
    { name: "Neha", marks: 91 }
];

const namesonly = students.map((x) => x.name);
console.log(namesonly)