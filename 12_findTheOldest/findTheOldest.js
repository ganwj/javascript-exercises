const findTheOldest = function (people) {
    let oldest = -Infinity;

    return people.reduce((obj, person) => {
        if (!person.yearOfDeath) {
            currentYear = new Date().getFullYear();
            age = currentYear - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }

        if (age > oldest) {
            oldest = age;
            obj = person;
        }

        return obj;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
