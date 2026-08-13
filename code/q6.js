// const person = {
//     name:'Drake', 
//     age: 32, 
//     introduce: () => 'Hello my name is '+ person.name + ', and my age is, ' + person.age
// }

// console.log(person.introduce()); 

student = {
    name: 'Ary',
    age: 20, 
    introduce: function() {
        return (`${this.name} is ${this.age} year old`)
    }
}

console.log(student.introduce())