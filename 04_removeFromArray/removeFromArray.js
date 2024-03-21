const removeFromArray = function (array, ...args) {

    args.map((arg) => {
        array = array.filter(value => value !== arg);
    })

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
