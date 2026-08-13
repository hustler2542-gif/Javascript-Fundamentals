// const person = {
//     name:'Drake', 
//     age: 32, 
//     introduce: () => 'Hello my name is '+ person.name + ', and my age is, ' + person.age
// }

// console.log(person.introduce()); 


class personclass {
    constructor(name, age){
        this.age = age
        this.name = name
    }

    person = {
        introduce: () => 'Hello my name is ' + this.name + ' Im ' + this.age + ' years old.'
    }
}

let obj1 = new personclass('Aru', 20)

console.log(obj1.person.introduce())