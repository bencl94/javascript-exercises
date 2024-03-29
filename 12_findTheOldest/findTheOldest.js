const findTheOldest = function (people) {
    let oldest = {
        name: '', age: 0
    };

    people.forEach((person) => {
        if (oldest.name === '') {
            oldest = { ...person };
            oldest.age = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        }

        person.age = getAge(person.yearOfBirth, person.yearOfDeath);

        if (person.age > oldest.age) {
            oldest = { ...person };
        }
    });

    return oldest;
};

const getAge = function (birth, death) {

    if (!death) {
        death = new Date().getFullYear();
    }

    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
