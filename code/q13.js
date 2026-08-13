const students = [
    { name: "Aru", marks: 80 },
    { name: "Rahul", marks: 72 },
    { name: "Neha", marks: 91 }
];

const filetereddata = students.filter((x)=> x.marks >= 80)

const mappeddata = filetereddata.map((x)=> x.name.toUpperCase())

console.log(mappeddata)

// this works bro