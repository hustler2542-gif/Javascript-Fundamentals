// underlying source is pointed then why altering isn't changing the value in og ? also it didn't remove the value from og array it did something 
// called shallow copy 
const numbers = [12, 5, 18, 7, 22, 3];

console.log('Before filter: ' + numbers)

const greaterthan10 = numbers.filter((x)=> x > 10)


console.log('After filter: ' + greaterthan10)

greaterthan10[0] = 1;
console.log('Before : ' + numbers)
console.log('After: ' + greaterthan10)


