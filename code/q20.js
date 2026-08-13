const user1 = {
    name: "Aru",
    score: 80
};

const user2 = {...user1};

user2.score = 100;

console.log(user1.score)
console.log(user2.score)