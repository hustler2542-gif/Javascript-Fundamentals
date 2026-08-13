const user1 = {
    name: "Aru",
    score: 80
};

const user2 = user1;

user2.score = 100;

/**
 * 
 * Here user1 is created as object in heap 
 * user2 = user1 is explicitly not saying that create new object of 
 * user2 and create these properties for user2 
 * instead it is referencing borrowing the properties from user1
 * that's why changing properties from user2 affects user1 object as well 
 */