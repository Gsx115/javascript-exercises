const findTheOldest = function(people) {
    const curYear = 2022;
    let oldest;
    people.forEach((person) => {
        if(oldest === undefined) {
            oldest = person;
        }
        let oldestAge = (oldest.hasOwnProperty('yearOfDeath')) ? 
            (oldest['yearOfDeath'] - oldest['yearOfBirth']) : (curYear - oldest['yearOfBirth']);
        let age = (person.hasOwnProperty('yearOfDeath')) ? 
            (person['yearOfDeath'] - person['yearOfBirth']) : (curYear - person['yearOfBirth']);
        if (oldestAge < age) oldest = person;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
