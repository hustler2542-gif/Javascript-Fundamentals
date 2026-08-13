// If age is above 18 return true or false otherwise. 

let age = -18; 

isAdult = (userAge) => {
    if(userAge >= 18)
        return true;
    else 
        return false;
}

console.log(isAdult(age))